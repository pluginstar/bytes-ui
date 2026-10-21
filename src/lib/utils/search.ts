import FlexSearch from "flexsearch";

export type SearchContent = {
	title: string;
	content: string;
	description: string;
	href: string;
};

export type SearchResult = SearchContent & {
	snippet?: string;
	highlights?: string[];
	category?: string;
};

let titleIndex: any;
let contentIndex: any;
let content: SearchContent[] = [];

export function createContentIndex(data: SearchContent[]) {
	// @ts-ignore
	const IndexClass = FlexSearch.Index || FlexSearch.default?.Index || FlexSearch;
	titleIndex = new IndexClass({
		tokenize: "forward",
		resolution: 9,
	});

	contentIndex = new IndexClass({
		tokenize: "forward",
		resolution: 5,
	});

	data.forEach((item, i) => {
		titleIndex.add(i, item.title);
		contentIndex.add(i, `${item.content} ${item.description}`);
	});

	content = data;
}

function getContentSnippet(text: string, query: string, maxLength = 150): string {
	const words = query.toLowerCase().split(/\s+/);
	const contentLower = text.toLowerCase();

	let bestIndex = -1;

	for (const word of words) {
		const index = contentLower.indexOf(word);
		if (index !== -1 && (bestIndex === -1 || index < bestIndex)) {
			bestIndex = index;
		}
	}

	if (bestIndex === -1) {
		return text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");
	}

	const start = Math.max(0, bestIndex - Math.floor(maxLength / 2));
	const end = Math.min(text.length, start + maxLength);
	const snippet = text.slice(start, end);

	return (start > 0 ? "..." : "") + snippet + (end < text.length ? "..." : "");
}

function highlightMatches(text: string, query: string): string {
	const words = query
		.toLowerCase()
		.split(/\s+/)
		.filter((w) => w.length > 1);
	let highlighted = text;

	for (const word of words) {
		const regex = new RegExp(`(${word})`, "gi");
		highlighted = highlighted.replace(regex, "<mark class=\"bg-yellow-200/50 dark:bg-yellow-500/30 text-foreground font-semibold rounded-xs px-0.5\">$1</mark>");
	}

	return highlighted;
}

function categorizeResult(href: string): string {
	if (href.includes("/components/")) return "Components";
	if (href.includes("/utilities/")) return "Utilities";
	if (href.includes("/type-helpers/")) return "Type Helpers";
	return "Overview";
}

function fuzzyMatch(text: string, query: string): boolean {
	const textLower = text.toLowerCase();
	const queryLower = query.toLowerCase();
	if (textLower.includes(queryLower)) return true;

	let queryIndex = 0;
	for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
		if (textLower[i] === queryLower[queryIndex]) {
			queryIndex++;
		}
	}
	return queryIndex === queryLower.length;
}

export function searchContentIndex(query: string): SearchResult[] {
	if (!query.trim() || !titleIndex || !contentIndex) return [];

	const titleResults = titleIndex.search(query, { limit: 20, suggest: true });
	const contentResults = contentIndex.search(query, { limit: 20, suggest: true });

	const resultMap = new Map<number, { score: number; source: string }>();

	for (const id of titleResults) {
		resultMap.set(Number(id), { score: 10, source: "title" });
	}

	for (const id of contentResults) {
		const numId = Number(id);
		const existing = resultMap.get(numId);
		if (existing) {
			existing.score += 5;
		} else {
			resultMap.set(numId, { score: 5, source: "content" });
		}
	}

	if (resultMap.size === 0) {
		content.forEach((item, idx) => {
			if (fuzzyMatch(item.title, query)) {
				resultMap.set(idx, { score: 8, source: "fuzzy-title" });
			} else if (fuzzyMatch(item.content, query) || fuzzyMatch(item.description, query)) {
				resultMap.set(idx, { score: 3, source: "fuzzy-content" });
			}
		});
	}

	const sortedResults = Array.from(resultMap.entries())
		.sort(([, a], [, b]) => b.score - a.score)
		.slice(0, 10);

	return sortedResults.map(([idx]) => {
		const item = content[idx];
		const snippet = getContentSnippet(item.content, query);
		return {
			...item,
			snippet: highlightMatches(snippet, query),
			highlights: query
				.toLowerCase()
				.split(/\s+/)
				.filter((w) => w.length > 1),
			category: categorizeResult(item.href),
		};
	});
}

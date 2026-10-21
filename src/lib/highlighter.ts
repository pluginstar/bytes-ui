import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

export async function getHighlighter(): Promise<Highlighter> {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ["vitesse-light", "vitesse-dark"],
			langs: ["svelte", "css", "typescript", "javascript", "html"]
		});
	}
	return highlighterPromise;
}

export async function highlightCode(code: string, lang: string = "svelte"): Promise<string> {
	try {
		const highlighter = await getHighlighter();
		return highlighter.codeToHtml(code, {
			lang,
			themes: {
				light: "vitesse-light",
				dark: "vitesse-dark"
			}
		});
	} catch (e) {
		console.error("Highlighting error:", e);
		return `<pre><code>${code}</code></pre>`;
	}
}

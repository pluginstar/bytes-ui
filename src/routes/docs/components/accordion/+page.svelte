<script lang="ts">
	import { Accordion, ComponentPreview } from "#lib";

	const items = [
		{
			value: "1",
			title: "What makes Bytes UI different?",
			content: "Bytes UI extracts the artisanal, handcrafted inline Tailwind designs from Bits UI documentation into reusable, token-backed Svelte 5 components."
		},
		{
			value: "2",
			title: "How does Concentric Radius work?",
			content: "Inner Radius = Outer Radius - Padding. This mathematical rule guarantees that nested corners remain visually aligned and never crowd each other."
		},
		{
			value: "3",
			title: "Are all components accessible?",
			content: "Yes! Bytes UI is built directly on top of Bits UI's headless WAI-ARIA compliant foundations with full keyboard navigation and screen reader support."
		}
	];

	const codeExample = `<script lang="ts">
  import { Accordion } from "bytes-ui";
<\/script>

<Accordion.Root type="single">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Accordion
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			A vertically stacked set of interactive headings that reveal or hide associated sections of content with fluid animations.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="accordion-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-md">
					<Accordion.Root type="single">
						{#each items as item}
							<Accordion.Item value={item.value}>
								<Accordion.Trigger>
									{item.title}
								</Accordion.Trigger>
								<Accordion.Content>
									{item.content}
								</Accordion.Content>
							</Accordion.Item>
						{/each}
					</Accordion.Root>
				</div>
			{/snippet}
		</ComponentPreview>
</div>

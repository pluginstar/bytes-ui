<script lang="ts">
	import { Toggle, ComponentPreview } from "#lib";

	let bookmarked = $state(false);

	const codeExample = `<script lang="ts">
  import { Toggle } from "bytes-ui";
  let pressed = $state(false);
<\/script>

<Toggle bind:pressed aria-label="Toggle bookmark">
  Bookmark
</Toggle>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Toggle
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A two-state button that can be either on or off with smooth active pressed states.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="toggle-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex items-center gap-4">
					<Toggle bind:pressed={bookmarked} aria-label="Bookmark">
						<svg class="size-4 mr-2 {bookmarked ? 'fill-current' : 'fill-none'}" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
						</svg>
						{bookmarked ? "Bookmarked" : "Bookmark"}
					</Toggle>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>

<script lang="ts">
	import { RatingGroup, ComponentPreview } from "#lib";

	let rating = $state(4);

	const codeExample = `<script lang="ts">
  import { RatingGroup } from "bytes-ui";
  let rating = $state(4);
<\/script>

<div class="flex flex-col items-center gap-3">
  <RatingGroup bind:value={rating} max={5} />
  <span class="text-xs font-mono text-muted-foreground">{rating} of 5 stars</span>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Rating Group
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Provides an accessible rating system for reviews, feedback, and scoring interactions.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="rating-group-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-3">
					<RatingGroup bind:value={rating} max={5} />
					<span class="text-xs font-mono text-muted-foreground">{rating} of 5 stars</span>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>

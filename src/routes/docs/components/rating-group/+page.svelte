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
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Rating Group
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Provides an accessible rating system for reviews, feedback, and scoring interactions.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="rating-group-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-3">
					<RatingGroup bind:value={rating} max={5} />
					<span class="text-xs font-mono text-muted-foreground">{rating} of 5 stars</span>
				</div>
			{/snippet}
		</ComponentPreview>
</div>

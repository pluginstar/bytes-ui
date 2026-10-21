<script lang="ts">
	import { Pagination, ComponentPreview } from "#lib";

	let page = $state(1);

	const codeExample = `<script lang="ts">
  import { Pagination } from "bytes-ui";
  let page = $state(1);
<\/script>

<Pagination count={100} perPage={10} bind:page />`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Pagination
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Enables navigation across a discrete set of pages for long lists or tabular data.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="pagination-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-4">
					<Pagination count={120} perPage={10} bind:page />
				</div>
			{/snippet}
		</ComponentPreview>
</div>

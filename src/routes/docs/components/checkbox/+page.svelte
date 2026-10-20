<script lang="ts">
	import { Checkbox, ComponentPreview } from "#lib";

	let checked = $state(true);

	const codeExample = `<script lang="ts">
  import { Checkbox } from "bytes-ui";
  let terms = $state(false);
<\/script>

<div class="flex items-center gap-3">
  <Checkbox id="terms" bind:checked={terms} />
  <label for="terms" class="text-sm font-medium leading-none cursor-pointer">
    Accept terms and conditions
  </label>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Checkbox
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A control that allows the user to toggle between checked and not checked states. Styled with <code>rounded-item</code> (6px) and crisp micro-shadows.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="checkbox-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center justify-center gap-3">
					<div class="flex items-center gap-3">
						<Checkbox id="terms" bind:checked />
						<label for="terms" class="text-sm font-medium leading-none cursor-pointer select-none">
							Accept terms and conditions
						</label>
					</div>
					<p class="text-xs font-mono text-muted-foreground">State: {checked ? "true" : "false"}</p>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>

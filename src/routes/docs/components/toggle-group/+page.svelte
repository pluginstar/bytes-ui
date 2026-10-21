<script lang="ts">
	import { ToggleGroup, ComponentPreview } from "#lib";

	let format = $state(["bold"]);

	const codeExample = `<script lang="ts">
  import { ToggleGroup } from "bytes-ui";
  let format = $state(["bold"]);
<\/script>

<ToggleGroup.Root type="multiple" bind:value={format}>
  <ToggleGroup.Item value="bold">B</ToggleGroup.Item>
  <ToggleGroup.Item value="italic">I</ToggleGroup.Item>
  <ToggleGroup.Item value="underline">U</ToggleGroup.Item>
</ToggleGroup.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Toggle Group
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			A set of two-state buttons that can be toggled on or off, commonly used for editor formatting toolbars.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="toggle-group-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-3">
					<ToggleGroup.Root type="multiple" bind:value={format}>
						<ToggleGroup.Item value="bold" aria-label="Toggle bold">
							<span class="font-bold">B</span>
						</ToggleGroup.Item>
						<ToggleGroup.Item value="italic" aria-label="Toggle italic">
							<span class="italic font-serif">I</span>
						</ToggleGroup.Item>
						<ToggleGroup.Item value="underline" aria-label="Toggle underline">
							<span class="underline">U</span>
						</ToggleGroup.Item>
						<ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
							<span class="line-through">S</span>
						</ToggleGroup.Item>
					</ToggleGroup.Root>
					<p class="text-xs font-mono text-muted-foreground">Active styles: {format.join(", ") || "none"}</p>
				</div>
			{/snippet}
		</ComponentPreview>
</div>

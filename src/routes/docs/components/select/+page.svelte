<script lang="ts">
	import { Select, ComponentPreview } from "#lib";

	const frameworks = [
		{ value: "svelte", label: "Svelte 5" },
		{ value: "react", label: "React" },
		{ value: "vue", label: "Vue.js" },
		{ value: "solid", label: "SolidJS" },
	];

	let selected = $state("svelte");

	const codeExample = `<script lang="ts">
  import { Select } from "bytes-ui";

  const items = [
    { value: "svelte", label: "Svelte 5" },
    { value: "react", label: "React" },
  ];
<\/script>

<Select.Root type="single">
  <Select.Trigger class="w-[200px]">
    <Select.Value placeholder="Select framework" />
  </Select.Trigger>
  <Select.Content>
    {#each items as item}
      <Select.Item value={item.value} label={item.label}>
        {item.label}
      </Select.Item>
    {/each}
  </Select.Content>
</Select.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Select
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Displays a list of options for the user to pick from—triggered by a button styled with <code>rounded-input</code> and <code>shadow-popover</code>.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="select-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-[260px]">
					<Select.Root type="single" bind:value={selected}>
						<Select.Trigger>
							<Select.Value placeholder="Select a framework..." />
						</Select.Trigger>
						<Select.Content>
							{#each frameworks as item}
								<Select.Item value={item.value} label={item.label}>
									{item.label}
								</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>

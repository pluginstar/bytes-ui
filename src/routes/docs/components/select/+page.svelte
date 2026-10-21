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
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Select
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Displays a list of options for the user to pick from—triggered by a button styled with <code>rounded-input</code> and <code>shadow-popover</code>.
		</p>
	</div>

	<!-- Component Preview -->
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
</div>

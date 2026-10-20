<script lang="ts">
	import { Combobox, ComponentPreview } from "#lib";

	const frameworks = [
		{ value: "svelte", label: "Svelte" },
		{ value: "react", label: "React" },
		{ value: "vue", label: "Vue" },
		{ value: "angular", label: "Angular" },
		{ value: "solid", label: "Solid" },
		{ value: "astro", label: "Astro" },
	];

	let searchValue = $state("");
	let selectedValue = $state("svelte");

	const filteredFrameworks = $derived(
		searchValue === ""
			? frameworks
			: frameworks.filter((f) => f.label.toLowerCase().includes(searchValue.toLowerCase()))
	);

	const codeExample = `<script lang="ts">
  import { Combobox } from "bytes-ui";

  const frameworks = [
    { value: "svelte", label: "Svelte" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
  ];
  let searchValue = $state("");
  let selectedValue = $state("svelte");
<\/script>

<Combobox.Root type="single" bind:value={selectedValue}>
  <Combobox.Input
    placeholder="Search framework..."
    oninput={(e) => (searchValue = (e.currentTarget as HTMLInputElement).value)}
  />
  <Combobox.Content>
    {#each frameworks as item}
      <Combobox.Item value={item.value} label={item.label} />
    {/each}
  </Combobox.Content>
</Combobox.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Combobox
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Combines a text input with a filterable listbox, allowing users to filter and select from options.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="combobox-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-xs">
					<Combobox.Root
						type="single"
						bind:value={selectedValue}
						onOpenChangeComplete={(open: boolean) => {
							if (!open) searchValue = "";
						}}
					>
						<Combobox.Input
							placeholder="Search framework..."
							oninput={(e: Event & { currentTarget: HTMLInputElement }) => (searchValue = e.currentTarget.value)}
						/>
						<Combobox.Content>
							{#each filteredFrameworks as item (item.value)}
								<Combobox.Item value={item.value} label={item.label} />
							{:else}
								<div class="p-2 text-center text-xs text-muted-foreground">
									No framework found.
								</div>
							{/each}
						</Combobox.Content>
					</Combobox.Root>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>

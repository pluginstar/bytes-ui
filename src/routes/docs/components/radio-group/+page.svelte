<script lang="ts">
	import { RadioGroup, ComponentPreview } from "#lib";

	let plan = $state("pro");

	const codeExample = `<script lang="ts">
  import { RadioGroup } from "bytes-ui";
  let plan = $state("pro");
<\/script>

<RadioGroup.Root bind:value={plan}>
  <div class="flex items-center gap-2">
    <RadioGroup.Item value="free" id="r1" />
    <label for="r1" class="text-sm">Free Tier</label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroup.Item value="pro" id="r2" />
    <label for="r2" class="text-sm">Pro ($19/mo)</label>
  </div>
</RadioGroup.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Radio Group
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="radio-group-demo" code={codeExample}>
			{#snippet preview()}
				<div class="w-full max-w-xs space-y-4">
					<RadioGroup.Root bind:value={plan}>
						<div class="flex items-center gap-3">
							<RadioGroup.Item value="starter" id="r1" />
							<label for="r1" class="text-sm font-medium leading-none cursor-pointer">
								Starter (Free)
							</label>
						</div>
						<div class="flex items-center gap-3">
							<RadioGroup.Item value="pro" id="r2" />
							<label for="r2" class="text-sm font-medium leading-none cursor-pointer">
								Pro ($29/month)
							</label>
						</div>
						<div class="flex items-center gap-3">
							<RadioGroup.Item value="enterprise" id="r3" />
							<label for="r3" class="text-sm font-medium leading-none cursor-pointer">
								Enterprise (Custom)
							</label>
						</div>
					</RadioGroup.Root>
					<p class="text-xs font-mono text-muted-foreground">Selected: {plan}</p>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>

<script lang="ts">
	import { Switch, ComponentPreview } from "#lib";

	let enabled = $state(true);
	let airplaneMode = $state(false);

	const codeExample = `<script lang="ts">
  import { Switch } from "bytes-ui";
  let enabled = $state(true);
<\/script>

<div class="flex items-center gap-3">
  <Switch id="airplane-mode" bind:checked={enabled} />
  <label for="airplane-mode" class="text-sm font-medium cursor-pointer">
    Airplane Mode
  </label>
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Switch
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			A control that allows the user to toggle between checked and unchecked states with fluid thumb transitions.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="switch-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-3">
						<Switch id="airplane" bind:checked={airplaneMode} />
						<label for="airplane" class="text-sm font-medium leading-none cursor-pointer select-none">
							Airplane Mode ({airplaneMode ? "On" : "Off"})
						</label>
					</div>

					<div class="flex items-center gap-3">
						<Switch id="notifications" bind:checked={enabled} />
						<label for="notifications" class="text-sm font-medium leading-none cursor-pointer select-none">
							Push Notifications ({enabled ? "Active" : "Muted"})
						</label>
					</div>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Keyboard Navigation</h2>
		<p class="text-foreground/80 leading-relaxed text-[15px]">
			Focus the switch via <kbd class="px-1.5 py-0.5 rounded-sm bg-muted border text-xs font-mono">Tab</kbd> and toggle its state with <kbd class="px-1.5 py-0.5 rounded-sm bg-muted border text-xs font-mono">Space</kbd> or <kbd class="px-1.5 py-0.5 rounded-sm bg-muted border text-xs font-mono">Enter</kbd>.
		</p>
	</section>
</div>

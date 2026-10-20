<script lang="ts">
	import { PinInput, ComponentPreview } from "#lib";

	let pin = $state("");

	const codeExample = `<script lang="ts">
  import { PinInput } from "bytes-ui";
  let pin = $state("");
<\/script>

<PinInput bind:value={pin} maxlength={6} />`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Pin Input
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			Allows users to input a sequence of characters, ideal for one-time passwords (OTP) or verification codes.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="pin-input-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-4">
					<PinInput bind:value={pin} maxlength={6} />
					<p class="text-xs font-mono text-muted-foreground">Current code: {pin || "empty"}</p>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>

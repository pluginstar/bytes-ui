<script lang="ts">
	import { PinInput, ComponentPreview } from "#lib";

	let pin = $state("");

	const codeExample = `<script lang="ts">
  import { PinInput } from "bytes-ui";
  let pin = $state("");
<\/script>

<PinInput bind:value={pin} maxlength={6} />`;
</script>

<div class="space-y-8">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			PIN Input
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Allows users to input a sequence of characters, ideal for one-time passwords (OTP) or verification codes.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="pin-input-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex flex-col items-center gap-4">
					<PinInput bind:value={pin} maxlength={6} />
					<p class="text-xs font-mono text-muted-foreground">Current code: {pin || "empty"}</p>
				</div>
			{/snippet}
		</ComponentPreview>
</div>

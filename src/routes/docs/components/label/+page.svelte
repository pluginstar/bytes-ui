<script lang="ts">
	import { Label, Input, Checkbox, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { Label, Input } from "bytes-ui";
<\/script>

<div class="grid w-full max-w-sm items-center gap-2">
  <Label for="email">Email</Label>
  <Input id="email" type="email" placeholder="name@example.com" />
</div>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Label
		</h1>
		<p class="text-foreground/40 mt-3 text-balance text-lg font-semibold leading-7 tracking-[-0.01em] sm:text-[21px] mb-8">
			Renders an accessible label associated with controls using standard accessibility patterns.
		</p>
	</div>

	<!-- Component Preview -->
	<ComponentPreview name="label-demo" code={codeExample}>
			{#snippet preview()}
				<div class="grid w-full max-w-sm items-center gap-2">
					<Label for="email-demo">Email Address</Label>
					<Input id="email-demo" type="email" placeholder="name@example.com" />
				</div>
			{/snippet}
		</ComponentPreview>
</div>

<script lang="ts">
	import { Avatar, ComponentPreview } from "#lib";

	const codeExample = `<script lang="ts">
  import { Avatar } from "bytes-ui";
<\/script>

<Avatar.Root>
  <Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
  <Avatar.Fallback>HB</Avatar.Fallback>
</Avatar.Root>`;
</script>

<div class="space-y-12">
	<!-- Page Header -->
	<div class="space-y-3 pb-2 border-b border-border-card">
		<h1 class="scroll-m-20 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
			Avatar
		</h1>
		<p class="text-foreground/50 mt-3 text-balance text-lg font-normal leading-7 tracking-[-0.01em] sm:text-[20px]">
			An image element with a fallback for representing the user.
		</p>
	</div>

	<!-- Component Preview -->
	<section class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Preview</h2>
		<ComponentPreview name="avatar-demo" code={codeExample}>
			{#snippet preview()}
				<div class="flex items-center gap-4">
					<Avatar.Root class="size-12">
						<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
						<Avatar.Fallback class="text-sm font-semibold">HB</Avatar.Fallback>
					</Avatar.Root>

					<Avatar.Root class="size-12">
						<Avatar.Image src="https://example.com/broken-avatar.jpg" alt="Broken image" />
						<Avatar.Fallback class="text-sm font-semibold">JD</Avatar.Fallback>
					</Avatar.Root>

					<Avatar.Root class="size-9">
						<Avatar.Fallback class="text-xs font-semibold">SM</Avatar.Fallback>
					</Avatar.Root>
				</div>
			{/snippet}
		</ComponentPreview>
	</section>
</div>

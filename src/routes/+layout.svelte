<script>
	import './app.css';
</script>

<div class="app-root">
	<slot />
</div>

<style>
	.app-root {
		@apply w-[100svw] h-[100svh] overflow-hidden bg-neutral-200 tracking-[-0.07rem];
	}
</style>

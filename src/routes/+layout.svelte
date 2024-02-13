<script>
	import './app.css';
</script>

<div class="app-root scrollbar-none">
	<slot />
</div>

<style>
	.app-root {
		@apply w-[100svw] h-[100svh] overflow-hidden overflow-y-scroll bg-neutral-200 tracking-[-0.07rem] pt-14;

		max-height: 100svh;
	}
</style>

<script>
	import '$lib/styles/global.css';
</script>

<div class="app-root scrollbar-none">
	<slot />
</div>

<style>
	.app-root {
		@apply w-[100svw] h-[100svh] overflow-hidden overflow-y-scroll bg-neutral-200 tracking-tighter pt-14 font-medium;

		max-height: 100svh;
	}
</style>

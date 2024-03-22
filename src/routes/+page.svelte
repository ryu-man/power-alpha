<script lang="ts">
	import SlideUpModal from '$lib/components/SlideUpModal.svelte';

	let open = false;

	function onclick() {
		open = !open;
	}
</script>

<div class="flex flex-col items-center overflow-hidden p-4">
	<button class="bg-black text-white px-3 py-2" on:click={onclick}>Open modal</button>

	<SlideUpModal bind:open />
</div>

<style lang="postcss">
</style>

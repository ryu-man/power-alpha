<script lang="ts">
	import SlideUpModal from '$lib/components/SlideUpModal.svelte';

	let open = false;

	function onclick() {
		open = !open;
	}
</script>

<div class="flex flex-col items-center overflow-hidden">
	<button on:click={onclick}>Open modal</button>

	<SlideUpModal bind:open />
</div>

<style lang="postcss">
	.fields {
		@apply flex justify-between;
	}
	.field {
		@apply flex flex-col font-medium text-2xl py-3 px-4;

		&.field-h {
			@apply flex-row justify-between w-full;
		}

		& > .label {
			@apply text-base text-[#1E1E1E] font-normal;
		}
	}
</style>

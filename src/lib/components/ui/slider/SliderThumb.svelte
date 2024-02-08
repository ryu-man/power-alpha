<script lang="ts">
</script>

<button class="slider-thumb" on:click|stopPropagation>
	<div class="slider-thumb-inner flex-1 text-center">
			<slot />
	</div>
</button>

<style lang="postcss">
	.slider-thumb {
		@apply absolute top-1/2 text-lg select-none;

		z-index: 1;
		left: var(--amount-slider-progress, 0%);
		transform: translate(calc(var(--amount-slider-progress, 0%) * -1), -50%);
	}

	.slider-thumb :global(*) {
		@apply pointer-events-none;
	}

	.slider-thumb-inner {
		@apply relative flex items-center justify-center bg-black text-white px-2 py-[5px] border border-black/10 w-full h-full leading-none;

		min-width: 6ch;
	}
</style>

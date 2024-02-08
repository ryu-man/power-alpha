<script lang="ts">
	import { onMount } from 'svelte';
	import SliderThumb from './SliderThumb.svelte';

	let inputElement: HTMLInputElement;

	export let min = 0;
	export let value = min;
	export let max = 100;
	export let step = 0.1;
	export let logo: string | undefined = undefined;

	value = Math.max(min, value);

	let clientWidth = 0;
	let local = 'en-US';

	$: length = max - min;

	$: progress = (value - min) * (100 / length);

	$: exp = Math.log10(step || 1);
	$: fractionDigits = exp < 0 ? Math.abs(exp) : 0;

	onMount(() => {
		if ('navigator' in window) {
			local = navigator?.language ?? 'en-US';
		}
	});

	let pressed = false;

	let anchorX = 0;
	let thumbClientWidth = 0;
	function onpointerdown(ev: PointerEvent) {
		const target = ev.target as HTMLElement;

		if (target.tagName === 'BUTTON' && target.classList.contains('slider-thumb')) {
			anchorX = ev.offsetX;
			thumbClientWidth = target.clientWidth;
		}
		pressed = true;
	}
	function onpointerup(ev: PointerEvent) {
		anchorX = 0;
		pressed = false;
	}

	function onpointermove(ev: PointerEvent) {
		if (!pressed) return;

		const currentTarget = ev.currentTarget as HTMLElement;
		const boundingClientRect = currentTarget.getBoundingClientRect();

		const localClientX = ev.clientX - boundingClientRect.left;

		const clientX = Math.max(0, Math.min(clientWidth, Math.ceil(localClientX)));

		const localX = Math.min(clientX - anchorX + thumbClientWidth * (progress / 100), clientWidth);

		const exp = -Math.trunc(Math.log10(step || 1));
		const powerOfTen = Math.pow(10, exp);

		const rawValue = min + Math.ceil(localX * length) / clientWidth;

		value = Math.max(min, Math.min(max, Math.ceil(rawValue * powerOfTen) / powerOfTen));
	}
</script>

<label
	class="pa-slider"
	style:min-height={$$slots.top ? '76px' : '44px'}
	style:--amount-slider-progress="{progress}%"
	bind:clientWidth
	on:pointermove|stopPropagation={onpointermove}
	on:pointerdown={onpointerdown}
	on:pointerup={onpointerup}
	on:pointerleave={onpointerup}
>
	<div class="absolute bottom-0 inset-x-0 h-11">
		<div class="relative w-full h-full flex items-center">
			<input
				class="w-full min-w-full opacity-0"
				type="range"
				bind:value
				{min}
				{max}
				{step}
				bind:this={inputElement}
			/>

			<div
				class="absolute top-1/2track min-w-full bg-black pointer-events-none"
				style:min-height="1px"
			/>

			<div class="h-[11px] aspect-square bg-black absolute left-0 top-1/2 -translate-y-1/2" />
			<div class="h-[11px] aspect-square bg-black absolute right-0 top-1/2 -translate-y-1/2" />

			<SliderThumb>
				{value.toLocaleString(local, { minimumFractionDigits: fractionDigits })}
			</SliderThumb>
		</div>
	</div>
</label>

<style lang="postcss">
	.pa-slider {
		@apply relative w-full flex items-center cursor-pointer;
		touch-action: none;
	}

	input[type='range'] {
		-webkit-appearance: none !important;
		background: black;
		height: 2px;
		opacity: 0;

		&::-webkit-slider-thumb {
			background: black;
			width: 16px;
			height: 16px;
			appearance: none;
		}
	}
</style>

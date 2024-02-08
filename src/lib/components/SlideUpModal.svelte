<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Slider } from './ui';

	export let open = false;

	function onclose() {
		open = false;
	}
</script>

{#if open}
	<div
		class="modal slide flex flex-col overflow-hidden max-h-full border border-solid border-black/10 rounded-t-2xl shadow-md bg-[#d9d9d9]"
		transition:fly={{ duration: 100, y: window.innerHeight / 4 }}
	>
		<div
			class="flex flex-col relative px-4 pt-12 pb-9 gap-9 overflow-y-auto max-h-full scrollbar-none w-full"
		>
			<div class="flex flex-col">
				<button class="text-[24px] text-black absolute top-4 right-4" on:click={onclose}>
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="m4.397 4.554l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084z"
						/>
					</svg>
				</button>

				<div class="field">
					<div class="label">Vendor</div>

					<div class="flex flex-col">
						<div>Rintaro</div>
						<div>82 14th Street</div>
						<div>San Fransisco, CA 94103</div>
					</div>
				</div>

				<div class="field">
					<div class="label">Date</div>
					<div>02/14/24</div>
				</div>

				<div class="fields">
					<div class="field">
						<div class="label">Check No.</div>
						<div>1221</div>
					</div>
					<div class="field">
						<div class="label text-end">Agent</div>
						<div>Sandra</div>
					</div>
				</div>

				<div class="flex flex-col bg-white shadow-sm rounded-2xl">
					<div class="fields border-b">
						<div class="field">
							<div class="label">Power Back</div>
							<div>
								<span class="bg-[#15E910]">-2.5%</span>
							</div>
						</div>
						<div class="field">
							<div class="label text-end">Subtotal</div>
							<div>$304.17</div>
						</div>
					</div>

					<div class="field border-b">
						<div class="label">Add a tip</div>
						<div class="py-4">
							<!-- <input class="w-full" type="range" value="20" step="1" /> -->
							<Slider step={1} />
						</div>
					</div>

					<div class="field-h field border-b">
						<div class="label">Tip</div>
						<div>$60.84</div>
					</div>
					<div class="field field-h border-b">
						<div class="label">Power back</div>
						<div class="bg-[#15E910]">-$9.14</div>
					</div>
					<div class="field field-h">
						<div class="label">Total</div>
						<div>$313.31</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-5">
				<button class="bg-[#1E1E1E] text-white w-full px-6 py-3 font-medium rounded-xl text-lg"
					>Confirm Total</button
				>

				<div class="flex justify-center">
					<div class="flex gap-2">
						<div class="h-2 aspect-square rounded-full bg-black" />
						<div class="h-2 aspect-square rounded-full bg-black/50" />
						<div class="h-2 aspect-square rounded-full bg-black/50" />
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.modal {
		@apply absolute bottom-0 left-1/2 -translate-x-1/2;
		width: 90svw;
	}
	.fields {
		@apply flex justify-between;
	}
	.field {
		@apply flex flex-col font-medium text-2xl py-[7px] px-4;

		&.field-h {
			@apply flex-row justify-between w-full items-center;
		}

		& > .label {
			@apply text-sm text-[#1E1E1E] font-normal;
		}
	}

	input[type='range'] {
		-webkit-appearance: none !important;
		background: black;
		height: 2px;

		&::-webkit-slider-thumb {
			background: black;
			width: 16px;
			height: 16px;
			appearance: none;
		}
	}
</style>

<script lang="ts">
	import { Logo } from '$lib/components';
	import { fly } from 'svelte/transition';
</script>

<div
	class="flex flex-col relative pb-9 overflow-y-auto max-h-full scrollbar-none w-full min-h-full"
>
	<div class="px-5">
		<button class="text-[24px] text-black h-16" on:click={onclose}>
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M15.53 4.22a.75.75 0 0 1 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0"
				/>
			</svg>
		</button>
	</div>

	<div class="px-5">
		<div class="flex items-center gap-2 text-5xl font-semibold text-secondary">
			<div>
				<Logo />
			</div>
			<div>POWER</div>
		</div>

		<div class="mb-5"></div>

		<div class="flex flex-col bg-white shadow-sm rounded-2xl py-5">
			<div class="fields">
				<div class="field px-4">
					<div class="label">Power Back (Savings)</div>
					<div class="flex flex-col items-start font-medium text-xl">
						<div class="bg-[#15E910]">-2.5%</div>
						<div>-$9.14</div>
					</div>
				</div>
				<div class="flex flex-col justify-between items-end">
					<div class="field px-4">
						<div class="label text-end">Subtotal</div>
						<div>$304.17</div>
					</div>

					<button class="px-4 font-normal text-xs">View Bill</button>
				</div>
			</div>
		</div>
	</div>

	<div class="border-b border-secondary/20 my-4 w-full"></div>

	<div class="px-5 font-normal text-base">
		<div>Welcome to Power, yash@gmail.com!</div>
		<br />
		<div>
			Thanks for believing in equal footing for everyone by squashing unfair credit card fees. The
			more you use Power, the more you save.
		</div>
	</div>

	<div class="border-b border-secondary/20 my-4 w-full"></div>

	<div class="px-5">
		<div class="font-bold">
			We need a few more details to start your free, non-credit requesting, Power account!
		</div>

		<div class="fields gap-4">
			<div class="field field-compact gap-1.5 flex-1" data-invalid={true}>
				<div class="pl-2">
					<label class="text-xs font-bold" for="">First Name</label>
					<div class="error-message">Enter your full address</div>
				</div>

				<input class="" type="text" />
			</div>
			<div class="field field-compact gap-1.5 flex-1" data-invalid={true}>
				<div class="pl-2">
					<label class="text-xs font-bold" for="">Last Name</label>
					<div class="error-message">Enter your full address</div>
				</div>

				<input class="" type="text" />
			</div>
		</div>

		<div class="field field-compact gap-1.5" data-invalid={true}>
			<div class="pl-2">
				<label class="text-xs font-bold" for="">Home Address</label>
				<div class="error-message">Enter your full address</div>
			</div>
			<input class="" type="text" aria-invalid="true" />
		</div>
	</div>

	<div class="border-b border-secondary/20 my-4 w-full"></div>

	<div class="flex-1"></div>

	<div class="flex flex-col gap-4 px-5">
		<div class="text-xs text-center font-normal">
			This is required by federal regulations to confirm your identity. We never store this info and
			it will not result in a credit check!
		</div>

		<button class="bg-[#1E1E1E]/10 text-white w-full px-6 py-3 font-medium rounded-xl text-lg"
			>Please check above</button
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

<style lang="postcss">
	.field {
		--field-invalid: 0;

		label {
			@apply text-secondary;
		}

		&[data-invalid] {
			@apply text-[#1547F8];
			--field-invalid: 1;
		}

		& .error-message {
			@apply text-current font-medium text-xs;
		}

		& > input {
			@apply min-w-0 rounded-xl border border-secondary/30 w-full outline-none pl-4 pr-2 text-base py-2 text-secondary font-bold outline-0 outline outline-[#1547F8] outline-offset-0;

			outline-width: calc(var(--field-invalid) * 2px);
		}
	}
</style>

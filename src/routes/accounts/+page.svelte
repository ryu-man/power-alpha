<script lang="ts">
	import { Logo } from '$lib/components';
</script>

<div class="flex flex-col gap-4">
	<div class="wrapper">
		<div class="flex justify-between items-center">
			<div class="text-secondary text-[40px]">
				<Logo />
			</div>

			<div class="text-3xl">
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
					/>
				</svg>
			</div>
		</div>
	</div>

	<div class="pt-4 wrapper">
		<div
			class="bg-secondary flex justify-between items-center text-white py-3 rounded-xl px-4 text-xl relative"
		>
			<div
				class="w-8 h-4 rounded-t-full bg-secondary left-4 absolute font-medium"
				style:bottom="calc(100% - 3px)"
			/>
			<label class="text-sm">YTD Power Back</label>
			<div class="text-2xl">$9.14</div>
		</div>
	</div>

	<div class="wrapper">
		<div class="card flex flex-col gap-2">
			<div>
				<label>Power balance</label>
				<div class="text-2xl font-medium">$0.00</div>
			</div>
			<button class="w-full bg-neutral-200 py-4 rounded-2xl font-medium text-lg"> Add cash </button>
		</div>
	</div>

	<div class="wrapper">
		<div class="accounts card flex flex-col gap-4">
			<label>Your accounts</label>

			<div class="account flex gap-2">
				<div class="h-12 aspect-[2/1] bg-secondary rounded-t-xl relative">
					<div class="w-full h-5 bottom-0 bg-neutral-700 absolute z-10"></div>
					<div class="absolute top-2 left-2 h-3 aspect-square rounded bg-primary" />
				</div>
				<div class="flex flex-col">
					<div class="font-medium">Power</div>
					<div class="text-xs opacity-50">**8600 / **4323</div>
				</div>
			</div>

			<div class="account flex items-center gap-2">
				<div class="relative h-12 aspect-[2/1] bg-neutral-200 rounded-xl">
					<div class="absolute top-4 left-2 bg-neutral-400 h-2 aspect-[2/1] rounded-sm"></div>

					<div class="absolute top-5 left-8 bg-neutral-400 h-1 w-14 rounded-sm"></div>
				</div>
				<div class="flex flex-col">
					<div class="font-medium">Bank of America</div>
					<div class="text-xs opacity-50">**9688 / **3133</div>
				</div>

				<div class="ml-auto text-4xl">
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"
						><g fill="currentColor"
							><path
								d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
							/><path
								d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"
							/></g
						></svg
					>
				</div>
			</div>
		</div>
	</div>

	<div class="flex items-center py-2">
		<div class="w-full border-b-[1.5px] border-black"></div>
	</div>

	<div class="wrapper">
		<div class="card flex flex-col gap-2">
			<label>Transaction requests</label>
			<div class="flex items-center bg-neutral-200 py-2 px-4 rounded-xl text-neutral-500">
				<div class="flex flex-col">
					<label class="!font-medium text-base" for="">Rintaro</label>
					<div class="opacity-50">$313.31 <span>(-2.5%)</span></div>
				</div>

				<div class="font-medium ml-auto">Paid</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	label {
		@apply font-normal text-base;
	}

	.card {
		@apply bg-white rounded-xl shadow-sm p-4;
	}

	.wrapper {
		@apply px-4;
	}
</style>

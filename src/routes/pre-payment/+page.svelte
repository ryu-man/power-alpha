<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div
	class="flex flex-col relative pb-9 gap-7 overflow-y-auto max-h-full scrollbar-none w-full min-h-full"
>
	<div class="flex flex-col ">
		<button class="text-[24px] text-black h-16 px-5" on:click={onclose}>
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M15.53 4.22a.75.75 0 0 1 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0"
				/></svg
			>
		</button>

		<div class="field px-5">
			<div class="label">Vendor</div>

			<div class="value flex flex-col">
				Rintaro <br /> 82 14th Street <br /> San Francisco, CA 94103
			</div>
		</div>

		<div class="field px-5">
			<div class="label">Date</div>
			<div class="value">02/14/24</div>
		</div>

		<div class="fields px-5">
			<div class="field">
				<div class="label">Check No.</div>
				<div class="value">1221</div>
			</div>
			<div class="field">
				<div class="label text-end">Agent</div>
				<div class="value">Sandra</div>
			</div>
		</div>

		<div class="mb-4" />

        <div class="px-5">
            <div class="flex flex-col bg-white shadow-sm rounded-2xl">
                <div class="fields border-b">
                    <div class="field px-4">
                        <div class="label">Power Back (Savings)</div>
                        <div class="flex flex-col items-start">
                            <div class="bg-[#15E910]">-2.5%</div>
                            <div>-$9.14</div>
                        </div>
                    </div>
                    <div class="field px-4">
                        <div class="label text-end">Subtotal</div>
                        <div>$304.17</div>
                    </div>
                </div>
            </div>

        </div>
	</div>

	<div class="flex-1" />

	<div class="flex flex-col items-center px-5">
		<div class="text-base font-bold mb-4">Enter your email address to continue payment.</div>
		<input
			class="bg-white border border-[#C1C1C1] text-secondary text-center text-lg w-full px-6 py-3 font-medium rounded-xl placeholder:text-secondary/80"
			placeholder="Your Email Address"
		/>
	</div>

	<div class="flex flex-col gap-5 px-5">
		<button class="bg-[#1E1E1E] text-white w-full px-6 py-3 font-medium rounded-xl text-lg"
			>Continue to payment</button
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
</style>

<script lang="ts">
	export let onClick: () => void;
</script>

<button
	on:click={onClick}
	class="m-1 grid h-10 w-10 grid-cols-3 gap-[6px] rounded-lg p-2 transition-colors duration-150 hover:bg-black/30"
>
	<!-- row 1 -->
	<div class="dot" />
	<div class="dot" />
	<div class="dot" />

	<!-- row 2 -->
	<div class="dot" />
	<div class="dot" />
	<div class="dot" />

	<!-- row 3 -->
	<div class="dot" />
	<div class="dot" />
	<div class="dot" />
</button>

<style>
	.dot {
		@apply rounded-full bg-white;
	}
</style>

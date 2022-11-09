<script>
	import Sound from './sound.svelte';
	import SuperButton from './super-button.svelte';
	import Time from './time.svelte';
	import Wifi from './wifi.svelte';
</script>

<div class="mb-3 h-12 w-full px-3">
	<div
		class="flex h-full w-full items-center gap-3 rounded-lg bg-black/40 pr-10 shadow-2xl backdrop-blur-lg"
	>
		<!-- 'super buttom' -->
		<SuperButton />

		<!-- spacer -->
		<div class="flex-1" />
		<!-- icons -->
		<Wifi />
		<Sound />
		<Time />
	</div>
</div>

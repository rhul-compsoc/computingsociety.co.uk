<script>
	let time = new Date();
</script>

<span class="text-white">
	{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
</span>

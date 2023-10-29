<script>
  console.log('Creating svelte counter!')
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Svelte counter: {count}
</button>
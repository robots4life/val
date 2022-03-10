<script>
	import '../app.css';
</script>

<main class="container py-4 my-4">
	<slot />
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-sky-900;
	}
</style>

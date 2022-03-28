<script>
	import '../app.css';
</script>

<main class="container border">
	<slot />
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-slate-700;
		@apply font-sans;
	}
</style>

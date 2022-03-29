<script>
	import '../app.css';
</script>

<main class="container">
	<slot />
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-slate-700;
		@apply text-slate-300;
		@apply font-sans;
	}
</style>

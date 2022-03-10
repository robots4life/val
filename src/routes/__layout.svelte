<script>
	import '../app.css';
</script>

<main class="box-border container py-4">
	<slot />
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-sky-900;
		@apply text-sky-100;
	}
</style>

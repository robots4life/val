<script>
	import '../app.css';
	import Auth from '$lib/Auth.svelte';
</script>

<main class="container py-4 my-4">
	<Auth /><slot />
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-sky-900;
		@apply font-sans;
	}
</style>

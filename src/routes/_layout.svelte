<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/footer.svelte'

	// export let segment;
</script>

<h1 class="text-xl text-blue-600">nav</h1>
<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>

<Footer/>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>



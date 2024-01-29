<script>
	import Login from './components/Login.svelte';
    import Register from './components/Register.svelte';
</script>

<main>
	<header class="logo">
        <h1>kawaii calendar</h1>
    </header>

    <Login />
    <Register />
    
    <footer>Made with ♥ by <a href="https://github.com/dbuzon">@dbuzon</a> </footer>
</main>

<style>
	main {
		max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
	}

    h1 {
        font-family: var(--accent-font);
        font-size: 3em;
    }
	
</style>
<script>
    let inputEmail = "";
    let inputPass = "";

    const login = async () => {
        const res = await fetch('http://localhost:3000/api/users', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputEmail,
                password: inputPass
            }),
        });
        const data = await res.json();
        console.log(data); 
    }
</script>

<div class="card">
    <h2 class="title">Login</h2>

    <label for="email">Email</label>
    <input id="email" type="email" bind:value={inputEmail} placeholder="email@example.com" required>
    
    <label for="password">Password</label>
    <input id="password" type="password" bind:value={inputPass} placeholder="******" required>
    
    <div class="button" on:click={login}>Sing in</div>
</div>

<style>
    .card {
        max-width: 500px;
        padding: 2.5em 1.5em;
        margin: 20px;
        background-color: #FFF6F8;
        border: 1px solid #FFC2D1;
        border-radius: 20px;
    }    

    .title {
        color: #FB6F92;
        font-family: var(--accent-font);
        font-size: 1.75em;
        text-align: center;
        margin-top: 0;
        line-height: 1;
    }

</style>
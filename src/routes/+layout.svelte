<script>  
  let { children } = $props();
</script>

<svelte:head>
  <title>AJOU Mini Portfolio</title>
  <meta name="description" content="SvelteKit + Vercel mini portfolio" />
</svelte:head>

<nav>
  <a href="/" class="logo">AJOU Portfolio</a>
  <div class="links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
  </div>
</nav>

<main>
  {@render children()}
</main>

<style global>
  @import '../app.css';

  :root {
    --ajou-green: #3a7b50;
    --ajou-mint: #e9f3ec;
    --text-dark: #222;
    --text-light: #666;
    --bg-light: #fafafa;
    --bg-card: #fff;
    --radius: 12px;
    --shadow: 0 6px 20px rgba(0,0,0,0.06);
  }

  body {
    margin: 0;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    background: var(--bg-light);
    color: var(--text-dark);
    line-height: 1.6;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: var(--ajou-green);
    color: white;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  nav .logo {
    font-weight: 700;
    font-size: 1.2rem;
    text-decoration: none;
    color: white;
  }

  nav .links a {
    margin-left: 1.5rem;
    text-decoration: none;
    font-weight: 500;
    color: white;
    transition: opacity .2s;
  }

  nav .links a:hover {
    opacity: 0.8;
  }

  main {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .card {
    background: var(--bg-card);
    border-radius: var(--radius);
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: var(--shadow);
  }

  button {
    padding: 0.6rem 1.2rem;
    background: var(--ajou-green);
    border: none;
    border-radius: var(--radius);
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: background .2s;
  }

  button:hover {
    background: #2f6340;
  }

  input, textarea {
    border: 1px solid #ccc;
    border-radius: var(--radius);
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    margin-top: 0.5rem;
    width: 100%;
  }
</style>

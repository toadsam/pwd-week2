<script>  
  let { children } = $props();
</script>

<svelte:head>
  <title>AJOU Mini Portfolio</title>
  <meta name="description" content="SvelteKit + Vercel mini portfolio" />
</svelte:head>

<nav>
  <a href="/" class="logo">🚀 AJOU Portfolio</a>
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
    --grad: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    --card-bg: rgba(255, 255, 255, 0.15);
    --glass-border: 1px solid rgba(255, 255, 255, 0.25);
    --shadow: 0 8px 32px rgba(0,0,0,0.2);
    --radius: 16px;
    --transition: all 0.3s ease;
  }

  body {
    margin: 0;
    font-family: 'Poppins', 'Segoe UI', sans-serif;
    background: var(--grad);
    min-height: 100vh;
    color: white;
    line-height: 1.6;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    backdrop-filter: blur(10px);
    background: rgba(0,0,0,0.25);
    border-bottom: var(--glass-border);
    position: sticky;
    top: 0;
    z-index: 50;
  }

  nav .logo {
    font-weight: 700;
    font-size: 1.4rem;
    text-decoration: none;
    background: var(--grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  nav .links a {
    margin-left: 1.5rem;
    text-decoration: none;
    font-weight: 500;
    color: #eee;
    transition: var(--transition);
  }

  nav .links a:hover {
    color: #fff;
    text-shadow: 0 0 10px rgba(255,255,255,0.8);
  }

  main {
    max-width: 960px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .card {
    background: var(--card-bg);
    border: var(--glass-border);
    border-radius: var(--radius);
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--shadow);
    backdrop-filter: blur(12px);
    animation: fadeIn 0.8s ease forwards;
  }

  button {
    padding: 0.7rem 1.5rem;
    background: var(--grad);
    border: none;
    border-radius: var(--radius);
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
    margin-top: 1rem;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
  }

  input, textarea {
    border: none;
    border-radius: var(--radius);
    padding: 0.6rem 0.9rem;
    font-size: 1rem;
    margin-top: 0.5rem;
    width: 100%;
    background: rgba(255,255,255,0.1);
    color: white;
    outline: none;
    transition: var(--transition);
  }

  input:focus, textarea:focus {
    background: rgba(255,255,255,0.2);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

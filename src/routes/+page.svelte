<script>
  let name = $state('');
  let welcome = $derived(name ? `Hello, ${name}!` : 'Welcome ✨');

  function randomize() {
    const msgs = ['💡 웹 개발 짜릿하다!', '🔥 SvelteKit 익숙해진다!', '🚀 Vercel로 전 세계 배포!'];
    alert(msgs[Math.floor(Math.random() * msgs.length)]);
  }
</script>

<section class="card">
  <h1 style="font-size:2.2rem; margin-bottom:1rem;">{welcome}</h1>

  <label>
    <span style="font-weight:600">Your name:</span>
    <input placeholder="type your name" bind:value={name} />
  </label>

  <p>👉 미리보기: <strong>{name || '(입력 대기)'}</strong></p>

  <button onclick={randomize}>랜덤 메시지 🎲</button>
</section>

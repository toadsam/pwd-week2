<script>
  // @ts-ignore
  let { data } = $props();      // { item, slug }
  let memo = $state('');

  $effect(() => {
    if (data.slug === 'memo') {
      const saved = localStorage.getItem('memo');
      if (saved) memo = saved;
    }
  });

  function save() {
    localStorage.setItem('memo', memo);
    alert('💾 저장 완료!');
  }
</script>

<section class="card">
  <h2 style="font-size:1.8rem;">{data.item.title}</h2>
  <p>{data.item.body}</p>

  {#if data.slug === 'memo'}
    <textarea rows="6" bind:value={memo}></textarea>
    <button onclick={save}>메모 저장 📝</button>
    <p style="opacity:.7; font-size:.9rem">⚠️ 이 메모는 브라우저 로컬에만 저장됩니다.</p>
  {/if}
</section>

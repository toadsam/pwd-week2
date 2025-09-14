// src/routes/projects/+page.js

/**
 * @param {{ fetch: typeof fetch }} context
 */
export async function load({ fetch }) {
  const res = await fetch('/api/projects');
  return { projects: await res.json() };
}

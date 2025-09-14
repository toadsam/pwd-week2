// src/routes/projects/[slug]/+page.server.js
import { error } from '@sveltejs/kit';

/** @type {{ [key: string]: { title: string, body: string } }} */
const DB = {
  timetable: { title: 'Timetable Helper', body: '나만의 시간표를 정리하는 도구입니다.' },
  gallery:   { title: 'Image Gallery',    body: '미니 갤러리 예시입니다.' },
  memo:      { title: 'Memo Pad',         body: '브라우저 로컬에 메모를 저장/복원합니다.' }
};

/**
 * @param {{ params: { slug: string } }} context
 */
export function load({ params }) {
  const key = params.slug;
  const item = DB[key];   // 이제 오류 안 남

  if (!item) throw error(404, 'Not found');

  return { item, slug: key };
}

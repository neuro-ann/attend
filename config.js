// 구글 Apps Script에서 '웹 앱'으로 배포한 뒤 받은 주소를 따옴표 안에 붙여 넣습니다.
// 예: 'https://script.google.com/macros/s/AKfy..../exec'
window.ATTEND_API = 'https://script.google.com/macros/s/AKfycbzFhwry_cwS-tC_E6HveQIJUgSMWFlrjtFHZlu3USER5MQ-A4d_r-geKDe-pn9FqrfL/exec';

window.attendApi = async function (data) {
  const r = await fetch(window.ATTEND_API, { method: 'POST', body: JSON.stringify(data) });
  return r.json();
};

window.attendStore = function (k, v) {
  try {
    if (v === undefined) return localStorage.getItem(k);
    localStorage.setItem(k, v);
  } catch (e) { return null; }
};

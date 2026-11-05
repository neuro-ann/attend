// 구글 Apps Script에서 '웹 앱'으로 배포한 뒤 받은 주소를 따옴표 안에 붙여 넣습니다.
// 예: 'https://script.google.com/macros/s/AKfy..../exec'
window.ATTEND_API = 'https://script.google.com/macros/s/AKfycbzFhwry_cwS-tC_E6HveQIJUgSMWFlrjtFHZlu3USER5MQ-A4d_r-geKDe-pn9FqrfL/exec';

window.attendApi = async function (data) {
  const r = await fetch(window.ATTEND_API, { method: 'POST', body: JSON.stringify(data) });
  return r.json();
};

// 오늘의 색: 날짜(한국 시간)마다 바뀌고, 교수 화면과 학생 화면에 같은 색이 나온다.
// 이웃한 날은 항상 다른 색이 되도록 7가지를 차례로 돈다.
window.todayColor = function () {
  const colors = [
    { hex: '#0F6E56', name: '청록' }, { hex: '#185FA5', name: '파랑' },
    { hex: '#534AB7', name: '보라' }, { hex: '#B5470F', name: '주황' },
    { hex: '#993556', name: '분홍' }, { hex: '#3B6D11', name: '초록' },
    { hex: '#5F5E5A', name: '회색' },
  ];
  const day = Math.floor((Date.now() + 9 * 3600 * 1000) / 86400000);
  return colors[day % colors.length];
};

window.kstClock = function () {
  return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(11, 19); // 한국 시간 HH:MM:SS
};

window.attendStore = function (k, v) {
  try {
    if (v === undefined) return localStorage.getItem(k);
    localStorage.setItem(k, v);
  } catch (e) { return null; }
};

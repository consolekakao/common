function getRandomColor() { //파스텔톤 랜덤 색상얻기.
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 30) + 70;
  const l = Math.floor(Math.random() * 10) + 70;
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}

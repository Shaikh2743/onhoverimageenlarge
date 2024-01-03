const distortImage = document.getElementById('distortImage');

distortImage.addEventListener('mousemove', (e) => {
  const { offsetX, offsetY } = e;

  const xPos = (offsetX / distortImage.clientWidth - 0.5) * 2;
  const yPos = (offsetY / distortImage.clientHeight - 0.5) * 2;

  distortImage.style.transform = `perspective(1000px) rotateX(${yPos * 10}deg) rotateY(${xPos * 10}deg)`;
});

distortImage.addEventListener('mouseleave', () => {
  distortImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

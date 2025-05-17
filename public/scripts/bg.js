document.addEventListener('DOMContentLoaded', nyanCat());

function nyanCat() {
  document.querySelector('.msgnyan').textContent = '';
  document.addEventListener('keydown', (e) => {
    if (e.key === 'n') {
      const div = document.createElement('div');
      const img = document.createElement('img');
      document.querySelector('.msgnyan')?.appendChild(div);
      img.style.width = '25%';
      div.appendChild(img);
      img.src = '/assets/2DJU.gif';
    }
  });
}

function onclickPopup() {
  const div = document.querySelector('.popupmsg');
  const button = div.querySelector('button');
  button.onclick = () => {
    div.style.display = 'none';
  };
}

onclickPopup();

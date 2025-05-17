document.addEventListener('DOMContentLoaded', nyanCat());

function nyanCat() {
  document.querySelector('.msgnyan').textContent = '';
  const masterDiv = document.querySelector('.msgnyan');

  for (let i = 0; i < 11; i++) {
    const div = document.createElement('div');
    masterDiv.appendChild(div);
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'n') {
      const index = Math.floor(Math.random() * 10);
      const img = document.createElement('img');
      img.src = 'assets/2DJU.gif';
      masterDiv.children[index].appendChild(img);
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

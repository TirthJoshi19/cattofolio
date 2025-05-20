document.addEventListener('DOMContentLoaded', nyanCat());
const masterDiv = document.querySelector('.msgnyan');
masterDiv.style.maxHeight = '100vh';
for (let i = 0; i < 11; i++) {
  const div = document.createElement('div');
  div.style.maxHeight = '10vh';
  masterDiv.appendChild(div);
}

function nyanCat() {
  document.querySelector('.msgnyan').textContent = '';

  document.addEventListener('keydown', (e) => {
    if (e.key === 'n') {
      console.log('happenes');
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

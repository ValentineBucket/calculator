window.onload = function onload() { 
  const input = document.getElementById('input');

  const ast = [];
  const tokens = [];

  function update() {
    input.value = tokens.join(' ');
  }

  window.addEventListener('click', ({ target }) => {
    if (target.nodeName !== 'BUTTON') return;
    const token = target.innerText;
    update();
  });

  window.addEventListener('keypress', ({ key }) => {
    update();
  });



}
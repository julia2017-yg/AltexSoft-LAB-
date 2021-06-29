 const countBtn = document.querySelector('.count-btn');
 const output = document.querySelector('.output-value');
 const coins = document.querySelector('.coins');

function generateCoins() {
  let input = document.querySelector('.input').value;
  let stars = [];
  let full = 0;
  coins.innerHTML = "";
  for (let k = 0; k < input; k++){
    stars.push("$");
  }

  for (let row = 0; row < input; row++) {
    for (let i = 0; i <= row; i++) {
      if (stars.length > 0) {
        coins.innerHTML += stars.shift();
      }
      else {
        return full;
      }
    }
    ++full;
    coins.innerHTML += '<br/>';
  }
  return full;
}

countBtn.addEventListener('click', () => {
  const count = generateCoins();  
  output.textContent = 'Full rows - ' + count;
});

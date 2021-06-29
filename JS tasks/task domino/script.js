const button = document.querySelector('.button');

button.addEventListener('click', () => {
  
  var arr = []
  while (arr.length < 6){
      var randomnumber = Math.floor(Math.random() * 6) + 1;
      if (arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
  }
  document.querySelector('.input-top').innerHTML = arr;
});





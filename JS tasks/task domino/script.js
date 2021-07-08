const button = document.querySelector('.button');
const resultWrapper = document.getElementById('result');

function generateNumber() {
  let arr1 = [];
  let arr2 = [];
   for (let i = 0; i < 6; i++) {
     arr1.push(Math.round(Math.random() * 5) + 1);
     arr2.push(Math.round(Math.random() * 5) + 1);
   }
   console.log(arr1);
   console.log(arr2);
   let result1 = getArray(arr1, arr2);
   let result2 = getArray(arr2, arr1);
   let result = -1;
   
   if (result1 !== false) {
     if (result1 < result2) {
       result = result1;  
     }
     else {
       result = result2;
     }  
   }   

   resultWrapper.innerHTML = result;
}

function getArray(arr, arr1) {
  for (let i = 1; i <= 6; i++) {
    let sameNum = 0;
    let rotate = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i) {
        sameNum++;
      } else {
        if (arr1[j] == i) {
          sameNum++;
          rotate++;
        }
      }
    }
    if (sameNum == arr.length) {
      return rotate;
    } 
  }
  return false;
}

button.addEventListener('click', () => {
  generateNumber();
});

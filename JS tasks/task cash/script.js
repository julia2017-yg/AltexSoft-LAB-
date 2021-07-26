const getMoney = document.getElementById("get-money");

function giveMyMoney(money, coins) {
  let needCoins = [], minCoins = []; minCoins[0] = 0;

  // we sort out all the amounts up to a given amount (you can start with a min bill)
  for (let sum = 1; sum <= money; sum++) {     

      // по умолчанию эта сумма не для выдачи
      minCoins[sum] = Number.MAX_VALUE;

      // by default this amount is not for issue
      for (let coin = coins.length - 1; coin >= 0; coin--) {
          if (sum >= coins[coin].val && minCoins[sum] > minCoins[sum - coins[coin].val] + 1) {

              // found a way to issue the amount sum
              minCoins[sum] = minCoins[sum - coins[coin].val] + 1;
          }
      }
  }

  // If the specified amount cannot be decomposed into specified banknotes
  if (minCoins[money] === Number.MAX_VALUE) { return []; }

  // minCoins - stores the minimum number of bills that are needed to issue a given amount
  let sum = money;
  while (sum > 0) {
      let curSum = sum;
      for (let coin = coins.length - 1; coin >= 0; coin--) {
          let isCoinExist = coins[coin].count > 0;
          if (isCoinExist && sum >= coins[coin].val && (minCoins[sum] == minCoins[sum - coins[coin].val] + 1 || minCoins[sum] == minCoins[sum - coins[coin].val])) {                                  
              if (!needCoins[coin]) {
                  needCoins[coin] = 0;
              }
              ++needCoins[coin];  
              sum -= coins[coin].val;
              coins[coin].count -= 1;               
              break;
          }
      }
      if (curSum === sum) {
          needCoins = [];
          break; // not enough bills
      }
  }
  return needCoins;
}

let coins = [ 
  { val: 30, count: 10 }, 
  { val: 50, count: 10 },
  { val: 100, count: 10 },
  { val: 500, count: 10 },
  { val: 1000, count: 10 }
];

function enterAmount() {
const amount = document.getElementById("amount").value;
const needCoins = giveMyMoney(amount, coins);
let res = "", controlSum = 0;

if (needCoins.length) {
    needCoins.forEach((item, ind) => {
      controlSum += item*coins[ind].val;
      const symbol = ind < needCoins.length-1 ? " + " : "";
       res += (item + "*" + coins[ind].val + symbol);
    });
}

alert (res ? `${amount} = ${res}` : "Wrong amount entered or not enough bills in ATM");

}

getMoney.addEventListener("click", enterAmount);

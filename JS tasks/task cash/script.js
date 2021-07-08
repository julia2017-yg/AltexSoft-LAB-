const getBtn = document.querySelector('.get-btn');
let limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

let iWantToGet = (ammountRequired, limits) => {

  function collect(amount, nominals) {
    if (amount === 0) return {}; // success

    if (!nominals.length) return; // failure

    let currentNominal = nominals[0];
    let avaiableNotes = limits[currentNominal];
    let notesNeeded = Math.floor(amount / currentNominal);
    let numberOfNotes = Math.min(avaiableNotes, notesNeeded);

    for (let i = numberOfNotes; i >= 0; i--) {
      
      let result = collect(amount - i * currentNominal, nominals.slice(1));

      if (result) {
        return i ? { [currentNominal]: i, ...result } : result;
      }
    }
    
  }

  let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  return collect(ammountRequired, nominals);
};

getBtn.addEventListener('click', () => {
  const getAmount = document.querySelector('.amount').value;
  console.log(iWantToGet(getAmount, limits));
});
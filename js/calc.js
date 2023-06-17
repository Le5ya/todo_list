export const calc = () => {
  
  const inputX = document.querySelector('#x')
  const inputY = document.querySelector('#y')
  const calcBtn = document.querySelector('.calc__btn');
  const calcResult = document.querySelector('.calc__result');
  const calcForm = document.querySelector('.calc__form')

 
  function makeCalc() {
    for (let curCalcBtn of document.querySelectorAll('.calc__btn')){
      let op = curCalcBtn.textContent
      op = op.replace('х', '*').replace('÷', '/');
    
      curCalcBtn.addEventListener('click', () => {
        let a = inputX.value;
        let b = inputY.value;
          // let a = Number(document.querySelector('#x').value);
          // let b = Number(document.querySelector('#y').value);
          let result = eval(`${a}${op}${b}`);
          result = (result.toFixed(2));
          calcResult.textContent = result;
          
          calcForm.reset();
      });
    
    }
  }
  makeCalc();
};
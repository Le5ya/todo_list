export const calc = () => {
  const inputX = document.querySelector('#x');
  const inputY = document.querySelector('#y');
  const calcBtn = document.querySelectorAll('.calc__btn');
  const calcResult = document.querySelector('.calc__result');

  function notcalc() {
    let numX = Number(inputX.value);
    let numY = Number(inputY.value);
    let result;
    

    calcBtn[0].addEventListener('click',  () => {
      console.log(numX, numY);
      calcResult.textHTML = String(result);
    });
  

  }
  notcalc();
};
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  // result.innerText = Math.floor(dividend / divider);

  const errorMessages = {
    NaN: 'Division not performed. Both values are required in inputs. Try again',
    isZero: 'Division not performed. Invalid number provided. Try again',
    criticalError: 'Something critical went wrong. Please reload the page'
  }
  
  const checkDevidend = 'YOLO';
  const checkDivider = '+++';


  //CHECK IF CORRECT INPUT IS ENTERED
  if (dividend === checkDevidend && divider === checkDivider) {
    const criticalErrorDiv = document.createElement('div')
    criticalErrorDiv.classList.add('critical-error')

    criticalErrorDiv.innerHTML = `<p>${errorMessages.criticalError}</p>`
    document.body.appendChild(criticalErrorDiv)

  }else if(isNaN(dividend) || isNaN(divider) ) {
    result.innerText = errorMessages.NaN
  }
  else if (divider == 0){//=== gives me infinity
    result.innerText = errorMessages.isZero
    console.error(errorMessages.isZero)
  }
  else {
    result.innerText = Math.floor(dividend / divider);
  }

});
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
  
  // const checkDividend = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]+$/g;
  // const checkDivider = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]+$/g;
  const checkDividend = /^\W/;
  const checkDivider = /^\W/;



  //CHECK IF CORRECT INPUT IS ENTERED
  if (dividend.match(checkDividend) || divider.match(checkDivider)) {
    const criticalErrorDiv = document.createElement('div')
    criticalErrorDiv.classList.add('critical-error')

    criticalErrorDiv.innerHTML = `<p>${errorMessages.criticalError}</p>`;
    console.error('Something critical went wrong. Please reload the page')
    document.body.appendChild(criticalErrorDiv)

  }
  else if(dividend ==='' || divider === '' ) {
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
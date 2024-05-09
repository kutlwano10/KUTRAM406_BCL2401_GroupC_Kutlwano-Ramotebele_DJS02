const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  // result.innerText = Math.floor(dividend / divider);

  const errorMessages = {
    NaN: 'Division not performed. Both values are required in inputs. Try again',
    isZero: 'Division not performed. Invalid number provided. Try again'
  }

  if(isNaN(dividend) || isNaN(divider) ) {
    result.innerText = errorMessages.NaN
  }else if (divider == 0){
    result.innerText = errorMessages.isZero
  }
  else {
    result.innerText = Math.floor(dividend / divider);
  }
  
  
    
  

});
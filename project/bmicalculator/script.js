const form = document.querySelector('form');
//this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const underWeight = document.querySelector('#under-weight');
  const normalRange = document.querySelector('#normal-range');
  const overWeight = document.querySelector('#over-weight');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.6) {
      underWeight.innerHTML = `ans => Under Weight 
       less than 18.6`;
    } else if (bmi > 18.6 || bmi < 24.9) {
      normalRange.innerHTML = `ans => normal Weight 
       18.6 - 24.9`;
    } else if (bmi >= 24.9) {
      overWeight.innerHTML = `ans => greater than 24.9`;
    }
  }
});

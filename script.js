
let btn = document.querySelector('#calculate');

btn.addEventListener('click', function(){
   let height = document.querySelector('#height').value;
   let weight = document.querySelector('#Weight').value;
   if((isNaN(height) || height == '') && (isNaN(weight) || weight == '')){
      document.getElementById('result').textContent = 'Please enter valid value'
    return;
   }

   height/=100;

   const result = Math.floor(weight/(height*height));
   console.log(result);
   document.getElementById('result').textContent = `Your BMI is ${result}`;
   height.value = '';
   weight.value = '';
})
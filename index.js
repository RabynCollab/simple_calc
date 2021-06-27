let given = document.getElementById('field');
let buttons = document.querySelectorAll('button');


let givenInput = '';

for(but of buttons){

but.addEventListener('click', (e) => {
 buttonText= e.target.innerText;

if(buttonText == 'X'){
  buttonText = '*';
 givenInput += buttonText;
 given.value = givenInput;

}else if(buttonText == 'GET RESULT'){
 
 given.value =  eval(given.value);
 givenInput = given.value;

}else if(buttonText == 'C'){
  given.value = '';
  givenInput = '';
}else if(buttonText == 'DL'){

  given.value = given.value.substring(0, given.value.length - 1);
  
  givenInput = given.value.substring(0, given.value.length + 1);


}else{
  if(buttonText !== 'DL'){
    givenInput += buttonText;
    given.value = givenInput;
  }

}

});


}

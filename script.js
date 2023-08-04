
'user strict';

//element
let select=document.querySelectorAll('.currency')
let input=document.getElementById('input')
let btn=document.getElementById('btn')


//variables api
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json() )
.then(res=> displayDropDown(res))

//function
function displayDropDown(res){
  // this array function 
  let curr=Object.entries(res)
  //for loop 
  for(let i=0;i<curr.length;i++){
    //currency option
    let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
//currency list  value
select[0].innerHTML+=opt
select[1].innerHTML+=opt
  }
}

//eventListener
btn.addEventListener('click',()=>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value
    //use option and error same option 
    if(curr1===curr2)
      alert("Choose different currencies")
else
  convert(curr1,curr2,inputVal)
}); 
//function covert 
function convert(curr1,curr2,inputVal){

    const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)  
  .then(resp => resp.json())
  .then((data) => {
    //result in currency value 
    //console.log(Object.values(data.rates)[0])
    document.getElementById('result').value = Object.values(data.rates)[0]
  });
  
}

// Elements To Do Action On 
const paint = document.querySelector('#paintMe');
const changeBtn = document.querySelector('#choose');
const inputHex = document.querySelector('.hexaColor');

// hex numbers array
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];


// function to generate a random hex color with 6 length
function changeColor(){
    let hash = '#';

  for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * hexNumbers.length)
    //Get A random Index From the Hex Numbers Array and assign it to hex.
    hash += hexNumbers[index];
  }

  inputHex.value = hash;
  paint.style.backgroundColor = hash;
}

//First Event : Change the color and type it in the input when clicking the button.
changeBtn.addEventListener('click' , changeColor);


//Second Event : Change the Div Color when typing in the input.
inputHex.addEventListener('keydown' , () =>{
    paint.style.backgroundColor = inputHex.value.toLowerCase();
});



/*Third Event(Two Events -> Mouse Enter & Mouse Leave) :  
Change the Div Color when Enter The Div With Mouse Enters Every 500ms (Set Interval) until leaving it (Clear Interval). */
let iterate;

paint.addEventListener("mouseenter", () => {
    iterate = setInterval(changeColor, 500);
});

paint.addEventListener("mouseleave", () => {
    clearInterval(iterate);
});

  
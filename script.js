//having the access to the html elements(Divs)
const firstBackgroundDiv = document.getElementById("firstBackgroundDiv") // Pink backgroud
const  secondBackgroundDiv = document.getElementById("secondBackgroundDiv") //Blue background
const thirdBackgroundDiv = document.getElementById("thirdBackgroundDiv") // green background
const forthBackgroundDiv = document.getElementById('forthBackgroundDiv') // green background
const fifthBackgroundDiv = document.getElementById("fifthBackgroundDiv") // pink background
const mainSection = document.getElementById("mainSection") // main section where all the divs are set

//object  constructor
function divsData (id , duration){
    this.id = id;
    this.duration = duration;
}

//creating objects 
const div1 = new divsData(firstBackgroundDiv,4000)
const div2 = new divsData(secondBackgroundDiv , 2000)
const div3 = new divsData(thirdBackgroundDiv , 2000)
const div4 = new divsData(forthBackgroundDiv, 3000)
const div5 = new divsData(fifthBackgroundDiv , 3000)

//adding objects in the array called divsArray
const divsArray = [div1, div2, div3, div4, div5]

// Creating a function called startAnimation to show divs one by one with a particular duration
let currentDivsDuration = 0
function startAnimation() {
    divsArray.forEach((div, index) => {
        //the variable currentdivduration will be encreased by the duration of  particual div
        currentDivsDuration += div.duration;
        
        setTimeout(() => { //settimeout for displaying divs
            // current div will be displayed on the screen 
            div.id.style.opacity = 1; 
            div.id.style.visibility = 'visible'; 
            div.id.style.display = 'block'; 

            //settimeout for hiding the current div after the duration
            setTimeout(() => {
                div.id.style.opacity = 0; 
                div.id.style.visibility = 'hidden'; 
                div.id.style.display = 'none'; 
            }, div.duration);

        }, currentDivsDuration - div.duration); 
    });
}




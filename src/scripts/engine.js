const pianokeys = document.querySelectorAll(".piano-keys .key");
let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav");

const playtune = (key)=> {audio.src=`src/tunes/${key}.wav`; audio.play();
 const clickedkey = document.querySelector(`[data-key="${key}"]`)
clickedkey.classList.add("active");
 setTimeout(()=>{
     clickedkey.classList.remove("active");
 },150);
};


//

pianokeys.forEach((key)=> {
    console.log(key.dataset.key);
    key.addEventListener("click",()=>playtune(key.dataset.key));
    mapedKeys.push(key.dataset.key)
});


document.addEventListener("keydown", (e)=>{
    if (mapedKeys.includes(e.key)){
        playtune(e.key);     
    }    
   });
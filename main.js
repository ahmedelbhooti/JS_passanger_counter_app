let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let saveEll= document.getElementById("save-el");
let count = 0;
let zero = 0;
function increment(){
    count+=1;
    countEl.textContent = count;
}
function reset(){
    countEl.textContent = count = 0;
    saveEl.textContent = 'Previous entries:';
    
}

function save(){
    if(count == 0){
        window.alert("Please add number!")
    }
    else{

        let countStr = count + " - ";
        saveEl.textContent += countStr;
        countEl.textContent = count = 0;
    }
}
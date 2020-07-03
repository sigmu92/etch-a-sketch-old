const container = document.querySelector(".container");
const main = document.querySelector('.main-container');
let dimension=4;
function createGrid(dimension){
    let columnWidth=(720/dimension);
    let rowWidth=(720/dimension);
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    let count=0;
    for(let r=1; r<dimension+1; r++){
        for (let c=1; c<dimension+1; c++){
            let newDiv=createDiv(r,c,count);
            container.appendChild(newDiv);
            count++;
        }

    }
    assignFillIn();
}
function createDiv(r,c,count){
    let newDiv = document.createElement('div');
    newDiv.id = "div"+count;
    newDiv.style.gridColumn = `${c}, span 1`;
    newDiv.style.gridRow = `${r}, span 1`;
    return(newDiv)
     
}

function change(e){
    this.classList.add('hovered');
}
function assignFillIn(){
    let newDivs = document.querySelectorAll('div');
    newDivs.forEach(div => div.addEventListener("mouseenter",change));
    container.removeEventListener('mouseenter',change);
    main.removeEventListener('mouseenter', change);
}

function clearScreen(){
    let filledDivs = document.getElementsByClassName('hovered');
    let loopRun = filledDivs.length;
    for(i=loopRun-1; i> -1; i--){
        filledDivs[i].classList.remove('hovered');
    }
    dimension = prompt("Enter grid size")
    createGrid(dimension);
}

createGrid(dimension);

const button = document.querySelector('button');
button.addEventListener('click', clearScreen);

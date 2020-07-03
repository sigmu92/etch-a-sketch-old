const container = document.querySelector(".container");
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
    
}
function createDiv(r,c,count){
    let newDiv = document.createElement('div');
    newDiv.id = "div"+count;
    newDiv.style.gridColumn = `${c}, span 1`;
    newDiv.style.gridRow = `${r}, span 1`;
    return(newDiv)
     
}

function change(e){
    // if (this.id ="container") return;
    this.classList.add('hovered');

}
createGrid(16);
divs = document.querySelectorAll('div');
divs.forEach(div => div.addEventListener("mouseenter",change));
container.removeEventListener('mouseenter',change);

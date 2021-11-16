const grid = document.getElementById('grid');
const size = 16;


const clearBtn = document.getElementById('clearBtn')

clearBtn.onclick= () =>reloadGrid();

function reloadGrid (){
   clearGrid()
   setUpGrid(size)

}

function clearGrid (){
    grid.innerHTML='';
}


function setUpGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`
    grid.style.gridTemplateRows = `repeat(${size},1fr)`
   

    for (let i = 0; i < size*size; i++){
        const gridElement=document.createElement('div');
        gridElement.style.border= '1px red';
        gridElement.addEventListener('mouseover',changeColor)
        grid.appendChild(gridElement);

    }
}

function changeColor(e){
    e.target.style.backgroundColor = 'black';
}
window.onload = () => {
    setUpGrid(size);
}
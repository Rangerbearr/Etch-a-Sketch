function createGrid(size){
    const a = document.querySelector('.okok');
    for(let i = 0; i<size; i++){
        const container = document.createElement('div');
        container.classList.add('container');
        a.appendChild(container);
    }

    const rows = document.querySelectorAll('.container');
    rows.forEach(element => {
        for(let i = 0; i<size; i++){
            const content = document.createElement('div');
            content.classList.add('content');
            element.appendChild(content)
        }
    });
}

function removeGrid(size){
    const containers = document.querySelectorAll('.container');
    containers.forEach(rows => {
        for (let i = 0; i<size;i++){
            rows.removeChild(rows.lastElementChild)
        }
    });
    const a = document.querySelector('.okok')
    for(let i = 0; i<size;i++){
        a.removeChild(a.lastElementChild);
    }
}

function colorBoxes(){
let boxes = document.querySelectorAll('.content');
boxes.forEach(box => {
    box.addEventListener('mouseover',()=>{
        box.setAttribute('style','background-color: black');
    });
});
}

let temp = 0;
function askSize(){
    let button = document.querySelector('button');
    button.addEventListener('click',()=>{
        removeGrid(temp);
        let input = prompt("What size would you like");
        temp = input;
        createGrid(input);
        colorBoxes();
    });
}

askSize();

// createGrid(16);

// const containers = document.querySelectorAll('.container');
// containers.forEach(rows => {
//     for (let i = 0; i<16;i++){
//         rows.removeChild(rows.lastElementChild)
//     }
// });
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

function colorBoxes(){
let boxes = document.querySelectorAll('.content');
boxes.forEach(box => {
    box.addEventListener('mouseover',()=>{
        box.setAttribute('style','background-color: black');
    });
});
}

function askSize(){
    let button = document.querySelector('button');
    button.addEventListener('click',()=>{
        let input = prompt("What size would you like");
        createGrid(input);
        colorBoxes();
    });
}

askSize();

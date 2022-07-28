for(let i = 0; i<16; i++){
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
}

const rows = document.querySelectorAll('.container');
const boxes = document.querySelectorAll('.content');
rows.forEach(element => {
    for(let i = 0; i<16; i++){
        const content = document.createElement('div');
        content.classList.add('content');
        element.appendChild(content)
    }
});

function write(){
    boxes.classList.add('write')
}

boxes.forEach(box => {
    box.addEventListener('click', () =>{
        box.classList.remove('.content');
        box.classList.add('.write');
    });
});



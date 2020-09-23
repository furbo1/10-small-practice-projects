let text = 'Alex is the best coder in the world!';

let index = 0;

function writeText() {

    let para = document.createElement('p')
    document.body.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }

}

setInterval(writeText, 100)
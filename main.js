const container = document.querySelector('#container');

let div;

let i = 0;

while (i < 256) {
    div = document.createElement('div');
    div.classList.add('square');
    container.append(div);
    i += 1;
}
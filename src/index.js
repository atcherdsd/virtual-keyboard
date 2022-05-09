import './assets/style/styles.css';

let container = document.createElement('div');
container.className = 'container';
document.body.prepend(container);

let title = document.createElement('h1');
title.className = 'title';
title.innerHTML = 'Virtual Keyboard';
container.prepend(title);

let textArea = document.createElement('textarea');
textArea.className = 'textarea';
textArea.setAttribute('cols', '50');
textArea.setAttribute('rows', '5');
container.append(textArea);

let bodyKeyboard = document.createElement('div');
bodyKeyboard.className = 'body-keyboard';
container.append(bodyKeyboard);

let descriptionOS = document.createElement('p');
descriptionOS.className = 'description-os';
descriptionOS.textContent = 'The keyboard was created in the Windows operating system';
container.append(descriptionOS);

let declarLanguage = document.createElement('p');
declarLanguage.className = 'declaration-lang';
declarLanguage.textContent = 'To switch the language, press the key combination: left ctrl + alt';
container.append(declarLanguage);


let smallEnKeyList = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 
    9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 46,
    20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,
    16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16,
    17, 91, 18, 32, 18, 37, 40, 39, 17]; //48

let backspace, tab, del, capslock, enter, shiftLeft, arrowUp, shiftRight, 
    ctrlLeft, win, altLeft, space, altRight, arrowLeft, arrowDown, arrowRight, ctrlRight;

document.onkeydown = function(event) {
     //console.log(event);
     smallEnKeyList.push(event.keyCode);
     console.log(smallEnKeyList);
}

function initChars(){
    let outChars = '';
    for (let i = 0; i < smallEnKeyList.length; i++) {
        if (i == 14 || i == 29 || i == 42 || i == 55) {
            outChars += '<div class="row"></div>';
        }
        outChars += '<div class="key">'+ String.fromCharCode(smallEnKeyList[i]) + '</div>';
    }
    document.querySelector('.body-keyboard').innerHTML = outChars;
    
    backspace = document.querySelector('.key:nth-child(14)');
    backspace.innerHTML = 'Backspace';
    backspace.classList.add('backspace');
    
    tab = document.querySelector('.key:nth-child(16)');
    tab.innerHTML = 'Tab';
    tab.classList.add('tab');
    
    del = document.querySelector('.key:nth-child(30)');
    del.innerHTML = 'Del';
    del.classList.add('del');
    
    capslock = document.querySelector('.key:nth-child(32)');
    capslock.innerHTML = 'CapsLock';
    capslock.classList.add('capslock');
    
    enter = document.querySelector('.key:nth-child(44)');
    enter.innerHTML = 'Enter';
    enter.classList.add('enter');
    
    shiftLeft = document.querySelector('.key:nth-child(46)');
    shiftLeft.innerHTML = 'Shift';
    shiftLeft.classList.add('shift-left');

    arrowUp = document.querySelector('.key:nth-child(57)');
    arrowUp.innerHTML = '▲';
    arrowUp.classList.add('arrow-up');
    
    shiftRight = document.querySelector('.key:nth-child(58)');
    shiftRight.innerHTML = 'Shift';
    shiftRight.classList.add('shift-right');

    ctrlLeft = document.querySelector('.key:nth-child(60)');
    ctrlLeft.innerHTML = 'Ctrl';
    ctrlLeft.classList.add('ctrl-left');

    win = document.querySelector('.key:nth-child(61)');
    win.innerHTML = 'Win';
    win.classList.add('win');

    altLeft = document.querySelector('.key:nth-child(62)');
    altLeft.innerHTML = 'Alt';
    altLeft.classList.add('alt-left');

    space = document.querySelector('.key:nth-child(63)');
    space.classList.add('space');

    altRight = document.querySelector('.key:nth-child(64)');
    altRight.innerHTML = 'Alt';
    altRight.classList.add('alt-right');

    arrowLeft = document.querySelector('.key:nth-child(65)');
    arrowLeft.innerHTML = '◄';
    arrowLeft.classList.add('arrow-left');

    arrowDown = document.querySelector('.key:nth-child(66)');
    arrowDown.innerHTML = '▼';
    arrowDown.classList.add('arrow-down');

    arrowRight = document.querySelector('.key:nth-child(67)');
    arrowRight.innerHTML = '►';
    arrowRight.classList.add('arrow-right');

    ctrlRight = document.querySelector('.key:nth-child(68)');
    ctrlRight.innerHTML = 'Ctrl';
    ctrlRight.classList.add('ctrl-right');
}

initChars();
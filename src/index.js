import './assets/style/styles.css';

//----------1. Create HTML--------------------

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

//-----------2. Create init keyboards items---------------

let lang = 'en';
let capslockState = false;
let shiftState = false;

let smallEnKeyList = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 
    9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 46,
    20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13,
    16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16,
    17, 91, 18, 32, 18, 37, 40, 39, 17];

let shiftEnKeyList = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, 8, 
    9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 123, 125, 124, 46,
    20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 58, 34, 13,
    16, 122, 120, 99, 118, 98, 110, 109, 60, 62, 63, 38, 16,
    17, 91, 18, 32, 18, 37, 40, 39, 17];

let smallRuKeyList = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 
    9, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 46, 
    20, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 13, 
    16, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 38, 16, 
    17, 91, 18, 32, 18, 37, 40, 39, 17];

let shiftRuKeyList = [1105, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43, 8, 
    9, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 47, 46, 
    20, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 13, 
    16, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 44, 38, 16, 
    17, 91, 18, 32, 18, 37, 40, 39, 17];
    
let backspace, tab, del, capslock, enter, shiftLeft, arrowUp, shiftRight, 
    ctrlLeft, win, altLeft, space, altRight, arrowLeft, arrowDown, arrowRight, ctrlRight;

function initChars(){
    let outChars = '';
    for (let i = 0; i < smallEnKeyList.length; i++) {
        if (i == 14 || i == 29 || i == 42 || i == 55) {
            outChars += '<div class="row"></div>';
        }
        if (lang == 'en')
            if (!capslockState)
                shiftState ? (outChars += '<div class="key">'+ String.fromCharCode(shiftEnKeyList[i]).toUpperCase() + '</div>')
                : (outChars += '<div class="key">'+ String.fromCharCode(smallEnKeyList[i]) + '</div>');
            else
                shiftState ? (outChars += '<div class="key">'+ String.fromCharCode(shiftEnKeyList[i]).toLowerCase() + '</div>')
                : (outChars += '<div class="key">'+ String.fromCharCode(smallEnKeyList[i]).toUpperCase() + '</div>');
        
        else if (lang == 'ru')
            if (!capslockState)
                shiftState ? (outChars += '<div class="key">'+ String.fromCharCode(shiftRuKeyList[i]).toUpperCase() + '</div>')
                : (outChars += '<div class="key">'+ String.fromCharCode(smallRuKeyList[i]) + '</div>');
            else
                shiftState ? (outChars += '<div class="key">'+ String.fromCharCode(shiftRuKeyList[i]).toLowerCase() + '</div>')
                : (outChars += '<div class="key">'+ String.fromCharCode(smallRuKeyList[i]).toUpperCase() + '</div>');
    }
    document.querySelector('.body-keyboard').innerHTML = outChars;
    addElements();
}

function addElements() {
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
    shiftRight = document.querySelector('.key:nth-child(58)');
    shiftRight.innerHTML = 'Shift';
    shiftRight.classList.add('shift-right');

    win = document.querySelector('.key:nth-child(61)');
    win.innerHTML = 'Win';
    win.classList.add('win');

    altLeft = document.querySelector('.key:nth-child(62)');
    altLeft.innerHTML = 'Alt';
    altLeft.classList.add('alt-left');
    altRight = document.querySelector('.key:nth-child(64)');
    altRight.innerHTML = 'Alt';
    altRight.classList.add('alt-right');
    
    ctrlLeft = document.querySelector('.key:nth-child(60)');
    ctrlLeft.innerHTML = 'Ctrl';
    ctrlLeft.classList.add('ctrl-left');
    ctrlRight = document.querySelector('.key:nth-child(68)');
    ctrlRight.innerHTML = 'Ctrl';
    ctrlRight.classList.add('ctrl-right');

    space = document.querySelector('.key:nth-child(63)');
    space.classList.add('space');
    
    arrowUp = document.querySelector('.key:nth-child(57)');
    arrowUp.innerHTML = '▲';
    arrowUp.classList.add('arrow-up');
    arrowLeft = document.querySelector('.key:nth-child(65)');
    arrowLeft.innerHTML = '◄';
    arrowLeft.classList.add('arrow-left');
    arrowDown = document.querySelector('.key:nth-child(66)');
    arrowDown.innerHTML = '▼';
    arrowDown.classList.add('arrow-down');
    arrowRight = document.querySelector('.key:nth-child(67)');
    arrowRight.innerHTML = '►';
    arrowRight.classList.add('arrow-right');
}

initChars();

//--------------3. Add active class for keys-------------

window.addEventListener('DOMContentLoaded', () => {
    textArea.focus();
  });

const keys = document.querySelectorAll('.key');
const specialKey = [backspace, tab, del, capslock, enter, shiftRight, shiftLeft, 
    ctrlRight, ctrlLeft, win, altRight, altLeft];

const manageSpecialKey = (key, textarea) => {
    if (key.classList.contains('space')) {
        textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd);
        textarea.value += ' ';
    } else if (key.classList.contains('backspace'))
        textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd);
    else if (key.classList.contains('del'))
        textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1);
    else if (key.classList.contains('enter')) {
        textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd);
        textarea.value += '\n';
    } else if (key.classList.contains('tab'))
        textarea.value += '\t';
    else if (key.classList.contains('capslock'))
        return textarea.value;
    return textarea.value;
};


function activeMouse() {
    keys.forEach(item => item.addEventListener('mousedown', () => {
        item.classList.add('active');
        if (!specialKey.includes(item))
            textArea.value += item.innerHTML;
        manageSpecialKey(item, textArea);
    }));
    keys.forEach(item => item.addEventListener('mouseup', () => {
        item.classList.remove('active');
        textArea.focus();
        }    
    ));

    keys.forEach(item => item.addEventListener('keydown', () => {
        item.classList.add('active');
        if (!specialKey.includes(item))
            textArea.value += item.innerHTML;
        manageSpecialKey(item, textArea);
    }));
    keys.forEach(item => item.addEventListener('keyup', () => {
        item.classList.remove('active');
        textArea.focus();
    }));
}

activeMouse();

//----------4. Switch register and language--------

document.addEventListener('keydown', (event) => {
    if (event.code == 'AltLeft') {
        document.onkeyup = (event) => {
            if (event.code == 'ControlLeft') {
                if (lang == 'en') {
                    lang = 'ru';
                    let outChars = '';
                    for (let i = 0; i < smallRuKeyList.length; i++) {
                        if (i == 14 || i == 29 || i == 42 || i == 55) {
                            outChars += '<div class="row"></div>';
                        }
                        outChars += '<div class="key">'+ String.fromCharCode(smallRuKeyList[i]) + '</div>';
                    }
                    document.querySelector('.body-keyboard').innerHTML = outChars;
                    addElements();
                } else {
                    lang = 'en';
                    let outChars = '';
                    for (let i = 0; i < smallEnKeyList.length; i++) {
                        if (i == 14 || i == 29 || i == 42 || i == 55) {
                            outChars += '<div class="row"></div>';
                        }
                        outChars += '<div class="key">'+ String.fromCharCode(smallEnKeyList[i]) + '</div>';
                    }
                    document.querySelector('.body-keyboard').innerHTML = outChars;
                    addElements();
                    
                }
            }
        }
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code == 'ShiftLeft') {
        if (lang == 'en') {
            let outChars = '';
            for (let i = 0; i < smallEnKeyList.length; i++) {
                if (i == 14 || i == 29 || i == 42 || i == 55) {
                    outChars += '<div class="row"></div>';
                }
                outChars += '<div class="key">'+ String.fromCharCode(shiftEnKeyList[i]).toUpperCase() + '</div>';
            }
            document.querySelector('.body-keyboard').innerHTML = outChars;
            addElements();
            activeMouse();
        } else {
            let outChars = '';
            for (let i = 0; i < smallRuKeyList.length; i++) {
                if (i == 14 || i == 29 || i == 42 || i == 55) {
                    outChars += '<div class="row"></div>';
                }
                outChars += '<div class="key">'+ String.fromCharCode(shiftRuKeyList[i]).toUpperCase() + '</div>';
            }
            document.querySelector('.body-keyboard').innerHTML = outChars;
            addElements();
            activeMouse();
        }
    }
});
document.addEventListener('keyup', (event) => {
    if (event.code == 'ShiftLeft') {
        if (lang == 'en') {
            let outChars = '';
            for (let i = 0; i < shiftEnKeyList.length; i++) {
                if (i == 14 || i == 29 || i == 42 || i == 55) {
                    outChars += '<div class="row"></div>';
                }
                outChars += '<div class="key">'+ String.fromCharCode(smallEnKeyList[i]).toLowerCase() + '</div>';
            }
            document.querySelector('.body-keyboard').innerHTML = outChars;
            addElements();
            activeMouse();
        } else {
            let outChars = '';
            for (let i = 0; i < shiftRuKeyList.length; i++) {
                if (i == 14 || i == 29 || i == 42 || i == 55) {
                    outChars += '<div class="row"></div>';
                }
                outChars += '<div class="key">'+ String.fromCharCode(smallRuKeyList[i]).toLowerCase() + '</div>';
            }
            document.querySelector('.body-keyboard').innerHTML = outChars;
            addElements();
            activeMouse();
        }
    }
});

document.addEventListener('click', (event) => {
    if (event.target == capslock && capslockState == false) {
        capslockState = true;
        capslock.classList.add('active');
        let outChars = '';
            for (let i = 0; i < smallEnKeyList.length; i++) {
                if (i == 14 || i == 29 || i == 42 || i == 55) {
                    outChars += '<div class="row"></div>';
                }
                outChars += '<div class="key">'+ String.fromCharCode(smallEnKeyList[i]).toUpperCase() + '</div>';
            }
            document.querySelector('.body-keyboard').innerHTML = outChars;
            addElements();
            activeMouse(); 
    } else if (event.target == capslock && capslockState == true) {
        capslockState = false;
        let outChars = '';
        for (let i = 0; i < smallEnKeyList.length; i++) {
            if (i == 14 || i == 29 || i == 42 || i == 55) {
                outChars += '<div class="row"></div>';
            }
            outChars += '<div class="key">'+ String.fromCharCode(smallEnKeyList[i]) + '</div>';
        }
        document.querySelector('.body-keyboard').innerHTML = outChars;
        addElements();
        activeMouse(); 
    } 
});
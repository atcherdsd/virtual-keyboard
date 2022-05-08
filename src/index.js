let container = document.createElement('div');
container.className = 'container';
document.body.prepend(container);

let title = document.createElement('h1');
title.className = 'title';
title.innerHTML = 'Virtual Keyboard';
container.prepend(title);

let textArea = document.createElement('textarea');
textArea.className = 'textarea';
container.append(textArea);

let bodyKeyboard = document.createElement('div');
bodyKeyboard.className = 'body-keyboard';
container.append(bodyKeyboard);
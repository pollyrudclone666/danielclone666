function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';

}

function surname1(button) {
    if(button.innerHTML == 'Феденев')
        button.innerHTML = 'Даниэль';
    else
        button.innerHTML = 'Феденев';

}

function surname2(button) {
    if(button.innerHTML == 'Руднева')
        button.innerHTML = 'Аполлинария';
    else
        button.innerHTML = 'Руднева';

}

function more(button) {
    if(button.innerHTML == 'Нажми меня')
        button.innerHTML = 'Еще раз нажми';
    else
        if (button.innerHTML == 'Еще раз нажми')
            button.innerHTML = 'Еще';
        else
            if(button.innerHTML == 'Еще')
                button.innerHTML = 'Начать сначала';
            else 
                button.innerHTML = 'Нажми меня';         
}
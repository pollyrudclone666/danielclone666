function setrussian(){
    let name = document.getElementById('student');
    name.innerHTML='Феденев Э.Д.И., Руднева П.О.';

    let footer = document.getElementById('footer');
    name.innerHTML='Факультет бизнеса, ФБИ-03, 3 курс 2022';

    document.getElementById('your-name').innerhtml= 'Ваше имя';
    document.getElementById('input-name').placeholder= 'Введите имя';

    document.getElementById('your-surname').innerhtml= 'Ваша фамилия';
    document.getElementById('input-surname').placeholder= 'Введите Фамилию';

    document.getElementById('your-age').innerhtml= 'Ваш возраст';
    document.getElementById('input-age').placeholder= 'Введите возраст';

    document.getElementById('ok-button').value= 'ок';
    document.getElementById('reset-button').value= 'сброс';
}

function setenglish{
    let name = document.getElementById('student');
    name.innerHTML='Fedenev H.D.I., Rudneva P.O.';

    let footer = document.getElementById('footer');
    name.innerHTML='Faculty of business, FBI-03, 3rd year 2022';

    document.getElementById('your-surname').innerhtml= 'your surname ';
    document.getElementById('input-surname').placeholder= 'Enter your surname';

    document.getElementById('your-age').innerhtml= 'your age ';
    document.getElementById('input-age').placeholder= 'Enter your age';

    document.getElementById('ok-button').value= 'ok';
    document.getElementById('reset-button').value= 'reset';
}

function showalert(){
    let username= document.getElementById('input name').value;
    let usersurname= document.getElementById('input surname').value;
    let userage= document.getElementById('input age').value;
    alert('Привет, ' + username + ' ' + usersurname + '/n' + 'Ваш возраст: ' + userage);
    let r = math.round(math.random()*255);
    let g = math.round(math.random()*255);
    let b = math.round(math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ' )';
    document.getElementById('user-data').style.backgroundColor = 'purple';
}
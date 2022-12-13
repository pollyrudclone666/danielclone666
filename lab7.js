function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;

    let greeting;
    if( userage <= 17) {
        greeting = "Здравствуй, ";
        if(usersex == 'female') {
            greeting += 'девочка';
        }
        else {
            greeting += 'мальчик ';
        }
    }
    else { 
        greeting = "Здравствуйте, "
        if(usersex == 'female') {
            greeting += 'госпожа '
        }
        Else {
            greeting += 'господин '
        }
    }
    alert( greeting + userName + ' ' + userSurname + '\n' 
    + 'Ваш возраст: ' + userAge);
    alert('Привет, ' + userName + ' ' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;

}
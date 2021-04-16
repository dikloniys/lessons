let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
        alert(false) 
        return false ;
    }
    alert(true) 
    return true;
}
isEmpty()



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum = sum + salaries[key];
}
alert(sum)


var a = +prompt("введите число", '');
var b = +prompt("введите число", '');
var c = a + b;
alert(c);

function readNumber() {
let num;
num = prompt("Введите число", 0);
    if(num==!"Namber"){
    readNumber()
    }
    if (num === null || num === '') return null;

    return +num;
}

alert(Число: ${readNumber()});

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

let str = prompt('введите имя')
let newStr = str[0].toUpperCase() + str.slice(1);
alert(newStr);

function checkSpam(str){
    if( str = viagra || str = XXX) 
        return;
    
    else{
        return false;
    }
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit") ;
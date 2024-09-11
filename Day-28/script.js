
let main = document.querySelector("#main")


let Cd = document.createElement('div');
Cd.setAttribute('class', 'main');

main.append(Cd)


let cart1 = document.createElement('div');
let img1 = document.createElement('img');
// img1.setAttribute('src', `${a[0]}`)
img1.setAttribute('class', 'img')
let title1 = document.createElement('h1');
title1.setAttribute('class', 'title')

let sp1 = document.createElement('sp');
sp1.setAttribute('class', 'sp')
sp1.append("djkl;sdjfld")



let dis1 = document.createElement('p');
dis1.setAttribute('class', 'p')

let btn1 = document.createElement('button');
btn1.setAttribute('class', 'btn')
btn1.setAttribute('class', 'btn')





cart1.setAttribute('class', 'cart')
cart1.append(img1, title1, sp1, dis1, btn1)


let cart2 = document.createElement('div');
let img2 = document.createElement('img');
// img2.setAttribute('src', `${a[0]}`)
img2.setAttribute('class', 'img')
cart2.setAttribute('class', 'cart')
cart2.append(img2)


let cart3 = document.createElement('div');
let img3 = document.createElement('img');
// img3.setAttribute('src', `${a[0]}`)
img3.setAttribute('class', 'img')
cart3.setAttribute('class', 'cart')
cart3.append(img3)


let cart4 = document.createElement('div');
let img4 = document.createElement('img');
// img4.setAttribute('src', `${a[0]}`)
img4.setAttribute('class', 'img')
cart4.setAttribute('class', 'cart')
cart4.append(img4)


Cd.append(cart1, cart2, cart3, cart4)



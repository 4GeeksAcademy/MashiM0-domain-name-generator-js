let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function wordSeeker(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}
document.getElementById("excuse").innerHTML = wordSeeker(who) + " " + wordSeeker(action)+ " " + wordSeeker(what) + " " + wordSeeker(when);

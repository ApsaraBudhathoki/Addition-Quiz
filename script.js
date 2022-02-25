let x = Math.floor(Math.random() * 50 + 1);
let y = Math.floor(Math.random() * 50 + 1);

document.getElementById('x').value = x;
document.getElementById('y').value = y;

let ans = x + y;

// console.log(ans); 
const jsGame = () => {
    var usera = document.getElementById('Ans').value;
    if (usera == ans) {
        alert(" well done correct answer ");
    }
    else {
        alert(" correct answer is " + ans + ". TryAgain.");
    }

document.getElementById('Ans').value ="";
x=Math.floor(Math.random()*50+1);
y =Math.floor(Math.random()*50+1);

document.getElementById('x').value = x;
document.getElementById('y').value = y;

ans= x+ y;
}
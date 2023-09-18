const fizzbuzzbutton = document.getElementById('fizzbuzzbtn')
const fizzbuzzdiv = document.getElementById('fizzbuzzdiv')
var inhalt = "";

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) { 
    if (i % 15 == 0) {
      inhalt += 'fizzbuzz ';
    } else if (i % 3 == 0) {
      inhalt += 'fizz ';
    } else if (i % 5 == 0) {
      inhalt += 'buzz ';
    } else {
      inhalt += i + ' ';
    }
  }
  fizzbuzzdiv.innerHTML = inhalt;
}

fizzbuzzbtn.onclick = fizzbuzz;

/* function fizzbuzz () {
   for (let i = 0; i < 101; i++ ) {
    if (i % 15 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else (console.log(i));
   }
}
fizzbuzz();
*/



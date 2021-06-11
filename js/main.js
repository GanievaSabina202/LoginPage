// $("#signup").click(function (e) {
//     e.preventDefault()
//     $("#container").addClass("right-active")
// });

// $("#signin").click(function (e) {
//   e.preventDefault()
//     $("#container").addClass("left-active")
// });


const signupp = document.getElementById('signup');
const signinn = document.getElementById('signin');
const container = document.getElementById('container');

signupp.addEventListener('click',()=>container.classList.add('right-active'));

signinn.addEventListener('click',()=>container.classList.add('left-active'));

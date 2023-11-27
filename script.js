// script.js
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

console.log("Welcome to my website!");

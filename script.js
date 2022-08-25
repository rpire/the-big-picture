const colors = ['pink', 'beige', 'cyan', 'lightblue', 'violet'];

function changeBG() {
  let container = document.querySelector('.colored-container');
  let color = container.style.backgroundColor;
  
  if (color === 'violet') {
    color = '';
  }
  
  container.style.backgroundColor = colors[colors.indexOf(color) + 1];
}

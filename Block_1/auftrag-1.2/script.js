document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    button.onclick = () => {
      alert('Hallo Welt');
    };
  });

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('greet');
    button.addEventListener('click', () => alert('Hallo Welt'));
  });

JavaScript code for the dropdown menu:

```js
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownBtn = document.querySelector('.dropdown-btn');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

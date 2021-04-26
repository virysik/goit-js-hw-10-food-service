import menu from '../menu.json';
import template from '../template/menu.hbs';

const refs = {
    menuEl: document.querySelector(".js-menu"),
    switch: document.querySelector(".theme-switch__toggle"),
    body: document.body
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const markUp = template(menu);
refs.menuEl.insertAdjacentHTML('beforeend', markUp);
refs.switch.addEventListener('change', onSwitch);

function change(rmv,add) {
      refs.body.classList.add(add);
        refs.body.classList.remove(rmv);
        localStorage.setItem('theme', add);
}

function onSwitch(e) {
    const checked = e.target.checked;
    if (checked) {
        change(Theme.LIGHT,Theme.DARK);
        return;
    }
    change(Theme.DARK, Theme.LIGHT);
}

refs.body.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'));
refs.switch.checked = localStorage.getItem('theme') === Theme.DARK;
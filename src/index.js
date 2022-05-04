const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const imageFolder = './assets/svg/';
const images = [{
  id: 'image1',
  name: 'undraw_portfolio_update_re_jqnp',
}, {
  id: 'image2',
  name: 'undraw_building_websites_i78t',
}, {
  id: 'image3',
  name: 'undraw_site_content_re_4ctl',
}];

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function imageMode(mode) {
  images.forEach(({ id, name }) => {
    const image = document.getElementById(id);
    console.log(image);
    if (mode === '_dark') {
      setAttributes(image, {
        src: `${imageFolder}${name}_dark.svg`,
      });
    } else {
      setAttributes(image, {
        src: `${imageFolder}${name}.svg`,
      });
    }
  });
}

function toggleDarkLightMode(isLight) {
  setAttributes(document.body, {
    'data-theme': isLight ? 'light' : 'dark'
  });

  toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
  toggleIcon.children[1].classList.replace(isLight ? 'fa-moon' : 'fa-sun', isLight ? 'fa-sun' : 'fa-moon');

  imageMode(isLight ? '' : '_dark');

  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function switchTheme(e) {
  toggleDarkLightMode(!e.target.checked);
}

function getTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(false);
  }
}

function init() {
  getTheme();
  toggleSwitch.addEventListener('change', switchTheme);
}

init()
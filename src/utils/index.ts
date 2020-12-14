export function toggleHeader() {
  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll: number;
  let direction = 0;
  let prevDirection = 0;

  const header = document.getElementById("header-relative");
  const homepage = document.getElementById('homepage')

  const checkScroll = function() {
    // Find the direction of scroll
    // 0 - initial, 1 - up, 2 - down

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;

    if(direction === 1 && curScroll < 65) {
      header.classList.remove('header-fixed');
      header.classList.add('header-relative');
      header.classList.remove('hide');
      homepage.classList.remove('add-padding')
    }
    if(direction === 2 && curScroll < 150) {
      header.classList.remove('header-fixed');
      header.classList.add('header-relative');
    }
    if(direction === 2 && curScroll > 150) {
      header.classList.remove('header-fixed');
      header.classList.add('hide');
    }
    if(direction === 2 && curScroll > 65) {
      homepage.classList.remove('add-padding')
    }
  };

  const toggleHeader = function(direction: number, curScroll: number) {
    if (direction === 2 && curScroll > 150) { 
      //replace 150 with the height of your header in px
      header.classList.add('hide');
      prevDirection = direction;
    }
    if (direction === 1) {
      header.classList.remove('header-relative');
      header.classList.add('header-fixed');
      header.classList.remove('hide');
      homepage.classList.add('add-padding')
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);
}

export function toggleMenu() {
  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll: number;
  let direction = 0;
  let prevDirection = 0;

  const menu = document.getElementById('menu')

  const checkScroll = function() {
    // Find the direction of scroll
    // 0 - initial, 1 - up, 2 - down

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleMenu(direction, curScroll);
    }
    
    prevScroll = curScroll;

    if(direction === 1 && curScroll < 65) {
      menu.classList.add("hide-menu")
    }
    if(direction === 2 && curScroll < 150) {
      menu.classList.add("hide-menu")
    }
    if(direction === 2 && curScroll > 150) {
      menu.classList.add('hide-menu')
    }
  };

  const toggleMenu = function(direction: number, curScroll: number) {
    if (direction === 2 && curScroll > 150) { 
      //replace 150 with the height of your header in px
      menu.classList.remove("hide-menu")
      prevDirection = direction;
    }
    if (direction === 1) {
      menu.classList.add('hide-menu')
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);
}

export const convertBreadcrumb = (string: string) => {
  const breadcrumb = string[0].toUpperCase() + string.substring(1)

  return breadcrumb
    .replace(/-/g, ' ')
};
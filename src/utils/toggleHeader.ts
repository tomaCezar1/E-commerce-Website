export function toggleHeader() {
  const doc = document.documentElement;
  const w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll: number;
  let direction = 0;
  let prevDirection = 0;

  const header = document.getElementById("header-relative");

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
    }
    if(direction === 2 && curScroll < 150) {
      header.classList.remove('header-fixed');
      header.classList.add('header-relative');
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
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);
}
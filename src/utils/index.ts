import { useState, useEffect } from 'react';

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


export const convertBreadcrumb = (string: string) => {
  const breadcrumb = string[0].toUpperCase() + string.substring(1)

  return breadcrumb
    .replace(/-/g, ' ')
};

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },

    [value]
  );

  return debouncedValue;
}

export const getViewportScrollPosition = (): {top: number; left: number} =>  {
  // The top-left-corner of the viewport is determined by the scroll position of the document
  // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
  // whether `document.body` or `document.documentElement` is the scrolled element, so reading
  // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
  // `document.documentElement` works consistently, where the `top` and `left` values will
  // equal negative the scroll position.
  const documentElement = document.documentElement!;
  const documentRect = documentElement.getBoundingClientRect();

  const top = -documentRect.top || document.body.scrollTop || window.scrollY ||
    documentElement.scrollTop || 0;

  const left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
    documentElement.scrollLeft || 0;

  return {top, left};
}

// Cart utilities
export const saveCart = cart => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart"))
    if (cart) {
      return cart
    }
  } catch (e) {}
  return []
}

export const cartTotal = cart => {
  if (cart.length === 0) {
    return 0
  }

  // Sum up all of the individual products costs
  const total = cart.reduce((counter, product) => {
    if(product.isPromo) {
      return counter + parseFloat((product.newPrice * product.qty).toFixed(2))
    } else {
      return counter + parseFloat((product.price * product.qty).toFixed(2))
    }
  }, 0)

  return total
}

export const clearCart = () => {
  localStorage.removeItem("cart")
}

export const formatPrice = (priceWithDecimal: number) => {
  const dec = priceWithDecimal.toString().split(".")[1]

  const len = dec && dec.length > 2 ? dec.length : 2
  
  return priceWithDecimal.toFixed(len)
}

// Favorites utilities
export const getFavorites = () => {
  try {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      return favorites;
    }
  } catch (e) {}
  return [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export const removeFavorites = () => {
  localStorage.removeItem('favorites');
}

// Form fields validation
const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return 'Numele este obligatoriu';
  }

  return null;
};

const phoneValidation = (fieldName, fieldValue) => {
  if (String(fieldValue).length < 8) {
    return "Număr inexistent"
  }

  if (String(fieldValue).trim().length < 1) {
    return 'Telefonul este obligatoriu';
  }
  return null
}

const callTimeValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim().length < 1) {
    return "Indicați ora apelului"
  }

  return null;
}

export const validate = {
  name: name => nameValidation("name", name),
  phone: phone => phoneValidation('phone', phone),
  callTime: callTime => callTimeValidation('callTime', callTime),
};

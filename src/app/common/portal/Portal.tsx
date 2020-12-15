import ReactDOM from 'react-dom';
import { useEffect } from "react";

export function PortalOverlay({children, onBackdropClick}) {
  const portalWrapper = document.createElement('div');
  portalWrapper.classList.add('portal-wrapper')

  useEffect(() => {
    document.body.appendChild(portalWrapper);
    portalWrapper.addEventListener('click', (e) => {
      if (e.target.classList.contains('portal-wrapper')){
        onBackdropClick(e)
      }
    })

    const searchContainer = document.getElementById('Search')

    searchContainer.addEventListener('click', () => searchContainer.focus())

    portalWrapper.addEventListener('wheel', checkScrollDirection);

    function checkScrollDirection(event) {
      if (checkScrollDirectionIsUp(event)) {
        // Direction up
      } else {
        if (event.target.classList.contains('portal-wrapper')){
          onBackdropClick && onBackdropClick(event)
          searchContainer.blur()
        }
      }
    }

    function checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    }

    return () => {
      document.body.removeChild(portalWrapper);
    }
  },[children])

  return ReactDOM.createPortal(children, portalWrapper)
}

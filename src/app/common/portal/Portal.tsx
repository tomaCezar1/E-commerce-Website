import ReactDOM from 'react-dom';
import { useEffect } from "react";

export function PortalOverlay({children, onBackdropClick}) {
  const portalWrapper = document.createElement('div');
  portalWrapper.classList.add('portal-wrapper')

  useEffect(() => {
    document.body.appendChild(portalWrapper);
    portalWrapper.addEventListener('click', (e) => {
      if ((e.target as HTMLTextAreaElement).classList.contains('portal-wrapper')){
        onBackdropClick(e)
      }
    })

    return () => {
      document.body.removeChild(portalWrapper);
    }
  },[children])

  return ReactDOM.createPortal(children, portalWrapper)
}

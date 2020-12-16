import { useEffect, useState } from "react";
import {PortalOverlay} from "../portal/Portal";
import { getViewportScrollPosition } from '../../../utils'

export default function Overlay({
  children,
  anchor,
  onBackdropClick,
  className,
  closeOnScroll = true
}: Partial<any>) {

  const [styleState, setStyleState] = useState()

  let onScrollCallback: () => any = null;

  useEffect(() => {

    if (!anchor) {
      throw new Error('<Overlay> component requires anchor prop')
    }

    const width = anchor.offsetWidth;
    const style: any = {width};
    const dimensions = anchor ? anchor.getBoundingClientRect() : {width};

    // Position calculation based on anchor
    style.left = (dimensions.left + (dimensions.width / 2)) - (width / 2);
    style.left = Math.min(style.left, document.body.clientWidth - width);
    dimensions.top < window.innerHeight / 2
      ? style.top = dimensions.top + dimensions.height
      : style.bottom = (window.innerHeight - dimensions.top);

    setStyleState(style)

    const initialScrollPosition = getViewportScrollPosition().top;

    if (closeOnScroll && !onScrollCallback) {
      onScrollCallback = () => {
        const currentScrollPosition = getViewportScrollPosition().top;
        if (Math.abs(currentScrollPosition - initialScrollPosition) > 1) {
          onBackdropClick()
        }
      }
      document.addEventListener('scroll', onScrollCallback)
    }

    return () => {
      if (onScrollCallback) {
        document.removeEventListener('scroll', onScrollCallback);
      }
    }


  }, [children])

  return (
    <PortalOverlay onBackdropClick={onBackdropClick}>
      <div className={`overlay-container ${className}`} style={styleState}>
        {children}
      </div>
    </PortalOverlay>
  )
}

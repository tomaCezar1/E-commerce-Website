import { useEffect, useState } from "react";
import {PortalOverlay} from "../portal/Portal";

export default function Overlay({
  children,
  width,
  space = 16,
  anchor,
  onBackdropClick
}: Partial<any>) {

  const [styleState, setStyleState] = useState()

  useEffect(() => {
    width = width || anchor.offsetWidth;
    const style: any = {width};
  
    const dimensions = anchor.getBoundingClientRect();
    
    style.left = (dimensions.left + (dimensions.width / 2)) - (width / 2);
    style.left = Math.max(space, style.left); // make sure it doesn't poke off the left side of the page
    style.left = Math.min(style.left, document.body.clientWidth - width - space); // or off the right
 
    if (dimensions.top < window.innerHeight / 2) { // the top half of the page
      // when on the top half of the page, position the top of the tooltip just below the target (it will stretch downwards)
      style.top = dimensions.top + dimensions.height + space;
    } else {
      // when on the bottom half, set the bottom of the tooltip just above the top of the target (it will stretch upwards)
      style.bottom = (window.innerHeight - dimensions.top) + space;
    }
    setStyleState(style)
  }, [children])

  return (
    <PortalOverlay onBackdropClick={onBackdropClick}>
      <div className="overlay-container" style={styleState}>
        {children}
      </div>
    </PortalOverlay>
  )
}
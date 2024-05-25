import { useRef } from "react";
import { CONFIG } from "./config";
import useMousePosition from "./useMousePosition";
import { useWindowSize } from "@uidotdev/usehooks";


const ImageTooltip = ({seat}) => {
    const mousePosition = useMousePosition();
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const tooltipRef = useRef(null);
    const tooltipHeight = tooltipRef?.current?.clientHeight || 0;
    const tooltipWidth = tooltipRef?.current?.clientWidth || 0;

    const top = mousePosition.y + tooltipHeight > windowHeight ? mousePosition.y - tooltipHeight - 5 : mousePosition.y + 5;
    const left = mousePosition.x + tooltipWidth > windowWidth ? mousePosition.x - tooltipWidth - 5 : mousePosition.x + 5;

    console.log(windowHeight)

    if(!seat) return;

    const hasImage = CONFIG.seatsWithImages.includes(seat);

    return <div className="tooltip" ref={tooltipRef} style={{top, left}}>
        <span>{seat}</span>
        {hasImage ? <img src={require(`./img/${seat}.jpg`)} /> : <span>No image for this seat :&#40;</span>}
    </div>
}

export default ImageTooltip
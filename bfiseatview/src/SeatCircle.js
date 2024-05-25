import { CONFIG } from "./config";

const SeatCircle = (props) => {
    const { onSeatMouseEnter, onSeatMouseLeave, onSeatClick, ...otherProps } = props;
    const seat = `${props["data-seat-row"]}${props["data-seat-seat"]}`

    const handleClick = () => {
        if(onSeatClick) onSeatClick(seat)
    }

    const handleEnter = () => {
        if(onSeatMouseEnter) onSeatMouseEnter(seat)
    }

    const hasImage = CONFIG.seatsWithImages.includes(seat);

    return <circle className="seat" {...otherProps} onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={onSeatMouseLeave} r="5" stroke={hasImage ? "white" : "transpaarent"}/>
}

export default SeatCircle

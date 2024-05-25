import { CONFIG } from "./config";

const SeatCircle = (props) => {
    const { onSeatMouseEnter, onSeatMouseLeave } = props;
    const seat = `${props["data-seat-row"]}${props["data-seat-seat"]}`

    const handleEnter = () => {
        onSeatMouseEnter(seat)
    }

    const hasImage = CONFIG.seatsWithImages.includes(seat);

    return <circle className="seat" {...props} onMouseEnter={handleEnter} onMouseLeave={onSeatMouseLeave} r="5" stroke={hasImage ? "white" : "transpaarent"}/>
}

export default SeatCircle
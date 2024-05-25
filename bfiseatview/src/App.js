import { useState } from 'react';
import './App.css';
import BFISeatMap from './BFISeatMap';
import ImageTooltip from './ImageTooltip';
import ImageModal from './ImageModal';
import { CONFIG } from './config';

function App() {
  const [hoveredSeat, setHoveredSeat] = useState(null);
  const [clickedSeat, setClickedSeat] = useState(null);
  const [tooltipTimeoutId, setTooltipTimeoutId] = useState(null);

  const onSeatClick = (seat) => {
    if(!CONFIG.seatsWithImages.includes(seat)) return;

    setHoveredSeat(null);
    if(tooltipTimeoutId) {
      clearTimeout(tooltipTimeoutId);
      setTooltipTimeoutId(null);
    }

    setClickedSeat(seat);
  }

  const onSeatMouseEnter = (seat) => {
    if (tooltipTimeoutId) {
      clearTimeout(tooltipTimeoutId)
      setTooltipTimeoutId(null);
    }
    setHoveredSeat(seat);
  }

  const onSeatMouseLeave = () => {
    setTooltipTimeoutId(setTimeout(() => {
      setHoveredSeat(null);
      setTooltipTimeoutId(null);
    }, 400))
  }

  return (
    <>
    <div className="App">
      <div className="header">
        <span>BFI IMAX Seat View</span><br />
        <span className="subheader">{"(Unaffiliated with BFI, hover over a seat to see the view from it, seats with white outlines have an image)"}</span>
      </div>

      <div className="map-container">
        <BFISeatMap onSeatMouseEnter={onSeatMouseEnter} onSeatMouseLeave={onSeatMouseLeave} onSeatClick={onSeatClick} />
      </div>

      <ImageTooltip seat={hoveredSeat} />
    </div>

    {clickedSeat && <ImageModal seat={clickedSeat} onClose={() => setClickedSeat(null)} />}
    </>
  );
}

export default App;

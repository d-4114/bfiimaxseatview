import { useState } from 'react';
import './App.css';
import BFISeatMap from './BFISeatMap';
import ImageTooltip from './ImageTooltip';

function App() {
  const [seat, setSeat] = useState(null);
  const [tooltipTimeoutId, setTooltipTimeoutId] = useState(null);

  const onSeatMouseEnter = (seat) => {
    if (tooltipTimeoutId) {
      clearTimeout(tooltipTimeoutId)
      setTooltipTimeoutId(null);
    }
    setSeat(seat);
  }

  const onSeatMouseLeave = () => {
    setTooltipTimeoutId(setTimeout(() => {
      setSeat(null);
      setTooltipTimeoutId(null);
    }, 400))
  }

  return (
    <div className="App">
      <div className="header">
        <span>BFI IMAX Seat View</span><br />
        <span className="subheader">{"(Unaffiliated with BFI, hover over a seat to see the view from it, seats with white outlines have an image)"}</span>
      </div>

      <div className="map-container">
        <BFISeatMap onSeatMouseEnter={onSeatMouseEnter} onSeatMouseLeave={onSeatMouseLeave} />
      </div>

      <ImageTooltip seat={seat} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Progres.css";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);
  return (
    <div className="progress">
      <div className="progress-done font-semibold text-sm" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Progress;

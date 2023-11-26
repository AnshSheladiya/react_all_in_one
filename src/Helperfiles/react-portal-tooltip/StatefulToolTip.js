import React, { useState } from 'react';
import ToolTip from 'react-portal-tooltip';

const StatefulToolTip = ({ text, tooltipContent }) => {
  const [isTooltipActive, setTooltipActive] = useState(false);

  const showTooltip = () => {
    setTooltipActive(true);
  };

  const hideTooltip = () => {
    setTooltipActive(false);
  };

  const handleContentMouseEnter = () => {
    if (!isTooltipActive) {
      showTooltip();
    }
  };

  const handleContentMouseLeave = () => {
    if (isTooltipActive) {
      hideTooltip();
    }
  };

  return (
    <div>
      <p
        onMouseEnter={handleContentMouseEnter}
        onMouseLeave={handleContentMouseLeave}
        id="text" // Assign an id to the element
      >
        {text}
      </p>
      <ToolTip
        active={isTooltipActive}
        position="bottom"
        arrow="center"
        parent="#text" // Specify the id of the parent element here
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <div>
          {tooltipContent}
        </div>
      </ToolTip>
    </div>
  );
};

export default StatefulToolTip;

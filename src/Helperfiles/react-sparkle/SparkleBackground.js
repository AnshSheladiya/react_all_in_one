import React from "react";
import Sparkles from "react-sparkle";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";

const SparkleBackground = () => {
  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    overflow: "hidden",
  };

  return (
    <CenterScreen>
      <div style={containerStyle}>
        <TitleComponent>React-sparkle</TitleComponent>
        <Sparkles flicker={false} />
        <Sparkles
          color="red"
          count={20}
          minSize={7}
          maxSize={12}
          overflowPx={80}
          fadeOutSpeed={30}
          flicker={false}
        />
      </div>
    </CenterScreen>
  );
};

export default SparkleBackground;

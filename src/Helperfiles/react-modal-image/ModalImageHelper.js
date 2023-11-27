import React from "react";
import ModalImage from "react-modal-image";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";

const ModalImageHelper = ({
  alt,
  small,
  large,
  hideDownload,
  hideZoom,
  imageBackgroundColor,
  showRotate,
}) => {
  return (
    <div>
      <CenterScreen>
        <TitleComponent>React-modal-image</TitleComponent>
        <div style={{ width: 300, hieght: 200 }}>
          <ModalImage
            alt={alt || "Demo Image Title"}
            small={small ? small : require("../../assets/wow.jpg")}
            large={large ? large : require("../../assets/wow.jpg")}
            hideDownload={hideDownload || false}
            hideZoom={hideZoom || false}
            imageBackgroundColor={imageBackgroundColor}
            showRotate={showRotate || true}
          />
        </div>
      </CenterScreen>
    </div>
  );
};

export default ModalImageHelper;

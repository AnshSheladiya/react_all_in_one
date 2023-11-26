// import './App.css';
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";
import StatefulToolTip from "./StatefulToolTip";
function StatefulToolTipComponent() {
  return (
    <div>
      <CenterScreen>
        <TitleComponent>Stateful ToolTip Component</TitleComponent>

        <StatefulToolTip
          text="This is a cool component"
          tooltipContent={
            <div>
              <p>This is the content of the tooltip</p>
              <img
                src={require("../../assets/wow.jpg")}
                width={"100px"}
                alt="Tooltip Image"
              />
            </div>
          }
        />
      </CenterScreen>
    </div>
  );
}

export default StatefulToolTipComponent;

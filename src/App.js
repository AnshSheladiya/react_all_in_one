import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GoogleMapReactComponent from "./Helperfiles/google-map-react/GoogleMapReact";
import TailwindCSSIndex from "./Helperfiles/TailwindCSS/tailwindCSSIndex";
import LandingPageUI from "./Helperfiles/webPages/tailwindCss/LandingPageUI/LandingPageUI";
import SchoolWebsiteUI from "./Helperfiles/webPages/tailwindCss/SchoolWebsiteUI/SchoolWebsiteUI";
import HermesIndex from "./Helperfiles/hermes-io/HermesIndex";
import HighlightableComponent from "./Helperfiles/highlightable/HighlightableComponent";
import MUIIndex from "./Helperfiles/mui-material/MUIIndex";
import MZInputNumber from "./Helperfiles/mz-react-input-number/InputNumber";
import FolderDataUseTree from "./Helperfiles/rc-tree/FolderDataUseTree";
import AvatarEditorWrapper from "./Helperfiles/react-avatar-editor/AvatarEditorWrapper";
import ChatElementsIndex from "./Helperfiles/react-chat-elements/ChatElementsIndex";
import CodeBlockComponent from "./Helperfiles/react-code-blocks/CodeBlock";
import ColorPicker from "./Helperfiles/react-color/ColorPicker";
import CopyToClipboardUsage from "./Helperfiles/react-copy-to-clipboard/CopyToClipboardUsage";
import CountUpComponent from "./Helperfiles/react-countup/CountUpComponent";
import DashboardUI from "./Helperfiles/webPages/tailwindCss/CryptoDashboardUI/DashboardUI";
import ReactCssFlexExamples from "./Helperfiles/react-css-flex/FlexExamples";
import ReactCssGridExamples from "./Helperfiles/react-css-grid/ReactCssGridExamples";
import DropzoneHelper from "./Helperfiles/react-dropzone/DropzoneHelper";
import FastMarquee from "./Helperfiles/react-fast-marquee/FastMarquee";
import WhatsAppButton from "./Helperfiles/react-floating-whatsapp/WhatsAppButton";
import Captcha from "./Helperfiles/react-google-recaptcha/Captcha";
import AudioPlayerComponent from "./Helperfiles/react-h5-audio-player/AudioPlayerComponent";
import MyReactHookForm from "./Helperfiles/react-hook-form/MyReactHookForm";
import MagnifierComponent from "./Helperfiles/react-image-magnifiers/MagnifierComponent";
import ViewportUseComponent from "./Helperfiles/react-in-viewport/ViewportUseComponent";
import ReactInspector from "./Helperfiles/react-inspector/react-inspector";
import PhoneInputComponent from "./Helperfiles/react-international-phone/InternationalPhoneInputComponent";
import ReactIntl from "./Helperfiles/react-intl/use";
import JoystickComponent from "./Helperfiles/react-joystick-component/JoystickComponent";
import LiveCodeEditor from "./Helperfiles/react-live/LiveCodeEditor";
import LoadingComponent from "./Helperfiles/react-loading-ui/LoadingComponent";
import StatefulToolTip from "./Helperfiles/react-portal-tooltip/StatefulToolTip";
import StatefulToolTipComponent from "./Helperfiles/react-portal-tooltip/use";
import Sidebars from "./Helperfiles/react-pro-sidebar/Sidebars";
import SortableIndex from "./Helperfiles/react-sortable-hoc/SortableIndex";
import ResizableView from "./Helperfiles/react-spaces/ResizableView";
import SparklineChart from "./Helperfiles/react-sparklines/SparklineChart";
import SpinnersWithProps from "./Helperfiles/react-spinners/react-spinners-props-helper";
import StickyNotes from "./Helperfiles/react-sticky-notes/StickyNotes";
import SyntaxHighlighterComponent from "./Helperfiles/react-syntax-highlighter/SyntaxHighlighter";
import TabComponent from "./Helperfiles/react-tabs/TabComponent";
import MyTerminalApp from "./Helperfiles/react-terminal/MyTerminalApp";
import CommonPrintComponent from "./Helperfiles/react-to-print/CommonPrintComponent";
import Timeline from "./Helperfiles/react-vertical-timeline-component/Timeline";
import MyResizableComponent from "./Helperfiles/react-virtualized-auto-sizer/ResizableComponent";
import WorldFlags from "./Helperfiles/react-world-flags/WorldFlags";
import CountdownTimer from "./Helperfiles/reactjs-countdown-hook/CountdownTimer";
import ChartIndex from "./Helperfiles/recharts";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <---------Basic Modules------> */}
        <Route path="*" element={<HomePage />} />

        {/* <---------Functionallty Modules------> */}
        <Route path="/HighlightableComponent" element={<HighlightableComponent />} />
        <Route path="/FolderDataUseTree" element={<FolderDataUseTree />} />
        <Route path="/AvatarEditorWrapper" element={<AvatarEditorWrapper />} />
        <Route path="/CopyToClipboardUsage" element={<CopyToClipboardUsage />} />
        <Route path="/CountUpComponent" element={<CountUpComponent />} />
        <Route path="/FastMarquee" element={<FastMarquee> </FastMarquee>}/>
        <Route path="/MyReactHookForm" element={<MyReactHookForm />}/>
        <Route path="/ViewportUseComponent" element={<ViewportUseComponent />}/>
        <Route path="/ReactInspector" element={<ReactInspector />}/>
        <Route path="/StatefulToolTip" element={<StatefulToolTipComponent />}/>
        <Route path="/SortableIndex" element={<SortableIndex />}/>
        <Route path="/ResizableView" element={<ResizableView />}/>
        <Route path="/CommonPrintComponent" element={<CommonPrintComponent />}/>
        <Route path="/CountdownTimer" element={<CountdownTimer />} />

        {/* <---------components Modules------> */}
        <Route path="/MZInputNumber" element={<MZInputNumber />} />
        <Route path="/PhoneInputComponent" element={<PhoneInputComponent />} />
        <Route path="/CodeBlockComponent" element={<CodeBlockComponent />} />
        <Route path="/WhatsAppButton" element={<WhatsAppButton />} />
        <Route path="/Captcha" element={<Captcha />} />
        <Route path="/AudioPlayerComponent" element={<AudioPlayerComponent />} />
        <Route path="/JoystickComponent" element={<JoystickComponent />} />
        <Route path="/LiveCodeEditor" element={<LiveCodeEditor />} />
        <Route path="/LoadingComponent" element={<LoadingComponent />} />
        <Route path="/Sidebars" element={<Sidebars />} />
        <Route path="/SpinnersWithProps" element={<SpinnersWithProps />} />
        <Route path="/StickyNotes" element={<StickyNotes />} />
        <Route path="/SyntaxHighlighterComponent" element={<SyntaxHighlighterComponent />} />
        <Route path="/TabComponent" element={<TabComponent />} />
        <Route path="/MyTerminalApp" element={<MyTerminalApp />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="/WorldFlags" element={<WorldFlags />} />


        {/* <---------Map Modules------> */}
        <Route path="/GoogleMapReactComponent" element={<GoogleMapReactComponent />} />

        {/* <---------Chart Modules------> */}
        <Route path="/SparklineChart" element={<SparklineChart />} />
        <Route path="/ChartIndex" element={<ChartIndex />} />

        {/* <---------Framworks and Libraries------> */}
        <Route path="/MUIIndex" element={<MUIIndex />} />
        <Route path="/ChatElementsIndex" element={<ChatElementsIndex />} />
        <Route path="/ColorPicker" element={<ColorPicker />} />

        {/* <---------React Learnings------> */}
        <Route path="/TailwindCSSIndex" element={<TailwindCSSIndex />} />
        <Route path="/ReactCssFlexExamples" element={<ReactCssFlexExamples />} />
        <Route path="/ReactCssGridExamples" element={<ReactCssGridExamples />} />

        {/* <---------WebPages------> */}
        <Route path="/LandingPageUI" element={<LandingPageUI />} />
        <Route path="/SchoolWebsiteUI" element={<SchoolWebsiteUI />} />
        <Route path="/DashboardUI" element={<DashboardUI/>} />

        {/* <---------Pending Modules------> */}
        <Route path="/HermesIndex" element={<HermesIndex />} />
        <Route path="/DropzoneHelper" element={<DropzoneHelper />} />
        <Route path="/MagnifierComponent" element={<MagnifierComponent />} />
        <Route path="/ReactIntl" element={<ReactIntl />}/>
        <Route path="/MyResizableComponent" element={<MyResizableComponent />}/>
        {/* <Route path="/PaginatedItems" element={<PaginatedItems />}/> */}

      </Routes>
    </div>

  );
}

export default App;

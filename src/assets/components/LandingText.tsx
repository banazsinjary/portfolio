import "./Components.css"
import "./SwitchText"
import SwitchText from "./SwitchText";

function LandingText(){
    return(
        <>
        <div id="landing-text">
        <p>Hey I'm Banaz</p>
        <p>I'm a blend of App Designer, Developer, </p>
        <p>{<SwitchText></SwitchText>}</p>
        </div>
        </>
    )
}

export default LandingText;
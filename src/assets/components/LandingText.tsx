import "./Components.css"
import "./SwitchText"
import SwitchText from "./SwitchText";

function LandingText(){
    return(
        <>
        <p>Hey I'm Banaz</p>
        <p>I'm a blend of App Designer, Developer, </p>
        <p>{<SwitchText></SwitchText>}</p>
        </>
    )
}

export default LandingText;
import "./Home.css";
import main_pic from "../../assets/blurry_pic.JPG";
import ice_pic from "../../assets/ice_cream.jpeg";
import Bounce from "react-reveal/Bounce";

function Home() {
  return (
    <div className="greet">
      <img src={main_pic} id="main_pic" alt="Duy_is_cool"></img>
      <h1>Duy's Funtastic Castle</h1>
      <div class="introduce">
        <div class="column column1">
          <Bounce left>
            <img src={ice_pic} alt="ice_cream" id="self_port"></img>
          </Bounce>
        </div>
        <div class="column column2">
          <h2>Second Column</h2>
          <p>
            Hi my name is Duy. The creator of this world they call the Funtastic
            Castle. Here lies myself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

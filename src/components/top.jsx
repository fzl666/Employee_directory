import React from "react";
import { render } from "react-dom"
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const style = {
row:{
  margin: 10,
  background: "#708090",
  color:"white",
  fontSize:"15px"

}
};
function Top(props) {
    return (
        <div class="container">
        <div style={style.row} class="row">
          <div class="col" onClick={props.onClick}>
            <p>Name <FontAwesomeIcon icon={faSort} /></p>
           
          </div>
          <div class="col">  
          <p>E-mail</p>      
          </div>
          <div class="col">  
          <p>Phone</p>    
          </div>
          <div class="col">     
          <p>Profile</p> 
          </div>
        </div>
      </div>
    );
  }
  render(<Top />, document.getElementById("root"))
export default Top;
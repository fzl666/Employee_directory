import React from "react";
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
          <div class="col">
            <p>Name</p>
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
export default Top;
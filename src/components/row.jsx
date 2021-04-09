import React from "react";
const style = {
row:{
  margin: 10,
  background: "#e8eaf6",
}
};
function Row(props) {
    return (
        <div style={style.row} class="row">
          <div class="col">
            <p>{props.name}</p>
          </div>
          <div class="col">  
          <p>{props.email}</p>      
          </div>
          <div class="col">  
          <p>{props.number}</p>    
          </div>
          <div class="col">     
          <img src={props.picture} alt={props.name}></img>   
          </div>
        </div>
    );
  }
export default Row;


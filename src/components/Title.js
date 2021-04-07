import React from "react";
const style = {
    title:{
      marginBottom: 30,
      textAlign:"center"
    }
    };
function Title(props) {
  return <h1 style={style.title}className="title">{props.children}</h1>;
}

export default Title;

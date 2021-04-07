import React, { Component } from "react";
import Row from "./row"
import list from "./list.json"
import Container from "./container"
import Title from "./Title"

class Table extends Component {
state={
    list
};


render(){
    return(
    
    <Container>
        <Title>Employee Directory</Title>
        {this.state.list.map(user=>(
        <Row 
        id={user.id}
        name={user.name}
        email={user.email}
        number={user.number}
        picture={user.picture}
        />
    ))}
    </Container>
    )
 }
}

export default Table;



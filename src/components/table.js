import React, { Component } from "react";
import Row from "./row"
import list from "./list.json"
import Container from "./container"
import Title from "./Title"
import Search from "./search"
import Top from "./top"

class Table extends Component {
state={
    users:list,
};

render(){
    return(
    <Container>
        <Title>Employee Directory</Title>
        <Search
       value={this.value}
       onChange={this.onChangeHandler} ></Search>
        <Top/>
        {this.state.users.map(user=>(
        <Row 
        name={user.name}
        email={user.email}
        number={user.phone}
        picture={user.picture}
        />
    ))}
    </Container>
    )
 }
}

export default Table;



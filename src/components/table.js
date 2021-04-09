import React, { Component } from "react";
import Row from "./row";
import list from "./list.json";
import Container from "./container";
import Title from "./Title";
import Search from "./search";
import Top from "./top";

class Table extends Component {
  state = {
    users: list,
    search: "",
    ascending: true,
  };
  onChangeHandler = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  onClick =(e)=> {
    this.setState(
 {ascending: !this.state.ascending}
    )
  
  
  }
  render() {
    return (
      <Container>
        <Title>Employee Directory</Title>
        <Search
          search={this.state.search}
          onChangeHandler={this.onChangeHandler}
        ></Search>
        <Top 
        onClick={this.onClick}
        />
        {this.state.users
          .sort((a, b) => {
            if (this.state.ascending) {
              if (a.name< b.name) {
                return -1;
              }
              if (a.name> b.name) {
                return 1;
              }
              return 0;
            }
            //Descending
            else {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name> b.name) {
                return -1;
              }
              return 0;
            }
          })
          .filter((user) => {
            if (!this.state.search) {
              return user;
            } else if (
              user.name.toLowerCase().includes(this.state.search.toLowerCase())
            ) {
              return user;
            }
          })
          .map((user) => (
            <Row
              key={user.id}
              name={user.name}
              email={user.email}
              number={user.phone}
              picture={user.picture}
            />
          ))}
      </Container>
    );
  }
}

export default Table;

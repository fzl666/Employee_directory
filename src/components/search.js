import React from "react";
const style={
    search:{
margin:10
    }
}
function Search(props) {
    return(
    <form class="container" style={style.search}>
    <div class="row">
      <div class='col'> <input
        onChange={props.onChangeHandler}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for an employee"
        id="search"
      />
      </div>
    </div>
  </form>
    )
}

export default Search;

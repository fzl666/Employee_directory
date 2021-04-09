import React from "react";

function Search(props) {
    return(
    <div class="row">
      <div class='col'> <input
        onChange={props.onChangeHandler}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for an employee"
        id="search"
      />
      </div>
    </div>
    )
}

export default Search;

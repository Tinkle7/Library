import React from "react";

function Search() {
  function getDetails() {
    let result = document.getElementById("result").value;
    console.log(result);
  }

  return (
    <div>
      <input id="result" ctype="search" />
      <button onClick={getDetails}>SEARCH</button>
    </div>
  );
}

export default Search;

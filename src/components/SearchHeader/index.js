import React from "react";

function SearchHeader({onSearch=()=>{}}) {
  return (
    <div className={'search_bar'}>
      <input placeholder={"search for chat..."} onChange={onSearch} />
    </div>
  );
}

export default SearchHeader;

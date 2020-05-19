import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
      // invoke handleSearch to take the query (e.target.value)
      // use the e.target.value to grab what the user is typing
        <input className="prompt"  onChange={() => {console.log("searching...")}} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search

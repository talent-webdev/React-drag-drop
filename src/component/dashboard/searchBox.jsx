const SearchBox = (props) => {
  return (
    <>
      <input type="search" onChange={props.onSearchChange} className="w-11/12 mt-24 mb-8 h-8 border-none outline-none p-1" />
    </>
  )
}

export default SearchBox
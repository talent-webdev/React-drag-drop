const SearchBox = (props) => {
  return (
    <>
      <input type="search" onChange={props.onSearchChange} className="w-full mt-24 mb-8 h-8  outline-none p-1 border-2 hover:border-black border-abbey border" />
    </>
  )
}

export default SearchBox
import React from 'react'

const SearchBar = ({searchQuery, setSearchQuery, setSearchTerm, setPage, setSearchPage}) => {
  const handleSearch = () => {
    if(!searchQuery.trim()) return;
    setSearchTerm(searchQuery.trim());
    setSearchPage(1);
    // setPage(1)

  }
  return (
    <div className='mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl sm:flex-row'>
        <input type="text" 
        placeholder='Search for movies...'
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onKeyDown={(e)=> {
          if(e.key === "Enter") {
            e.preventDefault()
            handleSearch()
          }
        }}
        className='min-w-o flex-1 rounded-xl bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500'/>
        <button id='button' onClick={handleSearch} className='rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg'>🔍Search</button>
    </div>
  )
}

export default SearchBar
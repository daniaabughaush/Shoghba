import React from 'react'


const Search = ({search,setSearch}) => {
   
  return (
    <div>

        <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor='search'>Search</label>
          <input type='text' 
          name='search'
           id='search'
            role='searchbox'
             placeholder='search here'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          
          />

        </form>
    </div>
  )
}

export default Search;

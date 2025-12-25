import React, { useState } from 'react'
import '../css/SearchArticle.css'
import vector from '../assets/vector.svg'
import clear from '../assets/clear-img.png'

export default function SearchArticle() {
  const [searchTerm, setSearchTerm] = useState('')

  function handleFilter() {
    
  }
  
  return (
    <>
      <section className='filter-container'>
        <label htmlFor='filter-input' className='filter-label'>Filter by keywords</label>
        <div className='filter-input-group'>
          <div className='left-filter'>
            <button className='search-btn' onClick={handleFilter} disabled={!searchTerm}>
              <img src={vector} alt="Magnifying glass search icon" className='vector-img' />
            </button>
            <input type="text"
            placeholder='The most successful IT companies in 2020'
            value={searchTerm} 
            id='filter-input'
            name='filter-input'
            onChange={(e) => setSearchTerm(e.target.value)}
            className='filter-input' />
          </div>
          <button className='delete-btn' disabled={!searchTerm}>
            <img src={clear} alt="Delete icon" className='delete-img' />
          </button>
        </div>
      </section>
    </>
  )
}

import { useState } from 'react'
import '../styles/SearchUser.css'

function SearchUser({ onSearchUser }) {
  const [searchId, setSearchId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchId.trim()) {
      onSearchUser(searchId)
      setSearchId('')
    }
  }

  const handleChange = (e) => {
    setSearchId(e.target.value)
  }

  return (
    <div className="search-user-container">
      <h2>🔍 Search User by ID</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={searchId}
            onChange={handleChange}
            placeholder="Enter User ID to search..."
            className="search-input"
          />
          <button type="submit" className="btn btn-search">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchUser

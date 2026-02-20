import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [nextId, setNextId] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    designation: '',
    company: '',
    address: ''
  })
  const [editingId, setEditingId] = useState(null)
  const [searchId, setSearchId] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [errors, setErrors] = useState({})

  // Load users from localStorage
  useEffect(() => {
    // Data not persisted - starts fresh on reload
  }, [])

  // Save to localStorage
  useEffect(() => {
    // No localStorage - data only in session
  }, [users])

  // Validate form
  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name required'
    if (!formData.contact.trim() || !/^\d{10}$/.test(formData.contact.replace(/\D/g, ''))) {
      newErrors.contact = 'Valid 10-digit contact required'
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email required'
    }
    if (!formData.designation.trim()) newErrors.designation = 'Designation required'
    if (!formData.company.trim()) newErrors.company = 'Company required'
    if (!formData.address.trim()) newErrors.address = 'Address required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Add or update user
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    if (editingId) {
      setUsers(users.map(user => 
        user.id === editingId ? { ...formData, id: editingId } : user
      ))
      setEditingId(null)
    } else {
      setUsers([...users, { ...formData, id: nextId }])
      setNextId(nextId + 1)
    }
    
    setFormData({ name: '', contact: '', email: '', designation: '', company: '', address: '' })
  }

  // Edit user
  const handleEdit = (user) => {
    setFormData(user)
    setEditingId(user.id)
    window.scrollTo(0, 0)
  }

  // Delete user
  const handleDelete = (id) => {
    if (window.confirm('Delete this user?')) {
      setUsers(users.filter(user => user.id !== id))
    }
  }

  // Cancel edit
  const handleCancel = () => {
    setEditingId(null)
    setFormData({ name: '', contact: '', email: '', designation: '', company: '', address: '' })
    setErrors({})
  }

  // Search user
  const handleSearch = (e) => {
    e.preventDefault()
    const user = users.find(u => u.id === parseInt(searchId))
    setSearchResult(user || null)
  }

  return (
    <div className="container">
      <h1>User Management System</h1>

      {/* Form */}
      <div className="form-box">
        <h2>{editingId ? 'Edit User' : 'Add User'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div>
            <label>Contact No.</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
            {errors.contact && <span className="error">{errors.contact}</span>}
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label>Designation</label>
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
            {errors.designation && <span className="error">{errors.designation}</span>}
          </div>

          <div>
            <label>Company</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} />
            {errors.company && <span className="error">{errors.company}</span>}
          </div>

          <div>
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} rows="3"></textarea>
            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <div className="form-buttons">
            <button type="submit">{editingId ? 'Update User' : 'Add User'}</button>
            {editingId && <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>}
          </div>
        </form>
      </div>

      {/* Search */}
      <div className="search-box">
        <h2>Search User by ID</h2>
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Enter User ID" 
            value={searchId} 
            onChange={(e) => setSearchId(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {searchResult && (
          <div className="search-result">
            <p><strong>ID:</strong> {searchResult.id}</p>
            <p><strong>Name:</strong> {searchResult.name}</p>
            <p><strong>Contact:</strong> {searchResult.contact}</p>
            <p><strong>Email:</strong> {searchResult.email}</p>
            <p><strong>Designation:</strong> {searchResult.designation}</p>
            <p><strong>Company:</strong> {searchResult.company}</p>
            <p><strong>Address:</strong> {searchResult.address}</p>
            <div className="search-buttons">
              <button className="edit-btn" onClick={() => handleEdit(searchResult)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(searchResult.id)}>Delete</button>
            </div>
          </div>
        )}
        {searchResult === null && searchId && <p className="no-result">User not found</p>}
      </div>

      {/* Users List */}
      <div className="list-box">
        <h2>All Users ({users.length})</h2>
        {users.length === 0 ? (
          <p className="empty">No users yet. Add one above!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Company</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.contact}</td>
                  <td>{user.email}</td>
                  <td>{user.designation}</td>
                  <td>{user.company}</td>
                  <td>{user.address}</td>
                  <td className="actions">
                    <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default App

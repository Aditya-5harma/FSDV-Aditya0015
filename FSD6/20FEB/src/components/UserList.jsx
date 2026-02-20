import '../styles/UserList.css'

function UserList({ users, onDeleteUser, onEditUser }) {
  if (users.length === 0) {
    return (
      <div className="user-list-container">
        <h2>📋 All Users</h2>
        <div className="empty-message">
          <p>No users found. Add a new user to get started! 👆</p>
        </div>
      </div>
    )
  }

  return (
    <div className="user-list-container">
      <h2>📋 All Users ({users.length})</h2>
      <div className="table-wrapper">
        <table className="user-table">
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
                <td className="id-cell">{user.id}</td>
                <td className="name-cell">{user.name}</td>
                <td className="contact-cell">{user.contact}</td>
                <td className="email-cell">{user.email}</td>
                <td className="designation-cell">{user.designation}</td>
                <td className="company-cell">{user.company}</td>
                <td className="address-cell">{user.address}</td>
                <td className="actions-cell">
                  <button
                    className="btn btn-sm btn-edit"
                    onClick={() => onEditUser(user)}
                    title="Edit this user"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn btn-sm btn-delete"
                    onClick={() => onDeleteUser(user.id)}
                    title="Delete this user"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList

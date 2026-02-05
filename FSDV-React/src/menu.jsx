import "./menu.css";

function Menu() {
  return (
    <nav className="menu">
      <h2 className="menu-logo">My Courses</h2>
      <ul className="menu-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
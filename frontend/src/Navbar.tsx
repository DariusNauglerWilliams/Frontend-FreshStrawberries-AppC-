



function Navbar() {
  return (
    <nav className="Navbar-Container">
      <a href="/" className="Navbar-Logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        <img src="/strawberry-graphic-clipart-design-free-png.webp" alt="Strawberry Logo" width="80" style={{ marginRight: 16 }} />
        <span style={{ fontSize: 40, fontWeight: 900 }}>Fresh Strawberries</span>
      </a>
    </nav>
  );
}



export default Navbar
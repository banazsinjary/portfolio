import "./Components.css";

function NavBar() {
  return (
    <>
      <div id="nav-container">
        <div className="nav-links">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/banazs/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/banazsinjary/">GitHub</a>
            </li>
            <li>
              <a href="mailto: banazsinjary@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1qQHP4RSuHMQB4jOK9YBc0IEYyJiK0D7t/view?usp=sharing">
                Resume
              </a>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default NavBar;

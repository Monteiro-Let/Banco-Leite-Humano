import './Header.css';
function Header() {
    return (
      <>
        <header className="header-container">
            <nav className="nav-container">
                <h1 className="title">Lact<span className='icon-heart'>🩷</span>map</h1>
                <h2 className="subtitle">Uma api rest de bancos de leite humano</h2>
                <div className="button-container">
                 <button className="github">
                  <a href=""><span>⭐</span></a>GitHub</button>
                 <button className="share"><span className='icon-link'>🔗</span>Compartilhar</button>
                </div>
                <span className="icon-humburger"></span>
            </nav>
        </header>
      </>
    );
  }

export default Header;  
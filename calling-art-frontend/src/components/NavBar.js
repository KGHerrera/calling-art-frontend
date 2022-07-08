import '../styles/NavBar.css'

export default function NavBar( props ){
    return (
        <div className="navbar-conteiner">
            <div className="logo-conteiner">
                <div className='circle-logo'></div>
                <p className="image-logo">L O G O</p>
            </div>
            <div className="search-conteiner">
                <form className="search-form">
                    <input type="text" className='search-textfield' placeholder='search'/>
                    <button className='search-button'></button>
                </form>
            </div>
            <div className="start-conteiner">
                <a className="start-button" href='#'>Login</a>
                <a className="start-button" href='#'>Sing up</a>
            </div>
        </div>
    );
}
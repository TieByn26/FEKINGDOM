import {Link} from "react-router-dom";

const logo = "https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/logoJPG.png?alt=media&token=4e22b021-5b23-481e-90ef-e22199bb9df5";
export function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark" id="mainNav" style={{ background: 'var(--bs-navbar-brand-color)' }}>
                <div className="container">
                    <a className="navbar-brand" href="#page-top" style={{ fontFamily: "'Kaushan Script', serif", fontSize: '28px' }}>
                        <img alt={"Logo"} className="rounded-circle" src={logo} width="60" height="60" style={{ transform: 'translate(-9px) scale(2.34)', margin: '5px 30px 0 30px' }} />
                    </a>
                    <button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto text-uppercase">
                            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio">Check Available</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team">Location</a></li>
                            <li className="nav-item"><a className="nav-link" href="#invester">invester</a></li>
                            <li className="nav-item"><Link className="nav-link" to={"/login"}>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
import "../../assets/css/btnHotel.css";

const exRoom = "https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/ex-room.jpg?alt=media&token=e832ebf7-d112-4de3-a5b4-a2a54535be6c";
const dexRoom = "https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/dex-room.jpg?alt=media&token=a169c143-a513-48d4-99cc-40d165114d88";
const villa = "https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/villa.jpg?alt=media&token=884beb65-c03b-40f0-ae02-c29e7b354361";
const HotelHeader ="https://media.discordapp.net/attachments/1090895809098289185/1313512293610291270/01_MSFT_DM_Landscape_Desktop_DM_4K.png?ex=675b9be6&is=675a4a66&hm=4123468c7c0840efc40c2a177489e9532aa6ef5d6d313e20aeec1d5a7891d029&=&format=webp&quality=lossless&width=1015&height=571";
export function HeaderHome() {
    return (<>
            <header className="masthead" style={{
                background: "url("+ HotelHeader+ ") center / cover",
                filter: "contrast(153%)"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="intro-text">
                                <span style={{
                                    color: "var(--bs-light)",
                                    fontSize: "41px",
                                    fontFamily: "Montserrat, sans-serif"
                                }}>Welcome To RYUKINGDOM</span>
                                <div className="intro-lead-in" style={{display: "flex"}}>
                                    <span style={{
                                        color: "var(--bs-light)",
                                        fontSize: "41px",
                                        fontFamily: "Montserrat, sans-serif"
                                    }}></span>
                                </div>

                                <div className="intro-heading text-uppercase">
                                    <span className="text-start" style={{textAlign: "left", display: "flex"}}>The best luxury hotel In&nbsp;</span>
                                    <span style={{
                                        color: "var(--bs-yellow)",
                                        display: "flex",
                                        borderTopWidth: "26px",
                                        borderTopColor: "rgb(255,255,255)",
                                        fontWeight: "bold",
                                        background: "var(--bs-form-invalid-border-color)",
                                        width: "382px"
                                    }}>Vietnam</span>
                                </div>
                                <div className="intro-lead-in" style={{margin: "100px 0 0px 0"}}>
                                    <a className="btn btn-primary btn-xl text-uppercase" role="button" href="#services"
                                       style={{background: "#f3bc00"}}>Tell me more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="carousel slide " style={{margin : "30% 0 0 0"}} data-bs-ride="false" id="carousel-1">
                                <div className="carousel-inner">
                                    <div className="carousel-item active"><img className="w-100 d-block" src={exRoom}
                                                                               alt="Slid"/></div>
                                    <div className="carousel-item"><img className="w-100 d-block" src={dexRoom}
                                                                        alt="Slide"/></div>
                                    <div className="carousel-item"><img className="w-100 d-block" src={villa}
                                                                        alt="Slide"/></div>
                                </div>
                                <div><a className="carousel-control-prev" href="#carousel-1" role="button"
                                        data-bs-slide="prev"><span className="carousel-control-prev-icon"></span>
                                    <span className="visually-hidden">Previous</span></a>
                                    <a className="carousel-control-next"
                                                                                      href="#carousel-1" role="button"
                                                                                      data-bs-slide="next"><span
                                    className="carousel-control-next-icon"></span><span
                                    className="visually-hidden">Next</span></a></div>
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0"
                                            className="active"></button>
                                    <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button>
                                </div>
                            </div>
                            <div className="intro-text" style={{padding: 0, margin: "0 0 300px 0"}}></div>
                        </div>
                    </div>
                </div>
            </header>
        </>);
}
import "../../assets/css/footer.css";
export function Footer() {
    return (<>
        <footer style={{backgroundImage:"url('https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/map-image.png?alt=media&token=e6b48205-8297-4a6a-bf05-12928a94494f')"}}>
            <div className="container text-md-left">
                <div className="row text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase text-warning mb-4 font-weight-bold">RYUKingdom company</h5>
                        <p>is a dynamic and innovative company focused on delivering exceptional experiences in the hospitality and real estate industry. Specializing in high-end accommodations, RYUKingdom offers a diverse range of luxury stays, including villas, suites, and executive rooms, catering to both leisure and business travelers..</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase text-warning mb-4 font-weight-bold">About</h5>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Career</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Policies</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Privacy Policy</a></p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase text-warning mb-4 font-weight-bold">Contract</h5>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Contact Us</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Return & Refund</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Payment</a></p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase text-warning mb-4 font-weight-bold">Contact</h5>
                        <p><i className="fas fa-home mr-3"></i> Hai Chau , Danang</p>
                        <p><i className="fas fa-envelope mr-3"></i> Long@RyuKingdom.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 84 908802123</p>
                        <p><i className="fas fa-phone mr-3"></i> + 84 908802123</p>
                    </div>
                </div>
                <hr/>
                <div className="mb-4">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p className="text-md-left">© 2024 RyuKingDom. All rights reserved.</p>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a href={"/alo"}
                                                                        className="btn-floating btn-sm text-light"
                                                                        style={{fontSize:"23px"}}><i
                                        className="fab fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href={"/alo"}
                                                                        className="btn-floating btn-sm text-light"
                                                                        style={{fontSize:"23px"}}><i
                                        className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href={"/alo"}
                                                                        className="btn-floating btn-sm text-light"
                                                                        style={{fontSize:"23px"}}><i
                                        className="fab fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a href={"/alo"} className="btn-floating btn-sm text-light"
                                                                        style={{fontSize:"23px"}}><i
                                        className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
        );
        }
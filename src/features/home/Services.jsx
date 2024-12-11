export function Services() {
    return (
        <>
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="text-uppercase section-heading">Our Services</h2>
                            <h3 className="text-muted section-subheading">Your satisfaction is our priority</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                                <i className="fa fa-music fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="section-heading">Live Music</h4>
                            <p className="text-muted">Experience live performances in our versatile music venues, perfect for any event size.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                                <i className="fa fa-glass fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="section-heading">Pub & Party</h4>
                            <p className="text-muted">Enjoy unforgettable nights at our pub and party venues, ideal for any celebration.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-warning"></i>
                                <i className="fa fa-bullhorn fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="section-heading">Presentations</h4>
                            <p className="text-muted">Host professional events in our fully equipped conference rooms, perfect for meetings and workshops.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
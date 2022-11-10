import Login from "components/Login";


export default function Jumbo() {
    return (
        <div className="round-border height-maker">
            <div className="jumbotron diagonal-box" style={{background: 'white', height:'100%'}}>
                <div className={"content width shift"}>
                    <section className={"center"}>
                        <div className="">
                            <div className={"divideRight"}>
                                <h1 className={"Slogan"} style={{ float: 'right'}}><strong>THE ONE AND ONLY TASK INFRASTRUCTURE</strong></h1>
                                <h4>The most reliable and innovative scheduling job/task service done by http in any programming language </h4>
                                <button className="glow-on-hover" type="button">GO TO DOCS &gt;</button>
                            </div>
                            <div className={"divideLeft"}>
                                <img
                                    className="img"
                                    src="./homeLaptop.png"
                                    alt="Graphs on a Laptop"
                                />
                                <img
                                    className="img2"
                                    src="./phone.png"
                                    alt="Phone"
                                />
                            </div>

                        </div>
                    </section>



                    <section id={"section2"} className={"section2"}>
                        <div className="mainTitle">
                            <div className={"divideRight60"}>
                                <h1>INSERT IMAGE HERE</h1>
                            </div>
                            <div className={"divideLeft40"}>
                                <h1 >Schedule A Task</h1>
                                <p className={"colorWhite"}>We allow asyncronous task to be scheduled and run over HTTP without the need to configure or run always-on worker nodes or use expensive queue cloud proprietry queue solutions for time-delayed task</p>
                            </div>
                        </div>
                    </section>

                    <section className={"section3"}>
                        <div className="absolute"></div>
                        <div className="innerabsolute"></div>
                        <div className="mainTitle colorBlack">
                            <div className={"divideRight30"}>
                                <h1>Designed for Developers</h1>
                                <h2>SIMPLE HTTP API</h2>
                                <p>You or your team can easily integrate by simply creating an endpoint on your server to recieve our HTTP callback</p>
                                <button className="glow-on-hover" type="button">Read more here &gt;</button>
                            </div>
                            <div className={"divideLeft70"}>
                                <img
                                    className="diagram"
                                    src="./diagram.png"
                                    alt="Graphs on a Laptop"
                                />
                            </div>
                        </div>
                        <div className="absolute1"></div>
                        <div className="innerabsolute1"></div>
                    </section>

                    <section className={"section4"}>
                        <div className="mainTitle">
                            <div className={"centerText colorWhite" }>
                                <h1 className={"colorWhite"}> Pricing</h1>
                                <p>Pay as you go. With EchoMQ you only pay for the resources you use, for as long as you use them, and without the long term contracts or licencing agreements. There are no upfront costs or commitments. No credit card required to try.</p>
                            </div>
                            <div id={"priceCards"}>
                                <div className="card widthForCards" >
                                    <div className="card-body">
                                        <h5 className="card-title">Free Tier</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">X Tasks per month</h6>
                                        <p className="card-text">Some type of pricing cards</p>
                                        <a href="#" className="card-link">Select This Plan &gt;</a>
                                    </div>
                                </div>
                                <div className="card widthForCards" >
                                    <div className="card-body">
                                        <h5 className="card-title">Premium Tier (Most Popular)</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">X Tasks per month</h6>
                                        <p className="card-text">Some type of pricing cards</p>
                                        <a href="#" className="card-link">Select This Plan &gt;</a>
                                    </div>
                                </div>
                                <div className="card widthForCards" >
                                    <div className="card-body">
                                        <h5 className="card-title">Deluxe Tier</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">X Tasks per month</h6>
                                        <p className="card-text">Some type of pricing cards</p>
                                        <a href="#" className="card-link">Select This Plan &gt;</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className={"section5 topMargin"}>
                        {/*<div id={"priceCards"}>*/}
                        {/*    <div className=" widthForCards" >*/}
                        {/*        <Login/>*/}
                        {/*    </div>*/}
                        {/*    <div className="widthForCards" >*/}
                        {/*        <button className="glow-on-hover" type="button">Contact Us &gt;</button>*/}

                        {/*    </div>*/}
                        {/*</div>*/}
                    </section>
                </div>
            </div>

            <section>
                <div>Hellow</div>
            </section>
        </div>
    );
}

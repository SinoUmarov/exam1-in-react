import "./Main.css"
import vector from "../../assets/Vector (1).png"
import vector1 from "../../assets/calendar.png"
import vector2 from '../../assets/person 1.png'
import img17 from "../../assets/Image (17).png"
import img18 from "../../assets/Image (10).png"
import img12 from "../../assets/Image (12).png"
import grp1 from "../../assets/Group 78.png"
import grp2 from "../../assets/Group 79 (1).png"
import grp3 from "../../assets/Group 80.png"
import grp4 from "../../assets/Group 81.png"
import restangle from "../../assets/Rectangle 847.png"
import logotip from "../../assets/Others company.png"
import img11 from "../..//assets/Image (11).png"
import sur from "../../assets/Rectangle 846.png"
import img1777 from "../../assets/Image (18).png"
import img19 from "..//../assets/Image (19).png"
import okhirimg from "../../assets/Image (13).png"
import log from "../../assets/logo.png"

export default function Main() {
    return <>
        <section className="mainsection1">
            <aside>
                <h2 className="finds">Find Your Best Hotel for Deals</h2>
                <p className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </aside>
            <aside className="boxshadow">
                <div>
                    <div className="vectorsdiv">
                        <div className="vector1">
                            <img src={vector1} alt="" />
                            <p>Jun 10 - 14</p>
                        </div>
                        <div className="vector1">
                            <img src={vector2} alt="" />
                            <p>2 Guests</p>
                        </div>
                    </div>

                </div>

                <div className="divalign">
                    <input type="text" placeholder="Unites States" className="input1" />
                    <button className="mainbutton1"><img src={vector} className="vector" alt="" /></button>
                </div>
            </aside>
        </section>
        <section className="sect2">
            <aside>
                <img src={img17} className="img17" alt="" />
            </aside>
            <aside>
                <img src={img18} className="img18" alt="" />
                <img src={img12} className="img12" alt="" />
            </aside>
        </section>
        <section>
            <div className="servicec">
                <div>
                    <h2 className="faciel">Facilities & Service</h2>
                    <p className="ipsum">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                </div>
                <div>
                    <p className="view">View All</p>
                </div>
            </div>
            <div className="allart">
                <article>
                    <img src={grp1} alt="" />
                    <div>
                        <h2>Private Workspace</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    </div>
                </article>
                <article>
                    <img src={grp2} alt="" />
                    <div>
                        <h2>Private Workspace</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    </div>
                </article>
                <article>
                    <img src={grp3} alt="" />
                    <div>
                        <h2>Private Workspace</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    </div>
                </article>
                <article>
                    <img src={grp4} alt="" />
                    <div>
                        <h2>Private Workspace</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    </div>
                </article>
            </div>
        </section>



        <section className="luxurydom">
            <aside>
                <img src={restangle} className="restangles" alt="" />
            </aside>
            <aside>
                <div>
                    <h2 className="finest">Finest Luxury Hotels
                        & Resort</h2>
                    <p className="simply">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="happyarticle">
                    <article>
                        <h2>120K+</h2>
                        <p>Website User</p>
                    </article>
                    <article>
                        <h2>110K+</h2>
                        <p>Happy Clients</p>
                    </article>
                    <article>
                        <h2>20K+</h2>
                        <p>Active Hotels</p>
                    </article>
                    <article>
                        <h2>8Y+</h2>
                        <p>company Year</p>
                    </article>
                </div>
                <button className="explorebutton">Explore More</button>
            </aside>
        </section>
        <section className="logotip">
            <img src={logotip} alt="" />
        </section>
        <section className="sect56">
            <aside>
                <img src={img11} alt="" />
            </aside>
            <aside>
                <div className="spalniydiv">
                    <div >
                        <img src={sur} className="sur1" alt="" />
                        <p>Nazmul Nabeel</p>
                    </div>
                    <p className="dummy">“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ”</p>
                </div>
            </aside>
        </section>
        <section>
            <div className="hotelsquality">
                <aside>
                    <h2 className="wwquality">Best Quality Hotels</h2>
                    <p className="printing">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="dummyarticleall">
                        <article>
                            <p>1star</p>
                        </article>
                        <article>
                            <p>2star</p>
                        </article>
                        <article>
                            <p>3star</p>
                        </article>
                        <article>
                            <p>4star</p>
                        </article>
                        <article>
                            <p>5star</p>
                        </article>
                    </div>
                </aside>
                <aside>
                    <p className="allwiewdiv">View All</p>
                </aside>
            </div>

            <div className="swimmingpool">
                <article>
                    <img src={img19} alt="" />

                    <h2>Swimming pool and beach of luxury...</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="detailsdiv">
                        <h2>$250 /NIGHT</h2>
                        <button>Details</button>
                    </div>
                </article>
                <article>
                    <img src={img12} alt="" />

                    <h2>Swimming pool and beach of luxury...</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div  className="detailsdiv">
                        <h2>$250 /NIGHT</h2>
                        <button>Details</button>
                    </div>
                </article>
                <article>
                    <img src={img1777} alt="" />

                    <h2>Swimming pool and beach of luxury...</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div  className="detailsdiv">
                        <h2>$250 /NIGHT</h2>
                        <button>Details</button>
                    </div>
                </article>
            </div>
        </section>
        <section className="mambokokir">
            <aside>
                <div>
                    <h2>Subscribe for our mailing list to get latest updates and offers</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    <div>
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </aside>
            <aside>
                <img src={okhirimg} alt="" />
            </aside>
        </section>
      
    <section>
            <div className="typesclod">
                <article>
                    <img src={log} alt="" />
                    <p className="practiceidea">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </article>
                <article>
                    <h2>Home</h2>
                    <p>Booking</p>
                    <p>Facilities</p>
                    <p>Location</p>
                    <p>Contact</p>
                </article>
                <article>
                    <h2>Help</h2>
                    <p>About us</p>
                    <p>Help center</p>
                    <p>Privacy policy</p>
                    <p>FAQs</p>
                </article>
                <article>
                    <h2>Get the App</h2>
                    <p>ios App</p>
                    <p>Android app</p>
                    
                </article>
            </div>
    </section>
    </>
}
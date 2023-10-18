/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Home() {
  return (
    <div className='website'>
    <div>

      {/* Header */}
    <div className="cushead">
      <div className="firstpage">
        <div className="navbar d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2" style={{ color: 'azure' }}>
          <div className="logo col-md-3">
            <h3>Travel</h3>
          </div>
          <ul className="navigator nav  justify-content-center">
            <li><a href="#" className="nav-link px-2 link-light">Home</a></li>
            <li><a href="#" className="nav-link px-2 link-light">About</a></li>
            <li className="dropdown">
              <a href="#" className="dropbtn nav-link px-2 link-light">Services</a>
              <div className="dropdown-content">
                <a href="#">Honeymoon Packages</a>
                <a href="#">Tours Packages</a>
                <a href="#">Musical Events</a>
                <a href="#">Build Package</a>
              </div>
            </li>
            <li><a href="#" className="nav-link px-2 link-light">Upcoming Packages</a></li>
          </ul>
          <div className="navbut col text-end">
            <button style={{ backgroundColor: '#DF6951', color: 'azure' }} type="button" className="btn">Get in Touch</button>
          </div>
        </div>
        {/* End of Header */}
        <div className="slogans">
          <div style={{ width: '70%', float: 'left', margin: '10px' }}> No matter where you’re going to, we’ll take you there </div>
        </div>
        {/* Search Bar */}
        <div className="searchbar">
          <div className="where-to">Where to? </div>
          <div style={{ width: '60px', transform: 'rotate(90deg)' }}><hr /></div>
          <div className="travel-type">Travel Type </div>
          <div style={{ width: '60px', transform: 'rotate(90deg)' }}><hr /></div>
          <div className="duration">Duration </div>
          <div style={{ width: '60px', transform: 'rotate(90deg)' }}><hr /></div>
          <button className="sub ">Submit</button>
        </div>
        {/* End of Search Bar */}
        {/* Small Quotes */}
        <div style={{ display: 'flex' }} className="clients">
          <div className="circles">
            <img className="ellipse-31" src="/img/main/circles/Ellipse 31.png" alt="" />
            <img className="ellipse-32" src="/img/main/circles/Ellipse 32.png" alt="" />
            <img className="ellipse-33" src="/img/main/circles/Ellipse 33.png" alt="" />
            <img className="ellipse-34" src="/img/main/circles/Ellipse 34.png" alt="" />
            <img className="ellipse-35" src="/img/main/circles/Ellipse 35.png" alt="" />
            <img className="ellipse-36" src="/img/main/circles/Ellipse 36.png" alt="" />
          </div>
          <div className="ellipse-37"></div>
          <div className="blank">+</div>
          <div style={{ paddingLeft: '180px' }} className="quote">
            2,500 people booked Tomorrowland Event in the last 24 hours
          </div>
        </div>
      </div>
         {/* End of Small Quotes  */}
      {/* Brands */}
      <div className="hero1" style={{ marginTop:'250px', display: 'flex', backgroundColor: '#f0efef', justifyContent: 'space-around', padding: '50px' }}>
        <div className="brandsimg">
          <img style={{ filter: 'grayscale()' }} src="/img/brands/airbnb.png" alt="" />
        </div>
        <div className="brandsimg">
          <img className="trivago" style={{ filter: 'grayscale()' }} src="/img/brands/trivago.png" alt="" />
        </div>
        <div className="brandsimg">
          <img style={{ filter: 'grayscale()' }} src="/img/brands/emirates.png" alt="" />
        </div>
        <div className="brandsimg">
          <img className="turkish" style={{ filter: 'grayscale()' }} src="/img/brands/turkish airlines.png" alt="" />
        </div>
        <div className="brandsimg">
          <img style={{ filter: 'grayscale()' }} src="/img/brands/swiss.png" alt="" />
        </div>
      </div>
    </div>
      {/* End of Brands */}
      <div className="category">
        <div style={{ color: '#DF6951', fontSize: '18px', fontWeight: 600 }}>CATEGORY</div>
        <div style={{ marginTop: '10px' }}><h3> Offer Best Services</h3></div>
        <div style={{ display: 'flex', gap: '60px', marginTop: '40px' }} className="fourcards">
          <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: '20px', marginLeft: '10px' }} className="travelcards">
            <div><img style={{ margin: '10px 0', height: '66px', width: '66px' }} src="/img/categories/tour-guide 1.png" alt="" /></div>
            <div><h5>Guided Tours</h5><span>put some content related to this topic</span></div>
          </div>
          <img className="orange" style={{ position: 'absolute', marginTop: '100px', marginLeft: '310px' }} src="/img/categories/Rectangle 157.svg" alt="" />
          <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: '20px', marginLeft: '10px' }} className="travelcards">
            <div><img style={{ margin: '14px 0', height: '66px', width: '66px' }} src="/img/categories/travelling 1.png" alt="" /></div>
            <div><h5>Best Flights Options</h5><span>put some content related to this topic</span></div>
          </div>
          <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: '20px', marginLeft: '10px' }} className="travelcards">
            <div><img style={{ margin: '14px 0', height: '66px', width: '66px' }} src="/img/categories/hands 1.png" alt="" /></div>
            <div><h5>Religious Tours</h5><span>put some content related to this topic</span></div>
          </div>
          <div style={{ position: 'relative', backgroundColor: '#ffffff', borderRadius: '20px', marginLeft: '10px' }} className="travelcards">
            <div><img style={{ margin: '10px 0', height: '66px', width: '66px' }} src="/img/categories/medical-team 1.png" alt="" /></div>
            <div><h5>Medical Insurance</h5><span>put some content related to this topic</span></div>
          </div>
        </div>
      </div>
      
     <div>
     <div className="honeymoon">
       <div className="leftside">
         <div><img className="couples" src="/img/honeymoon/couples.png" alt="some img" /></div>
         <div>
           <img className="kiss" src="/img/honeymoon/Ellipse 1.png" alt="some img" />
           <img className="flora" src="/img/honeymoon/Ellipse 3.png" alt="some img" />
         </div>
         <div><img className="hug" src="/img/honeymoon/Ellipse 2.png" alt="some img" /></div>
         <div className="texthm">HoneymoonPackages</div>
       </div>

       <div className="rightside">
         <div className="headhoney"><h5>HONEYMOON SPECIALS</h5></div>
         <div className="honey-content"><h1 style={{ color: '#181e4b', fontWeight: 'bolder' }}>Our Romantic Tropical Destinations</h1></div>
         <div className="honey-context">Honeymoons stem from a tradition dating back to the 5th century where newlyweds would drink mead, a honey-based alcohol, after their first "moon" together as a married couple.</div>
         <button className="honeybtn"><span style={{ fontSize: '16px' }}>View Packages</span></button>
       </div>
     </div>
     {/* End of honeymoon specials */}
     <div className="fasteasy">
     {/* Fast and Easy */}
       <div className="fastleft">
         <div className="headfast"><h5>FAST & EASY</h5></div>
         <div className="fast-content"><h1 style={{ color: '#181e4b', fontWeight: 'bolder' }}>Get Your Favorite Resort Bookings</h1></div>
         <div className="fastcontent">
           <div className="fastimg">
             <img src="/img/fasteasy/Group 7.png" alt="" />
             <b style={{ marginLeft: '10px' }}>Choose Destination</b>
             <p style={{ marginLeft: '55px' }}>Destination can describe where you are going, like a traveler whose destination is Paris, or a place that is known for a particular purpose</p>
           </div>
           <div className="fastimg">
             <img src="/img/fasteasy/Group 12.png" alt="" />
             <b style={{ marginLeft: '10px' }}>Check Availability</b>
             <p style={{ marginLeft: '55px' }}>the quality or state of being available. trying to improve the availability of affordable housing. </p>
           </div>
           <div className="fastimg">
             <img src="/img/fasteasy/Group 11.png" alt="" />
             <b style={{ marginLeft: '10px' }}>Let's Go</b>
             <p style={{ marginLeft: '55px' }}>This let's go may also be intended to be motivational, used, for example, if a boss is attempting to get his employees to work harder or faster.</p>
           </div>
         </div>
       </div>
       <div className="fastright">
         <div className="aeroplane"><img align="right" src="/img/fasteasy/aeroplane.png" alt="" /></div>
         <div className="triprome">
           <img className="beach" style={{ marginLeft: '20px' }} src="/img/fasteasy/beach.png" alt="" />
           <span style={{ marginLeft: '20px', color: '#afb0b6' }}>OnGoing</span>
           <h5>
             <b style={{ marginLeft: '80px', marginBottom: '10px', marginRight: '20px' }}>Trip to Rome</b>
           </h5>
         </div>
         <div style={{ width: 'fit-content' }} className="fastcards">
           <div><img style={{ margin: '14px 10px', height: '161px', width: '321px' }} src="/img/fasteasy/city.png" alt="" /></div>
           <div style={{ marginLeft: '20px' }}>
             <h5>Trip to Hawaii</h5>
             <span style={{ color: '#afb0b6' }}>19-29 June | By Jr Martir</span>
           </div>
           <div style={{ display: 'flex', marginLeft: '20px', marginTop: '10px' }}>
             <img className="leaf" src="/img/fasteasy/leaf 1.png" />
             <img className="map" src="/img/fasteasy/map 1.png" />
             <img className="send" src="/img/fasteasy/send 2.png" />
           </div>
           <div style={{ marginTop: '30px', marginLeft: '20px', marginBottom: '30px' }}>
             <img src="/img/fasteasy/building 1.png" alt="" />
             <span style={{ marginLeft: '5px', color: '#afb0b6' }}>60 Peoples were Interested</span>
             <img style={{ marginLeft: '20px' }} src="/img/fasteasy/heart (6) 1.png" alt="" />
           </div>
         </div>
       </div>
     </div>
     {/* End of fast and easy */}
     {/* Liberty Card */}
     <div className="libertybar">
       <div className="libertycontent">Let’s make your <br />next holiday amazing</div>
       <img className="liberty" src="/img/liberty/liberty statue.png" alt="" />
     </div>
     {/* End of Liberty Card */}
     {/* Promotion */}
     <div className="promotion">
       <div className="promoleftside">
         <div className="headpromo"><h5>PROMOTION</h5></div>
         <div className="promotion-content">
           <h1 style={{ color: '#181e4b', fontWeight: 'bolder' }}>We Provide You Best Europe Sightseeing Tours</h1>
         </div>
         <div className="promotion-context">
           Promotion can mean the act of raising someone to a higher or more important position or rank. It can also mean the act of furthering the growth or development of something. For example, a company might promote a new phone to the public.
         </div>
         <button className="promobtn"><span style={{ fontSize: '16px' }}>View Packages</span></button>
         <div className="promobox">
           <img style={{ borderRadius: '10px', height: '170px', width: '170px', position: 'relative' }} src="/img/promotion/clock.png" alt="" />
           <img style={{ borderRadius: '10px', height: '170px', width: '170px' }} src="/img/promotion/lake.png" alt="" />
         </div>
       </div>
       <div className="promorightside">
         <div><img className="eiffel" src="/img/promotion/eiffel.png" alt="some img" /></div>
         <img className="fort" src="/img/promotion/fort.png" alt="" />
         <img className="rome" src="/img/promotion/rome.png" alt="" />
         <div className="textpromo">BreathTakingViews</div>
       </div>
     </div>
     {/* End of Promotion */}
   </div>
   
   </div>
    <div>
    <div className="explore">
      <div className="exploreleftside">
        <div className="exploreleftcontent">
          <p className="promobadge" style={{ fontSize: '15px', textAlign: 'center' }}>PROMOTION</p>
          <span>Explore Nature</span> <br />
          <button className="expbtn"><span style={{ fontSize: '16px' }}>View Packages</span></button>
        </div>
        <img className="nature" src="/img/explore/nature.png" alt="" />
      </div>

      <div className="explorerightside">
        <div className="explorerightcontent">
          <p className="promobadge" style={{ fontSize: '15px', textAlign: 'center' }}>PROMOTION</p>
          <span>Explore Cities</span><br />
          <button className="expbtn"><span style={{ fontSize: '16px' }}>View Packages</span></button>
        </div>
        <img className="city" src="/img/explore/city.png" alt="" />
      </div>
    </div>
    {/* End of explore */}
    {/* Trendy */}
    <div className="trendy">
      <span style={{ color: '#DF6951', fontWeight: 500 }}>TRENDY</span>
      <h2 style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 700 }}>Our Trending Tour <br /> Packages </h2>

      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {/* Card 1 */}
        <div className="card" style={{ width: '18rem' }}>
          <img src="/img/packages/swissimg.png" className="card-img-top" alt="." />
          <div className="swiss card-img-overlay"><img style={{ height: '76px', width: '76.4px', borderColor: 'azure' }} src="/img/packages/swiss.svg" alt="" /></div>
          <div className="card-body">
            <span className="line1"><img style={{ width: '15px' }} src="/img/packages/uil_calender.svg" alt="" /> 8 Days</span> <img style={{ width: '15px', marginLeft: '25px' }} src="/img/packages/ooui_user-avatar-outline.svg" alt="" /> <span>25 People Going</span>
            <h5 style={{ display: 'flex' }} className="card-title ">Switzerland  <div className="stars"><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /></div></h5>
            <span className="card-location  text-secondary"><img style={{ width: '15px' }} src="/img/packages/ep_location.svg" alt="" /> Europe</span>
            <br />
            <h5 style={{ color: '#DF6951' }}> 1,000 $ <span style={{ fontSize: '15px' }} className="text-decoration-line-through text-secondary"> 1,200 $</span></h5>
            <p className="card-text">Switzerland is a mountain. </p>
            <a style={{ backgroundColor: '#DF6951' }} href="#" className="btn btn-danger">Explore Now</a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card" style={{ width: '18rem' }}>
          <img src="/img/packages/amazonimg.png" className="card-img-top" alt="." />
          <div className="amazon card-img-overlay"><img style={{ height: '76px', width: '76.4px', borderColor: 'azure' }} src="/img/packages/amazon.svg" alt="" /></div>
          <div className="card-body">
            <span className="line1"><img style={{ width: '15px' }} src="/img/packages/uil_calender.svg" alt="" /> 8 Days </span><img style={{ width: '15px', marginLeft: '25px' }} src="/img/packages/ooui_user-avatar-outline.svg" alt="" /> <span>30 People Going</span>
            <h5 style={{ display: 'flex' }} className="card-title ">BRAZIL <div className="stars"><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /></div></h5>
            <span className="card-location  text-secondary"><img style={{ width: '15px' }} src="/img/packages/ep_location.svg" alt="" /> Brazil</span>
            <br />
            <h5 style={{ color: '#DF6951' }}> 1,120 $ <span style={{ fontSize: '15px' }} className="text-decoration-line-through text-secondary"> 1,200 $</span></h5>
            <p className="card-text">The Amazon rainforest </p>
            <a style={{ backgroundColor: '#DF6951' }} href="#" className="btn btn-danger">Explore Now</a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card" style={{ width: '18rem' }}>
          <img src="/img/packages/gizaimg.png" className="card-img-top" alt="." />
          <div className="giza card-img-overlay"><img style={{ height: '76px', width: '76.4px', borderColor: 'azure' }} src="/img/packages/giza.svg" alt="" /></div>
          <div className="card-body">
            <span className="line1"><img style={{ width: '15px' }} src="/img/packages/uil_calender.svg" alt="" /> 8 Days </span><img style={{ width: '15px', marginLeft: '25px' }} src="/img/packages/ooui_user-avatar-outline.svg" alt="" /> <span>155 People Going</span>
            <h5 style={{ display: 'flex' }} className="card-title ">GIZA  <div className="stars"><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /><img style={{ width: '10px' }} src="/img/packages/bi_star-fill.svg" alt="" /></div></h5>
            <span className="card-location  text-secondary"><img style={{ width: '15px' }} src="/img/packages/ep_location.svg" alt="" /> Egypt</span>
            <br />
            <h5 style={{ color: '#DF6951' }}> 1,000 $ <span style={{ fontSize: '15px' }} className="text-decoration-line-through text-secondary"> 1,200 $</span></h5>
            <p className="card-text">about the egypt  </p>
            <a style={{ backgroundColor: '#DF6951' }} href="#" className="btn btn-danger">Explore Now</a>
          </div>
        </div>
      </div>
    </div>
    {/* End of trendy */}
    {/* About Us */}
    <div className="aboutus">
      <div className="headabout"><h5>PROMOTION</h5></div>
      <div className="about-content"><h1 style={{ color: '#181e4b', fontWeight: 'bolder', textAlign: 'center' }}>See What Our Clients Say <br /> About Us</h1></div>
      <img className="client" src="/img/about us/client.svg" alt="" />
      <p className="aboutpara">An About Us page is a website page that <br /> tells the story of a business, its values, and <br /> its achievements. It's often the first thing <br /> a customer looks up <br /> <b> Christine Beckam - Designer </b> </p>
      <div className="aboutrect"></div>
      <img className="navleft" src="/img/about us/navigation (1).svg" alt="" />
      <img className="navright" src="/img/about us/navigation.svg" alt="" />
      <img className="aboutusback" src="/img/about us/aboutus back.png" alt="" />
    </div>
    {/* End of about us */}
    {/* Footer */}
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h3 style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 900 }}>Travel</h3>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Travel helps companies manage payments easily.</a></li>
            </ul>
            <ul style={{ gap: '15px', marginLeft: '-30px' }} className="d-flex logofoot">
              <a href=""><img src="/img/footer/052-linkedin.svg" alt="" /></a>
              <a href=""><img src="/img/footer/025-messenger.svg" alt="" /></a>
              <a href=""><img src="/img/footer/096-twitter.svg" alt="" /></a>
              <a href=""><img src="/img/footer/097-twoo.svg" alt="" /></a>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Destinations</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Maldives</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Los Angeles</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Las Vegas</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Toronto</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Join Our Newsletter</h5>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden"> your Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder=" Your Email address" />
                <button style={{ backgroundColor: '#DF6951', borderColor: '#DF6951' }} className="btn btn-primary" type="button">Subscribe</button>
              </div>
              <p>*  Will send you weekly updates for your <br /> better
tour packages.</p>
            </form>
          </div>
        </div>

        <div className="  d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footcopy">
          <p style={{ marginLeft: '500px' }}>Copyright @ Xpro 2022. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    {/* End of footer */}
  </div>
  </div>




      )
}

export default Home

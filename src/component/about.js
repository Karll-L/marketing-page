const About = () => {
    const src="https://startp-react.envytheme.com/_next/static/images/about4-45b7f99f4ccee5234ede3ff8e72a3230.png";

    return ( 

        <div className="container-fluid">
            <div className="container">
                <div className="row about">
                <div className="col-md-6">
                <img src={src} alt="laptop" />
                </div>
                <div className="col-md-6">
                <div className="aboutus">
                 <h6>About Us</h6><br/>
                 <h2>Engaging New Audiences Through Smart Approach</h2>
                 <div class="movingbar"></div>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Nullam quis ante.
                      Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                      Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
                      Donec vitae sapien ut libero venenatis faucibus tempus.</p>
                    <a className="btn btn-success started"style={{color:"white"}} >Discover More</a>
                 </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;
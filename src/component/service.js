const { default: Solutions } = require("./solutions")

const Service = () => {
    return ( 
        <div className="container-fluid services">
        <div className="container">
        <div className="feature">
         <h6>Our Solutions</h6><br/>
        <h2>Our Services</h2>
        <div className="movingbar"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="addp">
        <div className="row serve">
            <div className="col-md-4">
            <Solutions 
            title="IT Professionals"
            description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
            src="https://startp-react.envytheme.com/_next/static/images/service-image1-5d235d98c1ca6c95c41163f65dbfe47f.png"
            />
            </div>
            <div className="col-md-4">
            <Solutions 
            title="Software Engineer"
            description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
            src="https://startp-react.envytheme.com/_next/static/images/service-image3-46c32278c53f797995a45a180f73f583.png"
            />
            </div>
            <div className="col-md-4">
            <Solutions 
            title="Health and Manufacturing"
            description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
            src="https://startp-react.envytheme.com/_next/static/images/service-image3-46c32278c53f797995a45a180f73f583.png"
            />
            </div>
        </div>
        <div className="row serve">
            <div className="col-md-4">
            <Solutions 
            title="IT Professionals"
            description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
            src="https://startp-react.envytheme.com/_next/static/images/service-image1-5d235d98c1ca6c95c41163f65dbfe47f.png"
            />
            </div>
            <div className="col-md-4">
            <Solutions 
            title="Software Engineer"
            description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
            src="https://startp-react.envytheme.com/_next/static/images/service-image3-46c32278c53f797995a45a180f73f583.png"
            />
            </div>
            <div className="col-md-4">
            <Solutions 
            title="Health and Manufacturing"
            description="Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
            src="https://startp-react.envytheme.com/_next/static/images/service-image3-46c32278c53f797995a45a180f73f583.png"
            />
            </div>
            </div>
        </div>
        </div>
        </div>
     );
}
 
export default Service;
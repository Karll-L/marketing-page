import { Button, Container, Jumbotron, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style.css";


const Navigation = () => {

        const  brandImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAAeCAMAAACSVFkwAAAAhFBMVEUAAABEzm/GeeP///9Ezm/GeeMOMUwOMUwOMUwOMUwOMUxEzm9Ezm9Ezm9Ezm8OMUwOMUwOMUxEzm/GeeNEzm/GeeMOMUxEzm/GeeNEzm/GeeMOMUwOMUwOMUwOMUxEzm9Ezm8OMUxEzm/GeeNEzm/GeeMOMUxEzm9Ezm8OMUxEzm/GeeNYS/vTAAAAKXRSTlMAAAAABgYQIDBAUFRVVldgcICIiImJj5CQkZGfr7/P1Nbf7e3u7u/5+pUhFtsAAAH9SURBVEjH1dZtU4MwDABgKq6lqGP1BXVdOtmUGf3//880UCgKJ3eyD+a8kyvrY03SdknaxsVqe3zbri7SRSPp+KdPiruz8UfPH8/Gf3L8M1400fMijCzCXz4fXp8vYz6MLMI/flDcxnwYWYQ/eOwQ82GkD2lrxNpKeswAsmQqCgBfS40+nNXEf3DEfBjpdYcIFU2QPFVP8gax5ymKWXyJlUrTwn885pWWsZ3FvJ9mEdUcHtDwL9ikhlcFpOWVf1D0zrOQVZgAvzSBTxE383gbHgvKk4OS0uxxh7VreEfFSUr6iwBFx1f0bgZPSzaqfW6To2p0ihJCKvPocv09OZn/6JzS+v/alXnEb7DmxOvAy2FpjTElrWBWaWmC5Uz3nQO4awraJgfGOoc+P4+nUDTXRrxpeBjnNYXPZ8+HA3mC9/0JHb/7ZfXdru14vk4eRvseyqbCLso99XSU+9/51faNL8OfvMU6owJXPjkSMSdINp2j6wGfU4mn+DZGeOpC6ucaK8nNzNvK971z/ifi1XBbxXwXI7lX1s/jIy3Nds2u1bTBcCcHpU1yN8WLLkZLq8K+6g8ZOTxz2pg4kIW42Z/2N8T/PJD/ep3cE3/FiyY/jCx0Gb7y1Sf2zO+FCCOLXuXixPxJLHuVdw0TVn+e7znimvn1uXixfnl/WYtl+S/25oL4LSi/WwAAAABJRU5ErkJggg==";
        
        window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").classList.add("navbar-static-top");
    
   
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    
  }
}
        return ( 
         <div id="navbar" className="startp-nav">
           <div className="container">
           <nav className="navbar navbar-expand-md navbar-light">

           <a className="navbar-brand"><img src={brandImage} alt="logo" /></a>
           <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav nav ml-auto">
   <li className="nav-item">
      <a className="nav-link">
         Home 
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
         </svg>
      </a>
      <ul className="dropdown_menu">
         <li className="nav-item">
            <a className="nav-link" href="#">
            Home One 
            </a>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="#">
            Home Two 
            </a>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="#">
            Home Three 
            </a>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="#">
            Home Four 
            </a>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="#">
            Home Five 
            </a>
         </li>
      </ul>
   </li>
   <li className="nav-item"><a className="nav-link">About</a></li>
   <li className="nav-item">
      <a href="#" className="nav-link">
      Pages <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
         </svg>
      </a>
      <ul className="dropdown_menu">
         <li className="nav-item"><a className="nav-link">Features</a></li>
         <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
            <ul className="dropdown_menu">
               <li className="nav-item"><a className="nav-link">Services</a></li>
               <li className="nav-item"><a className="nav-link">Service Details</a></li>
            </ul>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="#">Project</a>
            <ul className="dropdown_menu">
               <li className="nav-item"><a className="nav-link">Project</a></li>
               <li className="nav-item"><a className="nav-link">Project Details</a></li>
            </ul>
         </li>
         <li className="nav-item"><a className="nav-link">Team</a></li>
         <li className="nav-item"><a className="nav-link">Pricing</a></li>
         <li className="nav-item"><a className="nav-link">FAQ</a></li>
         <li className="nav-item"><a className="nav-link">Coming Soon</a></li>
         <li className="nav-item"><a className="nav-link">Error Status</a></li>
      </ul>
   </li>
   <li className="nav-item">
      <a href="#" className="nav-link">
      Shop 
      </a>
   </li>
   <li className="nav-item"><a className="nav-link">Contact</a></li>
</ul>
           </div>

           </nav>
          </div>
          </div>
          
          );
        }

export default Navigation;
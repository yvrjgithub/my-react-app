
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Project from './Project';
function App() {
  return (
    <body>
   
   <nav className="nav">
    <Navbar/>
   </nav>

   <section className="hero">
    <Hero/>
   </section>
   <div className="wrapper">
   <p className="tagline text">Yuvraj Upadhyay/Software Developer.</p>
   </div>
   <div className="project">
    <div className="pro">
    <p className="text projecttext">Projects</p>
    <img src="https://i.ibb.co/qnCr6JG/down.png" alt="" className="down" />
   </div>
   </div>
   <br /><br /><br /><br />

   <div className="pro3 kk">
  <Project image="https://i.ibb.co/pw2vLW7/Screenshot-2023-10-29-170906.png" protitle="Media Website" desc="A static website made with HTML and CSS" l1="-HTML" l2="-CSS" codelink="https://github.com/yvrjgithub/-dummy-webpage"/>
  </div>

  <div className="pro3">
     <Project image ="https://i.ibb.co/B6zrr72/Screenshot-2023-10-29-204620.png" protitle="Portfolio Website" desc="A Portfolio website With the help of devs club TSEC" l1="-React JS" codelink="https://github.com/yvrjgithub/prtflio"/>
  </div>
  
  <div className="pro3 ">
  <Project image="https://i.ibb.co/s6nSRHp/bill.png" protitle="Billing System" desc="A billing System made in Java with SQL as a MPR in semester 3rd" l1="Java Swing" l2="mySQL" codelink="https://github.com/yvrjgithub/billing"/>
  </div>
  <footer>
    <div className="fchild">
    <p className="text ftext">Connect With Me</p>
    <div className="logos">
     <a href="#"><div className="box"> <p className="text fresume">Resume</p></div></a>
      <a href="https://www.linkedin.com/in/yuvraj-upadhyay-859607271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><div className="box"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="" className="flinkedin fimg" /></div></a>
      <a href="https://github.com/yvrjgithub"><div className="box"><img src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="" className="fgithub fimg" /></div></a>
      <a href="https://instagram.com/yuvraj23.ig?igshid=OGQ5ZDc2ODk2ZA=="><div className="box"><img src="https://i.ibb.co/LNvY5SF/icons8-instagram-48.png"  alt="" className="insta fimg" /></div></a>
    </div>
    </div>
  </footer>


    </body>
  );
}


export default App;

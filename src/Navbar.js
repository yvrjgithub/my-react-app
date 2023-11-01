import './App.css';

function Navbar() {
    return(
    <>
    <div className="box">
    <a href="https://instagram.com/yuvraj23.ig?igshid=OGQ5ZDc2ODk2ZA=="><p className="initials text" >YU</p></a>
    </div>
    <div className="icons">
      <a href="#"><box className="box">
      <p className="resume text">Resume</p>
      </box></a>
      <a href="https://github.com/yvrjgithub">
      <box className="box">
      <img src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png" alt="" className="linkedin" />
      </box></a>
      <a href="https://www.linkedin.com/in/yuvraj-upadhyay-859607271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
      <box className="box">
      <img src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="" className="github" />
      </box></a>
    </div>
    </>
    );
}
export default Navbar;
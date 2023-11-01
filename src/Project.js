import './App.css';

function Project(props){
    return(
    <>
    <div className="projects">
    <img src={props.image}  alt="" className="proimage" />
  </div>
  <div className="pro2">
  <div className="text protext">
      <p className="title txt">{props.protitle}</p>
      <p className="desc txt">{props.desc}</p>
      <p className="tu txt">Tools used:</p>
      <ul className='txt'>
        <li className='txt'>{props.l1}</li>
        <li className='txt'>{props.l2}</li>
        <li className='txt'>{props.l3}</li>
        <li className='txt'>{props.l4}</li>
        <li className='txt'>{props.l5}</li>
      </ul>
      <a href={props.codelink}><div className="code text "><p className="codetxt">Code</p></div></a>
    </div>
  </div>
    </>
    );
}
export default Project;

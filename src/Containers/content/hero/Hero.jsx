import './Hero.css';
// import BgImg from '../../../assets/imgs/bg-tablet-pattern.svg'
import Img from '../../../assets/imgs/illustration-intro.svg';

const Hero = () => {

  return (
    <div id="hero">
      <div className="hero-content">
        <div className="text">
          <h1 className="fw-bold fs-highlight">Bring everyone together to build better products.</h1>
          <p className="fs-describer">Manage makes it simple for software <br/> teams to plan day-to-day tasks while <br/> keeping the larger team goals in view.</p>
          <button className="hoverable">Get Started</button>
        </div>
        <div className="img-container" style={{width: '100%', position: 'relative'}}>
          <img style={{width: '100%'}} src={Img}/>
        </div>
        {/* <div className="img"></div> */}
      </div>
    </div>
  )
}

export default Hero

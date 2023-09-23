import './Reviews.css';
import Ali from '../../../assets/imgs/avatar-ali.png';
import Anisha from '../../../assets/imgs/avatar-anisha.png';
import Richard from '../../../assets/imgs/avatar-richard.png';
import Shanai from '../../../assets/imgs/avatar-shanai.png';

const dataArray = [
  {
    Img: Anisha,
    name: 'Anisha Li',
    review: `Manage has supercharged our team’s workflow. The ability to maintain 
    visibility on larger milestones at all times keeps everyone motivated.`,
  },
  {
    Img: Ali,
    name: 'Ali Bravo',
    review: `We have been able to cancel so many other subscriptions since using 
    Manage. There is no more cross-channel confusion and everyone is much 
    more focused.`
  },
  {
    Img: Richard,
    name: 'Richard Watts',
    review: `Manage allows us to provide structure and process. It keeps us organized 
    and focused. I can’t stop recommending them to everyone I talk to!`,
  },
  {
    Img: Shanai,
    name: 'Shanai Gough',
    review: `Their software allows us to track, manage and collaborate on our projects 
    from anywhere. It keeps the whole team in-sync without being intrusive.`
  }
];

const Review = (props) => {
  return (
    <div className="review">
      <div className="img-container">
        <img src={props.Img}/>
      </div>

      <h1 className="fw-bold">{props.name}</h1>

      <p className="fading-text">"{props.review}"</p>
    </div>
  );
}

const Reviews = () => {

  const elements = dataArray.map(element => {
    return  <Review Img={element.Img} name={element.name} review={element.review}/>
  })

  return (
    <section id="reviews">
      <h1 className="fs-header fw-bold">What They've Said</h1>
      <div className="review-slider">
       
        {elements}
    
      </div>
      <button className="hoverable">Get Started</button>
    </section>
  )
}

export default Reviews

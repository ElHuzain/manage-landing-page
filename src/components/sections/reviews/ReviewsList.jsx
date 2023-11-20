import { useState } from 'react';
import Review from '../../ui/Review';
import Button from '../../ui/Button';

const ReviewsList = () => {
    const [selected, setSelected] = useState(0);

    const circleStyle = `rounded-3xl w-3 h-3 cursor-pointer border-2 border-primary-1`;
    const selectedCircleStyle = `${circleStyle} bg-primary-1`;

    const reviewData = [{
        "name": "Anisha Li",
        "avatar": "anisha",
        "review": "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
    }, {
        "name": "Ali Bravo",
        "avatar": "ali",
        "review": "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
    }, {
        "name": "Shanai Gough",
        "avatar": "shanai",
        "review": "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
    }, {
        "name": "Richard Watts",
        "avatar": "richard",
        "review": "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"
    }];

    const desktopView = reviewData.map(({name, avatar, review}, index) => <Review review={review} avatar={avatar} name={name} />)

    const currentReview = reviewData[selected];

    return (
        <div className="w-fit mx-auto">

            <div className="hidden lg:grid grid-cols-4 gap-6 overlow-x-scroll">
                {desktopView}
            </div>

            {/* Current Mobile Review */}
            <div className="lg:hidden">
                <Review name={currentReview.name} avatar={currentReview.avatar} review={currentReview.review} />
            </div>

            {/* Navigator */}
            <div className="flex lg:hidden gap-3 mx-auto w-fit my-8">
                <div onClick={() => setSelected(0)} className={selected === 0 ? selectedCircleStyle : circleStyle}></div>
                <div onClick={() => setSelected(1)} className={selected === 1 ? selectedCircleStyle : circleStyle}></div>
                <div onClick={() => setSelected(2)} className={selected === 2 ? selectedCircleStyle : circleStyle}></div>
                <div onClick={() => setSelected(3)} className={selected === 3 ? selectedCircleStyle : circleStyle}></div>
            </div>
            <div className="lg:mt-10">
                <Button />
            </div>
        </div>
    )
}

export default ReviewsList

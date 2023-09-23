import './AboutUs.css';

const dataArray = [
  {
    number: '1',
    prop: 'Track company-wide progress',
    value: `  See how your day-to-day tasks fit into the wider vision. Go from 
    tracking progress at the milestone level all the way done to the 
    smallest of details. Never lose sight of the bigger picture again.`,
  },
  {
    number: '2',
    prop: 'Advanced built-in reports',
    value: `Set internal delivery estimates and track progress toward company 
    goals. Our customisable dashboard helps you build out the reports 
    you need to keep key stakeholders informed.`,
  },
  {
    number: '3',
    prop: 'Everything you need in one place',
    value: `Stop jumping from one service to another to communicate, store files, 
    track tasks and share documents. Manage offers an all-in-one team 
    productivity solution.`
  }
];

const AboutElement = (props) => {
  return (
    <div className="about-us-element">
      <p className="header bullet">0{props.number}</p>

      <div className="text">
        <h1 className="header fw-regular">{props.prop}</h1>
        <p className="fading-text fw-thin">{props.value}</p>
      </div>
    </div>
  )
}

const AboutUs = () => {

  const elements = dataArray.map(element => {
    return <AboutElement number={element.number} prop={element.prop} value={element.value} />

  })

  return (
    <section id="about-us">
      <div className="right">
        <h1 className="fs-header fw-bold">What's different about Manage?</h1>
        <p className=" fs-describer fading-text">Manage provides all the functionality your team needs, without the complexity. Our software is tailer-made for modern digital product teams.</p>
      </div>

      <div className="left">

        {elements}

      </div>

    </section>
  )
}

export default AboutUs

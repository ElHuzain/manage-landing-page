import Feature from '../../ui/Feature'

const Features = () => {
    return (
        <div className="flex flex-col gap-12">
            <Feature numbering="1" property="Track company-wide progress"
            value="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the done to the smallest of details. Never lose sight of the bigger picture again." />
            <Feature numbering="2" property="Advanced built-in reports"
            value="Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed."/>
            <Feature numbering="3" property="Everything you need in one place"
            value="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."/>
        </div>
    )
}

export default Features

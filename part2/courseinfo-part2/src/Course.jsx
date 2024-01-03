const Header = (props) => {
    console.log(props.course);
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = props => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Content = (props) => {
    const parts = [...props.parts];
    return (
        <div>
            {
                parts.map(partObj => <Part key={partObj.name} part={partObj.name} exercises={partObj.exercises} />)
            }
        </div>
    )
}


const Course = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            
        </div>
    )
}

export default Course
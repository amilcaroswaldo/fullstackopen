const Header = (props) => {
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

const Total = (props) => {
    const parts = [...props.parts];
    const arrExercises = parts.map(el => el.exercises);
    const total = arrExercises.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0);
    return (
        <div>
            <b>Total of {total} exercises</b>
        </div>
    )
}

const CourseComponent = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Course = () => {
    const course = [{
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
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }]
    return (
        <div>
            <CourseComponent course={course[0]} />
            <CourseComponent course={course[1]} />
        </div>
    )
}
//the component was separate from the beggining of exercise
export default Course
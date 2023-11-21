// import { useState } from 'react'
import './snake.scss'

//HW2: using props.dir (destructuring and default value "up")
//make it sot\ that the SnakeHead renders in either of the next 2 situations in index.js:
//<SnakeHead />   or
//<SnakeHead dir="right" />
const Component = ({name, children}) => {
    return (
        <div className={name}>
            {children}
        </div>
    )
}

//decorator
const withCoordinates = (Component) => {
    return ({top, left, ...props}) => {
        return (
            <div style={{top: `${top}px`, left: `${left}px`, position: 'absolute'}}>
                <Component {...props} />
            </div>
        )
    }
}

//decorator
const withDirection = (Component) => {
    return ({dir, ...props}) => {
        return (
            <div className={`dir-${dir}`}>
                <Component {...props} />
            </div>
        )
    }
}

const SnakeHead = withCoordinates(
    withDirection(
        Component
    )
)
const SnakeTail = withCoordinates(
    withDirection(
        Component
    )
)

const Snake = () => {
    return (
        <Component name="snake">
            <SnakeHead top={100} left={200} name="head" dir="up" />
            <SnakeTail top={200} left={200} name="tail" dir="up" />
        </Component>
    )
}


export {Snake}
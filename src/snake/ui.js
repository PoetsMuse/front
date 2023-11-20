// import { useState } from 'react'
import './snake.scss'

//HW2: using props.dir (destructuring and default value "up")
//make it sot\ that the SnakeHead renders in either of the next 2 situations in index.js:
//<SnakeHead />   or
//<SnakeHead dir="right" />
const Component = ({name}) => {
    return (
        <div className={name}></div>
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

const SnakeHead = withCoordinates(Component)
const SnakeTail = withCoordinates(Component)


export {SnakeHead, SnakeTail}
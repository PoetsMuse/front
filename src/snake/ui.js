// import { useState } from 'react'
import {Component, withCoordinates, withDirection} from '../game/common'
import './style.scss'

//HW2: using props.dir (destructuring and default value "up")
//make it sot\ that the SnakeHead renders in either of the next 2 situations in index.js:
//<SnakeHead />   or
//<SnakeHead dir="right" />

const SnakeHead = withCoordinates(
    withDirection(
        Component
    )
)
const SnakeBody = withCoordinates(
    withDirection(
        Component
    )
)
const SnakeTail = withCoordinates(
    withDirection(
        Component
    )
)

const Snake = ({data: {children}}) => {
    return (
        <Component name="snake">
            {/* <SnakeHead top={64} left={200} name="head" dir="up" />
            <SnakeTail top={128} left={200} name="tail" dir="up" /> */}
            {
                children.map( (childData, idx) => {
                    return (childData.name === "head" && <SnakeHead key={`k-${idx}`} {...childData} />) 
                            ||
                           (childData.name === "body" && <SnakeBody key={`k-${idx}`} {...childData} />) 
                            ||
                           (childData.name === "tail" && <SnakeTail key={`k-${idx}`} {...childData} />) 
                })
            }
        </Component>
    )
}


export {Snake}
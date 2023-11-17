import './snake.scss'

export const SnakeHead = () => {

    let direction = 'up'

    return (
        <div className={`snake__head dir-${direction}`}>
            SnakeHead
        </div>
    )
}
//game common logic
const Component = ({name, children}) => {
    return (
        <div className={name}>
            {children}
        </div>
    )
}

//decorator
const withCoordinates = (Component) => {
    return ({coord: {top, left}, ...props}) => {
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

export {Component, withCoordinates, withDirection}
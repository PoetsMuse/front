import { Snake } from "../snake/ui"
import { Apple } from "../apple/ui"

//game components

const Game = ({data: {children}}) => {

    return (
        <div className='game'>
            {
                children.map((childData, idx) => {
                   
                        switch(childData.name) {
                            case "snake":
                                return <Snake 
                                        key={`k-${idx}`} 
                                        data={childData} 
                                    />
                            case "apple":
                                return <Apple
                                        key={`k-${idx}`}
                                        {...childData }
                                    />
                        }
                    
                })
            }
        </div>
    )
}

export { Game }
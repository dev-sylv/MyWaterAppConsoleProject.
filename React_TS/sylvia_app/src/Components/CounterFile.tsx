import React from 'react';

interface PropsData {
    counter : number
}


const CounterFile: React.FC<PropsData> = ({counter}) =>{
    return(
        <div>
             This is my counter file. {counter}
            
        </div>
    )
} 

export default CounterFile;
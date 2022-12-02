import React from 'react';


interface myProps{
    Slide: string;
}

const  File4: React.FC<myProps> = ({Slide}) =>{
    return(
        <div>
            {Slide}
        </div>
    )
} 

export default File4;
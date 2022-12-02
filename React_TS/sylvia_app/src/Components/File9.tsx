import React from 'react';


interface myProps{
    Slide: string;
}

const  File9: React.FC<myProps> = ({Slide}) =>{
    return(
        <div>
            {Slide}
        </div>
    )
} 

export default File9;
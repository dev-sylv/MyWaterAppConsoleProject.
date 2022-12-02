import React from 'react';


interface myProps{
    Slide: string;
}

const  File3: React.FC<myProps> = ({Slide}) =>{
    return(
        <div>
            {Slide}
        </div>
    )
} 

export default File3;
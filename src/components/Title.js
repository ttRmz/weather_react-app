import React from 'react';

// class Title extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>
//                     Weather Finder
//                 </h1>
//                 <p>
//                     Find out temperature, conditions, and more...
//                 </p>
//             </div>
//         );
//     }
// };

const Title = () => (
    <div>
        <h1 className='title-container__title'>
            Weather Finder
        </h1>
        <p className='title-container__subtitle'>
            Find out temperature, conditions, and more...
        </p>
    </div>
)

export default Title;
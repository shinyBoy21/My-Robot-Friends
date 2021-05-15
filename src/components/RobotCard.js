import React from 'react';

const RobotCard = ({image,name,email}) => {
    return (
        <>
        <div>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <h4>{email}</h4> 
        </div>
        </>
    )
}

export default RobotCard

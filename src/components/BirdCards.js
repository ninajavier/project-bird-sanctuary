import React from 'react';

function BirdCards({ birds, handleAdoptBirdClick }) {
    return (
        <div className="birds">
      {birds.map((bird, index) => (
        <>
          <div className="card" >
            <h3>{bird.name}</h3>
            <p>Price: ${bird.amount}</p>
            <img src={bird.img} alt=""></img>
            <button onClick={() => handleAdoptBirdClick(bird)} >Adopt</button>
        </div>
        </>
      ))}
    </div>
    );
}

export default BirdCards;
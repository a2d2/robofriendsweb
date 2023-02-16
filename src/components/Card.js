import React from "react";

const Card = (props) => {
  const { name, email, id } = props; // se podria directamente colocar deestructurar arriba. A cambio de props colocar: directamente entre las llaves
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

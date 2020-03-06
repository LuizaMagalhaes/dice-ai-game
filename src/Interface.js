import React from "react";

export const Interface = props => {
  return (
    <>
      <h1> Clique no dado para jogar! </h1>
      <img
        alt="choose"
        onClick={props.startGame}
        style={{ cursor: "pointer" }}
        width="10%"
        src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg"
      />
      <span style={{ cursor: "pointer" }} onClick={props.clearState}>
        Clear
      </span>
      <div className="table" style={{ fontSize: "30px" }}>
        Você: {props.yourChoice} Computador: {props.AIChoice}
      </div>
      Jogadas: {props.games}
    </>
  );
};
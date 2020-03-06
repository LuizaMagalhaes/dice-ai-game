import React from "react";

export const Game = props => {
  const { yourChoice, AIChoice } = props.results;

  if (yourChoice > AIChoice) {
    return <h1 className="won">Voce ganhou!</h1>;
  } else if (AIChoice > yourChoice) {
    return <h1 className="lost">Voce Perdeu</h1>;
  } else if (AIChoice === null && yourChoice === "") {
    return <h1>Jogue!</h1>;
  } else {
    return <h1 className="draw">Empatou</h1>;
  }
};
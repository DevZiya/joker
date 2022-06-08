import React from "react";
import { CardWrapper, CardTop, Setup, Delivery, CardBottom } from "./styled";
import { Joke,flagsKeys } from "../common/types";

interface IJokesProps{
  joke:Joke
};


const JokeItem: React.FC<IJokesProps> = ({ joke }) => {
    const flags = Object.keys(joke.flags).filter(key => joke.flags[key as flagsKeys]).join(" , ");	
    
    
  return (
    <CardWrapper>
      <CardTop>
          {joke.type === "single" 
          ?(
          <p>{joke.joke}</p>
          ) : (
             <>
              <Setup>{joke.setup}</Setup>
              <Delivery>{joke.delivery}</Delivery>
             </>
          )}
      </CardTop>
      <CardBottom>
        <p>{joke.category}</p>
        <div>{flags}</div>
      </CardBottom>
    </CardWrapper>
  );
};

export default JokeItem;

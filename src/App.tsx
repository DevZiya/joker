import React, { useState } from "react";
import {
  Wrapper,
  Row,
  Image,
  Header,
  Form,
  Search,
  Button,
} from "./components/styled";
import baykus from "./image/baykus.jpg";
import axios from "axios";
import JokeItem from "./components/JokeItem";

function App() {
  type Jokes = {
    id: number;
    joke?: string;
    delivery?: string;
    setup?: string;
    lang: "cs" | "de" | "en" | "es" | "fr" | "pt";
    type: "single" | "twopart";
    category:
      | "Any"
      | "Misc"
      | "Programming"
      | "Dark"
      | "Pun"
      | "Spooky"
      | "Christmas";
    error: boolean;
    safe: boolean;
    flags: {
      nsfw: boolean;
      religious: boolean;
      political: boolean;
      racist: boolean;
      sexist: boolean;
      explicit: boolean;
    };
  };
  const BaseUrl = "https://v2.jokeapi.dev/joke/Any";
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Jokes[]>([]);

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getJockes = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = `${BaseUrl}?contains=${search}&amount=10`;
    const {data} = await axios.get(endpoint);

    if(data.error) {
      setError(true);
    }else{
      setJokes(data.jokes);
      setError(false);
    }
    setSearch("");
  };
  
  return (
    <div className="App">
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={baykus} alt="Joker" />
        </Row>
        <Form onSubmit={getJockes}>
          <Search
            placeholder="Search"
            type={"text"}
            value={search}
            onChange={handleChange}
          />
          <Button type={"submit"}>Submit</Button>
        </Form>

        <div>
          {error&&<p>No jokes found</p>}
          
          {jokes.length > 0 && (
            //@ts-ignore
            jokes.map((joke) => <JokeItem key={joke.id} joke={joke}/>)
          )}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;

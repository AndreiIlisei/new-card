import Player from "./Player";
import "./styles.css";
import { useQuery, gql } from "@apollo/client";

const name = gql`
  {
    players {
      name
      clan
      country
      playerData {
        playerId
        clanId
      }
      playerStats {
        ovr
        acc
        imp
        ast
        ent
        utl
        exp
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(name);
  // if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data);

  return (
    <div className="App">
      <Player />

      {/* <Player />
      <Player />
      <Player /> */}
    </div>
  );
}

export default App;

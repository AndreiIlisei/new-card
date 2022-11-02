import PlayerCard from "./Components/PlayerCard";
import "./styles.css";
import { useGetPlayers } from "./utils/graphqlQuery";

function App() {
  const playerInfo = useGetPlayers();

  return (
    <div className="App">
      <PlayerCard playerInfo={playerInfo || []} />
    </div>
  );
}

export default App;

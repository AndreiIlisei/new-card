import { gql, useQuery } from "@apollo/client";
import { Player, PlayerData } from "../../typings";

const GET_PLAYER_QUERY = gql`
  query GetPlayers {
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

export const useGetPlayers = (): Player[] | undefined => {
  const { data } = useQuery(GET_PLAYER_QUERY);
  return data?.players;
};
import { Player } from "../../typings";
import PlayerClanLogo from "./ClanLogo";
import PlayerClanLogoBig from "./ClanLogoBig";
import PlayerFlags from "./Flag";
import PlayerPicture from "./PlayerPicture";

type Props = {
  playerInfo: Player[];
};

const PlayerCard = ({ playerInfo }: Props) => {
  return (
    <div className="gridComponent">
      {playerInfo?.map((player) => {
        return (
          <div key={player.playerData.playerId} className="hexagon">
            <div className="topContainer">
              <PlayerClanLogoBig player={player} />
              <img
                className="flares"
                src={"./assets/static/flares2.svg"}
                alt=""
              />

              <img
                className="lights"
                src={"./assets/static/lights.png"}
                alt=""
              />

              <PlayerPicture player={player} />
            </div>

            <div className="divider">
              <div className="middleHexagon">
                <div className="middleHexagonText">
                  <p className="overallStat">{player.playerStats.ovr}</p>
                  <p className="overallText"> OVR </p>
                </div>
              </div>
            </div>

            <div className="bottomContainer">
              <img className="lines" src={"./assets/static/lines.svg"} alt="" />

              <div className="playerInfoLeft">
                <div className="playerName">{player.name}</div>
                <h1 className="playerClan">{player.clan}</h1>
              </div>

              <div className="playerInfoRight">
                <PlayerFlags player={player} />
                <PlayerClanLogo player={player} />
              </div>

              <div className="statsContainer">
                <div className="columnLeft">
                  <div className="rowStats">
                    <p className="statsTextLeft">{player.playerStats.acc}</p>
                    <p className="statsName">ACC</p>
                  </div>
                  <div className="rowStats">
                    <p className="statsTextLeft">{player.playerStats.imp}</p>
                    <p className="statsName">IMP</p>
                  </div>
                  <div className="rowStats">
                    <p className="statsTextLeft">{player.playerStats.ast}</p>
                    <p className="statsName">AST</p>
                  </div>
                </div>

                <div className="dividerStats" />

                <div className="columnRight">
                  <div className="rowStats">
                    <p className="statsTextRight">{player.playerStats.ent}</p>
                    <p className="statsName">ENT</p>
                  </div>
                  <div className="rowStats">
                    <p className="statsTextRight">{player.playerStats.utl}</p>
                    <p className="statsName">UTL</p>
                  </div>
                  <div className="rowStats">
                    <p className="statsTextRight">{player.playerStats.exp}</p>
                    <p className="statsName">EXP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerCard;

import { Player } from "../../typings";
import PlayerClanLogo from "./ClanLogo";
import PlayerFlags from "./Flag";
import PlayerPicture from "./PlayerPicture";

type Props = {
  playerInfo: Player[];
};

const PlayerCard = ({ playerInfo }: Props) => {
  console.log(playerInfo);
  return (
    <div className="gridComponent">
      {playerInfo?.map((player) => {
        return (
          <div key={player.playerData.playerId} className="hexagon">
            <div className="topContainer">
              {/* <PlayerClanLogo player={player} /> */}

              <img
                className="logoVitality"
                src={"./assets/data/logoVitalityWhite.svg"}
                alt=""
              />

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
                  <div className="tryingSmth"></div>
                  <p className="overallText"> OVR </p>
                </div>
              </div>
            </div>

            <div className="bottomContainer">
              <img className="lines" src={"./assets/static/lines.svg"} alt="" />

              <div className="playerInfoLeft">
                <div className="playerName">{player.name}</div>
                <div className="playerClan">{player.clan}</div>
              </div>

              <div className="playerInfoRight">
                <PlayerFlags player={player} />
                <PlayerClanLogo player={player} />
              </div>

              <div className="statsContainer">
                <div className="columnLeft">
                  <div className="columnLeftStatsFirst">
                    <p className="statsText">{player.playerStats.acc}</p>
                    <p className="statsName">ACC</p>
                  </div>
                  <div className="columnLeftStatsMiddle">
                    <p className="statsText">{player.playerStats.imp}</p>
                    <p className="statsName">IMP</p>
                  </div>
                  <div className="columnLeftStatsLast">
                    <p className="statsText">{player.playerStats.ast}</p>
                    <p className="statsName">AST</p>
                  </div>
                </div>

                <div className="dividerStats" />

                <div className="columnRight">
                  <div className="columnRightStatsFirst">
                    <p className="statsText">{player.playerStats.ent}</p>
                    <p className="statsName">ENT</p>
                  </div>
                  <div className="columnRighthStatsMiddle">
                    <p className="statsText">{player.playerStats.utl}</p>
                    <p className="statsName">UTL</p>
                  </div>
                  <div className="columnRightStatsLast">
                    <p className="statsText">{player.playerStats.exp}</p>
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

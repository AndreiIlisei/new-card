import { useEffect, useState } from "react";
import { Player } from "../../typings";

type Props = { player: Player };

const PlayerPicture = ({ player }: Props) => {
  const [data, setData] = useState<any>([]);
  let [error, setError] = useState(null);

  useEffect(() => {
    const API = `http://office.skybox.gg:3000/resources/players/${player.playerData?.playerId}`;
    const fetchData = () => {
      fetch(API)
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("Server responds with error!");
          }
          return res.json();
        })
        .then(
          (data) => {
            setData(data);
          },
          (error) => {
            setError(error);
          }
        );
    };
    fetchData();
  }, []);

  return (
    <div className="playerPicture">
      {!error && <img src={"data:image/png;base64," + data.base64_image} />}

      {error && <img className="errorImage" src={"./anonAvatar.svg"} />}
    </div>
  );
};

export default PlayerPicture;

import { useEffect, useState } from "react";
import { Player } from "../../typings";

type Props = { player: Player };

const PlayerClanLogo = ({ player }: Props) => {
  const [data, setData] = useState<any>([]);
  let [error, setError] = useState(null);

  useEffect(() => {
    const API = `http://office.skybox.gg:3000/resources/clans/${player.playerData.clanId}`;
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
    <img
      className="clanLogoSmall"
      src={`data:${data.mime_type};base64,` + data.base64_image}
    />
  );
};

export default PlayerClanLogo;

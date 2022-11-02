import { useEffect, useState } from "react";
import { Player } from "../../typings";

type Props = { player: Player };

const PlayerFlags = ({ player }: Props) => {
  const [data, setData] = useState<any>([]);
  let [error, setError] = useState(null);

  useEffect(() => {
    const API = `http://office.skybox.gg:3000/resources/flags/${player.country}`;
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
          (err) => {
            setError(error);
          }
        );
    };
    fetchData();
  }, []);

  return (
    <img className="flag" src={"data:image/png;base64," + data.base64_image} />
  );
};

export default PlayerFlags;

import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../contexts/Context.js";
import Heart from "./Heart.jsx";

export default function Galeria() {
  const { data, setData } = useContext(Context);
  const handleLike = (id) => {
    const updatedData = data.map((foto) => {
      if (foto.id === id) {
        return {
          ...foto,
          liked: foto.liked === false ? true : false,
        };
      }
      return foto;
    });
    setData(updatedData);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.map((foto) => (
        <div
          key={foto.id}
          className="foto"
          style={{ backgroundImage: `url(${foto.src.original})` }}
          onClick={() => handleLike(foto.id)}
        >
          <Heart filled={foto.liked}/>
        </div>
      ))}
    </div>
  );
}

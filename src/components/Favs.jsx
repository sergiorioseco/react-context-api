import { useContext } from "react";
import Context from "../contexts/Context.js";
import Heart from "./Heart.jsx";

export default function Favs() {
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
      <div>
        <div className="p-3 galeria grid-columns-4">
        {data
        .filter((foto) => foto.liked) // Filtrar solo las fotos con liked igual a true
        .map((foto) => (
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
        </div>
    );

  }

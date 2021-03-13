import { useState } from "react";
import TargInsignia from "./targInsignia";

const Insignias = ({ insignias }) => {
  let [array, setArray] = useState(insignias);

  return (
    <div className="containerInsignias">
      <h3 className="titleInsignias">Insignias</h3>
      <div className="insignias">
        {array.map((e, i) => {
          return <TargInsignia key={i} url={e.imageUrl} />;
        })}
      </div>
    </div>
  );
};

export default Insignias;

import Image from "next/image";

const TargInsignia = (props) => {
  return (
    <div className="containerTargInsignia">
      <Image
        className="insigniaImg"
        src={props.url}
        alt="Insignia"
        width="100"
        height="100"
      />
    </div>
  );
};

export default TargInsignia;

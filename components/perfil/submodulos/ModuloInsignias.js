const ModuloInsignias = (props) => {
  return (
    <div className="containerModuleInsignias">
    {/*   <h1>Insignias</h1> */}
      <div className="contentModuleInsignias row around-xs">
        {props.insignias.map((e, i) => {
          return (
            <div className="moduleInsignia col-xs-12 col-ms-6 col-md-4 col-lg-3" key={i}>
              <div className="imgContainer">
                <img src={e.imageUrl} alt="insignia" />
              </div>
              <div className="title">
                <h2>{e.title}</h2>
              </div>
              <h3>descripción</h3>
              <p>{e.descripcion}</p>
              <hr className="moduleInsigniaHr" />
              <h4>¿Comó conseguirlo?</h4>
              <p>
                Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuloInsignias;

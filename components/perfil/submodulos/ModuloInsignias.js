const ModuloInsignias = (props) => {
  return (
    <div className='containerModuleInsignias'>
      <h1>Insignias</h1>
      <div className='contentModuleInsignias'>
        {props.insignias.map((e, i) => {
          return (
            <div className='moduleInsignia' key={i}>
              <img src={e.imageUrl} alt='insignia' />
              <h2>{e.title}</h2>
              <h3>descripción</h3>
              <p>{e.descripcion}</p>
              <hr className='moduleInsigniaHr' />
              <h4>¿Comó conseguirlo?</h4>
              <p>
                Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur.
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ModuloInsignias

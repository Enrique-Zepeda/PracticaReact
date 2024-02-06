export const Card = ({imagen, titulo, descripcion, precio}) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen"/>
    </div>
  )
}

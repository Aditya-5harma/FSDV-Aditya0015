import "./card.css"
function Card(props){
  return(
    <div className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <h3 className="card-title">{props.title}</h3>
      <p className="card-description">{props.description}</p>
    </div>
  )

}
export default Card;
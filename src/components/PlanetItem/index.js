// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props

  return (
    <div className="car">
      <img
        src={details.imageUrl}
        alt={`planet ${details.name}`}
        className="plan"
      />
      <h1>{details.name}</h1>
      <p>{details.description}</p>
    </div>
  )
}
export default PlanetItem

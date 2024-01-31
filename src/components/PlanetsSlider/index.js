// Write your code here
import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets" className="bg">
      <h1 className="heading">PLANETS</h1>
      <div className="slider-container">
        <Slider className="sli" {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} details={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetSlider

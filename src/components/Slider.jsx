import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { Carousel, CarouselItem } from 'react-bootstrap';

const right = 'right'
const left = 'left'
export default function Slider() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        classNameName="d-block w-100"
        src="images/background1.jpeg"
        alt="First slide"
        height={'700px'}
      />
      <Carousel.Caption>
        <h3>Man Collection</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        classNameName="d-block w-100"
        src="images/background2.jpeg"
        alt="Second slide"
        height={'700px'}
      />
  
      <Carousel.Caption>
        <h3>Women Collection</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

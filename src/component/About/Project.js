import Slider from '../Slider';

function Project( {data} ) {
  return (
    <div className="wrapper">
        <Slider data={data[0]} ></Slider>
        <Slider data={data[1]} ></Slider>
    </div>
  )}
export default Project

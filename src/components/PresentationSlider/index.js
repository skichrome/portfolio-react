import React, {useState, useEffect} from 'react';
import { Slider, Slide, Caption, Card } from 'react-materialize';
import PresentationSliderData from '../../data/presentation-slider.json';

/**
* @author
* @function PresentationSlider
**/

const PresentationSlider = (props) => {
    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        const sliderList = PresentationSliderData;
        setSliderList(sliderList);
    }, [sliderList]);

  return(
      <Slider
        fullscreen={false}
        options={{
            duration: 500,
            height: 600,
            indicators: true,
            interval: 6000
        }}
      >
          {
              sliderList.map(sliderItem => {
                  return(
                      <Slide image={<img alt={sliderItem.image.alt} src={require(`../../assets/${sliderItem.image.location}`)} />}>
                          <Caption className="row caption left-align" placement="left">
                                <div className="col s12 m7 l8 xl4">
                                    <Card className="blue darken-1">
                                        <h5 className="light"><blockquote>{sliderItem.citation.content}</blockquote></h5>
                                        <p>{sliderItem.citation.author}</p>
                                    </Card>
                                </div>
                          </Caption>
                      </Slide>
                  );
            })
        }
      </Slider>
   );
 }

export default PresentationSlider
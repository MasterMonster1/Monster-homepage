import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import {
  HeroSectionContainer,
  ContentContainer,
  Heading,
  Description,
  Button,
  ImageContainer,
  Image,
  HeroFlexer,
  HeroFlexItem,
  BlockDiver,
  Button2,
  styles

} from './HeroComponent.styles';


import HeroImage from './../../assets/hero_image.png';
import Twitter from './../../assets/Twitter_black.png';
import Telegram from './../../assets/Telegram_black.png';
import Medium from './../../assets/Medium_black.png';



const HeroComponent = () => {
  const useStyles = makeStyles(styles);
const classes = useStyles();

  return (
    <div>
      <HeroSectionContainer>
        <ContentContainer>
          <Heading>Redefining Sports Fandom</Heading>
          <br/>

          <Description>
            Decentralised, Incentivized, Tokenized. <br /> 

          </Description>

          <br/>
   
          <div className={classes.root} >
            <div className={classes.column} >
          <Button to="location.href='https://drive.google.com/file/d/17YzW1HocEyHFRXf-4wIWUk84tnK3B7c0/view?ts=60d9e1c4'">
            
       
            Whitepaper
          
            
            </Button> </div>
           
           
            <div className={classes.column}>
              <Button2 to=''> Launch App </Button2>
            </div>

            
            
            </div>

           


        </ContentContainer>
        <ImageContainer>
          <Image src={HeroImage} alt='' draggable={false} />
        </ImageContainer>
      </HeroSectionContainer>
      
    </div>
  );
};

export default HeroComponent;

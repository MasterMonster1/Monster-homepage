import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import MonsterIcon from './../../assets/monster_logo.png';
import MonsterTitle from './../../assets/monster_title_logo.png';
import {Image}  from './styles';
import { LogoContainer } from '../../pages/LandingPage/LandingPage.styles';
import { LogoIcon } from '../../pages/LandingPage/LandingPage.styles';
import { LogoImage } from '../../pages/LandingPage/LandingPage.styles';

import { Row } from './styles';
import styles from './styles';
import { FooterContainer } from './styles';
import Twitter from './../../assets/Twitter_black.png';
import Telegram from './../../assets/Telegram_black.png';
import Medium from './../../assets/Medium_black.png';
import Github from './../../assets/Github_black.svg'
import {
  Box,
  Container,
  Column,
  FooterLink,
  Heading,
  } from "./styles";


{/* const useStyles = makeStyles(styles);
const Footer = () => {
  const classes = useStyles();
 
  const { t } = useTranslation();

  return (
    <div>
      <Row className={classes.FooterContainer}>
      <div className={classes.column}>
        <div className={classes.title}>{t()}</div>
        
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t()}</div>
        <LogoContainer>
          <LogoIcon src={MonsterIcon} alt='' draggable={false} />
          <LogoImage src={MonsterTitle} alt='' draggable={false} />
        </LogoContainer>

        <h3 className={classes.link}> The power of DeFi and Sports, <br/> </h3>
         

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-hand-holding-usd ${classes.linkIcon}`}></i>
          <span> copyright 2021 @ MONSTER SPORTS FINANCE</span>
        </a>
        <div className={classes.title}>{t()}</div>
        <div className={classes.title}>{t()}</div>
        <div className={classes.title}>{t()}</div>
      </div>
      
       
      <div className={classes.column}>
        <div className={classes.title}>About</div>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fa-book ${classes.linkIcon}`}></i>
          <span>docs</span>
        </a>

        <a
          href="https://medium.com/monsterfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-medium ${classes.linkIcon}`}></i>
          <span>{t('news')}</span>
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`}></i>
          <span>{t('source')}</span>
        </a>
      </div>
  <br/> 

      <div className={classes.column}>
        <div className={classes.title}>{t('Products')}</div>
        

        

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-hand-holding-usd ${classes.linkIcon}`}></i>
          <span>app</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('Socials')}</div>
        <a
          href="https://twitter.com/monsterfinance_"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-twitter ${classes.linkIcon}`}></i>

          <span>twitter</span>
        </a>
        <a
          href="https://t.me/mnstrfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i class="fab fa-telegram-plane"></i>


          <i className={`fab fa-telegram- ${classes.linkIcon}`}></i>

          <span>telegram</span>
        </a>
       
      </div>
  
 
  
    
 
  
   </Row>
   </div>
   
  );
};

export default memo(Footer); */}


const useStyles = makeStyles(styles); 

const Footer = () => {

  const classes = useStyles();
  const { t } = useTranslation();
return (
	<FooterContainer>
		<Row className={classes.root}>
		<Column>
			<Heading><LogoContainer>
          <LogoIcon src={MonsterIcon} alt='' draggable={false} />
          <LogoImage src={MonsterTitle} alt='' draggable={false} />
        </LogoContainer></Heading>
        
<Heading text-decoration='transparent' font='bold'>Next generation DeFi ecosystem for Sports Fans across the world.	</Heading>

<p>Copyright 2021 @ Monster Sports Finance</p>
	</Column>
    <Column>
    <FooterLink href="#"></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink href="#"></FooterLink>
      <FooterLink></FooterLink>
      
			<FooterLink href="#"></FooterLink>
			<FooterLink href="https://medium.com/monsterfinance"></FooterLink>
			<FooterLink href="#"></FooterLink>
		</Column>
    <Column>
    <FooterLink href="#"></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink href="#"></FooterLink>
      <FooterLink></FooterLink>
      
			<FooterLink href="#"></FooterLink>
			<FooterLink href=""></FooterLink>
			<FooterLink href="#"></FooterLink>
		</Column>
    <Column>
    <FooterLink href="#"></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink href="#"></FooterLink>

      
			<FooterLink href="#"> Docs </FooterLink>
			<FooterLink href="https://medium.com/@monsterfinance">News</FooterLink>
			<FooterLink href="#">Source</FooterLink>
		</Column>
    <Column>
    <FooterLink href="#"></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink href="#"></FooterLink>
      <FooterLink></FooterLink>
      
			<FooterLink href="#">  </FooterLink>
			<FooterLink href=""></FooterLink>
			<FooterLink href="#"></FooterLink>
		</Column>
		<Column>
			<Heading></Heading>
      <FooterLink></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink></FooterLink>
			<FooterLink href="#">About</FooterLink>
			<FooterLink href="#">Roadmap</FooterLink>
			<FooterLink href="#">Whitepaper</FooterLink>
		</Column>

    <Column>
    <FooterLink href="#"></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink></FooterLink>
      <FooterLink href="#"></FooterLink>
      <FooterLink></FooterLink>
      
			<FooterLink href="#"> </FooterLink>
			<FooterLink href=""></FooterLink>
			<FooterLink href="#"></FooterLink>
		</Column>

	<Column>

  <FooterLink href="#"> </FooterLink>
			<FooterLink href=""></FooterLink>
			<FooterLink href="#"></FooterLink>
  	<Row>
			
      <FooterLink
          href="https://t.me/mnstrfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
           <Image src={Telegram} />
        </FooterLink>
		
			<FooterLink href="https://medium.com/@monsterfinance"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >

          <Image src={Medium} />
        
			
			</FooterLink>

      <FooterLink href="https://twitter.com/monsterfinance_"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >

          <Image src={Twitter} />
        
			
			</FooterLink>
			
		</Row>
    </Column>
   
		</Row>
	</FooterContainer>

);
};
export default Footer; 

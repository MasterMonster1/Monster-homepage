import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


import {
  LandingPageContainer,
  Header,
  LogoContainer,
  LogoIcon,
  LogoImage,
  Navbar,
  NavUl,
  NavListItem,
  MenuImage,
  CloseImage,
  AllocationContainer,
  AllocationHeader,
  AllocationImage,
  FlexWrapContainer,
  AllocatedContainer,
  AllocatedPill,
  Allocated,
  AllocatedPercentage,
  Alink,
  styles
} from './LandingPage.styles';

import HeroComponent from '../../components/HeroComponent/HeroComponent.comp';
import AboutMonster from './../../components/AboutMonsterComponent/AboutMonster.comp';
import Roadmap from './../../components/RoadmapComponent/Roadmap.comp';
import Footer from './../../components/Footer/Footer';

import MonsterIcon from './../../assets/monster_logo.png';
import MonsterTitle from './../../assets/monster_title_logo.png';
import Allocation from './../../assets/3.jpeg';
import Binance from './../../assets/binance_logo.png';
import MenuIcon from './../../assets/menu.svg';
import CloseIcon from './../../assets/cancel.svg';
import Partners from '../../components/Partners/Partners';
import { Button2 } from '../../components/HeroComponent/HeroComponent.styles';

const LandingPage = () => {
  const [openNav, setOpenNav] = useState(false);
 
  return (
    <LandingPageContainer>
      <Header>
        <LogoContainer>
          <LogoIcon src={MonsterIcon} alt='' draggable={false} />
          <LogoImage src={MonsterTitle} alt='' draggable={false} />
        </LogoContainer>
        <MenuImage
          onClick={() => setOpenNav(true)}
          src={MenuIcon}
          alt=''
          draggable={false}
        />
        <CloseImage
          onClick={() => setOpenNav(false)}
          src={CloseIcon}
          alt=''
          draggable={false}
          open={openNav}
        />
        <Navbar open={openNav}>
          <NavUl>
           
            
            <NavListItem>
              <Alink href="#about">
                MONSTER Ecosystem
              </Alink>
            </NavListItem>
            <NavListItem>
              <Alink href="#roadmap">
                Roadmap
              </Alink>
            </NavListItem>
            <NavListItem>
              <Alink href="#token-allocation">
                Token Allocation
              </Alink>
            </NavListItem>
            <NavListItem >
            
              <Button2 to='' >
                LAUNCH APP
               </Button2>
            </NavListItem>
          </NavUl>
        </Navbar>
      </Header>
    
     <HeroComponent /> 
    
      <AboutMonster />
      <Roadmap />

      <AllocationContainer id="token-allocation" color='theme.backgroundColor'>
        <AllocationHeader>Token Allocation</AllocationHeader>
         <hr height='100px'width='50px' color ='#00AD90' position='center' margin-bottom='50px'/> 
        <br />
        <br />
        <br />
       
       Token
       <br/>
       <br/>
       <br/>
        <AllocationHeader> MNSTRS</AllocationHeader>
        

        Total Supply
       <br/>
       <br/>
       <br/>
        <AllocationHeader> 15,000,000</AllocationHeader>

        <AllocationImage src={Allocation} alt='' draggable={false} />
        
        <br/>
        <br/>
        <br/>

        <FlexWrapContainer>
          <AllocatedContainer>
            <AllocatedPill seed />
            <Allocated>Liquidity</Allocated>
            <AllocatedPercentage>73.3%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill priv />
            <Allocated>Marketing</Allocated>
            <AllocatedPercentage>5.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill pub />
            <Allocated>Partnership</Allocated>
            <AllocatedPercentage>5.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill dex />
            <Allocated>Team</Allocated>
            <AllocatedPercentage>10.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill marketing />
            <Allocated>intial</Allocated>
            <AllocatedPercentage>6.7%</AllocatedPercentage>
          </AllocatedContainer>

        </FlexWrapContainer>
      </AllocationContainer>
      <Partners />
      
<Footer />


    </LandingPageContainer>
    
     
  
     
    
    
  );
 
};

export default LandingPage;

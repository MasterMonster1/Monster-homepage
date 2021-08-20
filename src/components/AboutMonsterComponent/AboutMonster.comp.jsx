import React from 'react';

import {
  AboutMonsterContainer,
  Header,
  Desc,
  CardContainer,
  Card,
  CardHeader,
  CardBody,
} from './AboutMonster.styles';

const AboutMonster = () => {
  return (
    <div id="about">
    <AboutMonsterContainer>
      <Header>
        About <span>MONSTER Sports Finance</span>
      </Header>
      <Desc>
        At <span>MONSTER</span>, we seek to financially reward the most diehard
        fans in a ‘first of its kind’ decentralized finance platform and
        sporting community which distributes wealth to the diehard fans.
      </Desc>
      <Header id="monster-ecosystem">
        The <span>MONSTER</span> Ecosystem
      </Header>
      <hr height='100px'width='50px' color ='#00AD90' position='center' margin-bottom='50px'/> 
      <CardContainer>
        <Card>
          <CardHeader>$MNSTRS</CardHeader>
          <CardBody>The ecosystem native Token</CardBody>
        </Card>
        <Card>
          <CardHeader>MONSTERPools & MONSTERFarms</CardHeader>
          <CardBody>Earn rewards for providing liquidity</CardBody>
        </Card>
        <Card>
          <CardHeader>$MNSTRSx</CardHeader>
          <CardBody>Our governance token. Decide MONSTER’s future.</CardBody>
        </Card>
       
      </CardContainer>

      <CardContainer>
      <Card>
          <CardHeader>MONSTERBet</CardHeader>
          <CardBody>
            Daily Fantasy Sports betting for all major sporting leagues
          </CardBody>
        </Card>
        <Card>
          <CardHeader>MONSTERPad</CardHeader>
          <CardBody>
          The smart platform for sports/gaming projects launch to the world
          </CardBody>
        </Card>
        <Card>
          <CardHeader>MONSTERScout</CardHeader>
          <CardBody>
            Launchpad for investing in the next generation of stars via player
            tokenization
          </CardBody>
        </Card>
       
      </CardContainer>
    </AboutMonsterContainer>
    </div>
  );
};

export default AboutMonster;

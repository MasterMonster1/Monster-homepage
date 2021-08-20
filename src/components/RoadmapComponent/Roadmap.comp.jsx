import React from 'react';

import {
  RoadmapContainer,
  RoadmapHeader,
  ContentContainer,
  DayTodoContainer,
  DayContainer,
  Day,
  Dayy,
  TodoContainer,
  Todo,
} from './Roadmap.styles';

const Roadmap = () => {
  return (
    <div id="roadmap">

    <RoadmapContainer>
      <RoadmapHeader>Road Map</RoadmapHeader>
      <hr height='100px'width='50px' color ='#00AD90' position='center' margin-bottom='50px'/> 
      <br />
      <ContentContainer>
      <DayTodoContainer>
          <DayContainer>
            <Day>Q2 2021</Day>
          </DayContainer>
          <TodoContainer>
          <Todo>
              <span>Release </span>Whitepaper V1 on Testnet<br/> 
            </Todo>
            <Todo>
              <span>$MNSTRS </span>Testnet<br/> 
            </Todo>
            <Todo>Private Sale</Todo>
          
            <Todo>
              Release <span>MONSTERPools</span> & <span>MONSTERFarms</span> on Testnet
            </Todo>
            <Todo> Basic Marketing</Todo>
            
            {/* <Todo>Listing on PancakeSwap</Todo>
            <Todo>Listing on Coingecko</Todo> */}
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q3 2021</Day>
          </DayContainer>
          <TodoContainer>
          <Todo>IDO on a partner Launchpad</Todo>
            <Todo>
              <span>$MNSTRS </span>Token Launch<br/>
            </Todo>
           
            
            <Todo>
              <span>MONSTERPools</span> & <span>MONSTERFarms</span> Launch
            </Todo>
            <Todo>TechRate Audit</Todo>
            
            {/* <Todo>Listing on PancakeSwap</Todo>
            <Todo>Listing on Coingecko</Todo> */}
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q4 2021</Day>
          </DayContainer>
          <TodoContainer>
          <Todo>Partnerships</Todo>
            <Todo>
              Team Expansion (Marketing & Technical team addition)
            </Todo>
            <Todo>
              <span>MNSTRSx</span> Launch
            </Todo>
            <Todo>
              <span>MonsterBet</span>: Daily Fantasy Sports betting introduced to the ecosystem.
            </Todo>
           
            
           
            {/* <Todo>Listing on PancakeSwap</Todo>
            <Todo>Listing on Coingecko</Todo> */}
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q1 2022</Day>
          </DayContainer>
          <TodoContainer>
          <Todo>
              UX/UI Redesign and Tech Overhaul 
            </Todo>
            <Todo>Certik Audit</Todo>
            <Todo><span>MonsterScout</span> Initial development</Todo>
            
            {/* <Todo>Listing on PancakeSwap</Todo>
            <Todo>Listing on Coingecko</Todo> */}
          </TodoContainer>
        </DayTodoContainer>

        <DayTodoContainer>
          <DayContainer>
            <Day>Q2 2022</Day>
          </DayContainer>
          <TodoContainer>
          <Todo>
              Partnership
            </Todo>
            <Todo><span>MonsterScout</span> Continuous development</Todo>
            <Todo><span>Monsterpad </span>Launch</Todo>
            <Todo>First IDO</Todo>
            {/* <Todo>Listing on PancakeSwap</Todo>
            <Todo>Listing on Coingecko</Todo> */}
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q3 2022</Day>
          </DayContainer>
          <TodoContainer>
          <Todo><span>MONSTERScout</span> Launch</Todo>
            <Todo>First set of Athletes tokenization </Todo>
            
            {/* <Todo>Listing on PancakeSwap</Todo>
            <Todo>Listing on Coingecko</Todo> */}
          </TodoContainer>
        </DayTodoContainer>
        
        
      

      </ContentContainer>
    </RoadmapContainer>
    </div>

  );
};

export default Roadmap;

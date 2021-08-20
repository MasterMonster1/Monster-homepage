import React from 'react'
import {Link} from 'react-router-dom'
import {
    ImageContainer,
    Image,Heading, PartnersContainer
} from './Partners.styles'

import Partnerimage1 from './../../assets/partner1.jpeg'
import Partnerimage2 from './../../assets/partner2.jpeg'
import coinsniper from './../../assets/coinsniper.png'
import dapp from './../../assets/dapp.png'


export default function Partners() {
    return (
        <div>
        <PartnersContainer>
            <Heading>
                Featured in
            </Heading>
            <hr height='100px'width='50px' color ='#00AD90' position='center' margin-bottom='50px'/> 
            
            <ImageContainer>
                <a href="https://bscproject.org/#/project/931" target="_blank">
                    <Image src={Partnerimage1} alt='' draggable={false} />
                </a>
                <a href="https://www.bsc.news/dashboard" target="_blank">
                    <Image src={Partnerimage2} alt='' draggable={false} />
                </a>
                <a href="" target="_blank">
                    <Image src={coinsniper} alt='' draggable={false} />
                </a>
                <a href="" target="_blank">
                    <Image src={dapp} alt='' draggable={false} />
                </a>
            </ImageContainer>
         
        </PartnersContainer>
        </div>
    )
}

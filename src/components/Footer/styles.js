
import styled from 'styled-components';

import { theme } from './../../globalStyles';
const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position:'left',
    maxWidth: '40rem',
    margin: '2rem auto',
    '@media (min-width: 769px)': {
      margin: '2rem auto 10rem',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginTop: '3rem',
  },
  

  row:{
    display: 'flex',
    position: 'left',
  },
  title: {
    color: '#ffffff',
    fontWeight: 900,
    fontSize: '1.2 rem',
    marginBottom: '0.5rem',
    margin: '2rem auto 10rem',
  },
  link: {
    marginBottom: '0.5rem',
    margin: '2rem auto 10rem',
    fontWeight: 400,
    position:'center',
    marginLeft: '10px',
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  linkIcon: {
    marginRight: '0.5rem',
    minWidth: '24px',
    color: '#000000',
  },
});

export default styles;



export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
  background= '#000000';
  position: "center";
  
 
  @media screen and (max-width: 600px) {
    padding: 4rem 0;
    margin: '2rem auto 10rem',
  }
`;
export const Box = styled.div`
  padding: 80px 60px;
  position: relative;
  bottom: 0;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  // border:2px dashed red;
`;

export const LogoIcon = styled.img`
  margin-right: 1.3rem;
  width: 5rem;
  height: 6rem;
  object-fit: contain;
`;

export const LogoImage = styled.img`
  width: 15rem;
`;   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  position: left;
  
`;
   
export const Row = styled.div`
  display: flex;
  
  position: left;
  justifyContent: 'space-around',
  margin: '2rem auto',
  @media (max-width: 769px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
                           margin: '2rem auto 10rem',
  }
`;
   
export const FooterLink = styled.a`
  color: #FFFFFF;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
 display: flex;
 flexdirection: column;
   text-overflow: ellipsis;
   display: inline;
  &:hover {
      color: #00AD90;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 15px;
  color: #00AD90;
  margin-bottom: 20px;
  font-weight: bold;
`; 

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px 10px;
  border-radius:20px;
  @media screen and (max-width: 900px) {
    height: 20%;
    width: 10%;
  }
`;
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from './../../globalStyles';

export const PartnersContainer = styled.div`
-ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction:column;
  align-items:center;
  padding: 5rem 3rem;
  background: ${theme.other};
  
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content:center;
  
`;

export const Image = styled.img`
  width: 100px;
  height: 50px;
  margin: 20px 10px;
  border-radius:20px;
  @media screen and (max-width: 900px) {
    height: 20%;
    width: 10%;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.4rem;
  align:center;
  color: ${theme.primaryColor};
  fontWeight: 900,
  fontSize: '4 rem',
 
  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

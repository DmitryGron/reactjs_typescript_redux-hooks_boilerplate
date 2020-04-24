import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFound = () => (
  <StyledDiv>
    <StyledH1>404</StyledH1>
    <StyledH4 > Page Not Found </StyledH4>
    <StyledLink to="/registration" className="link">
      Go to Registration page
    </StyledLink>
  </StyledDiv>
);

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #282c34;
    min-height: 100vh;
    color: #fff;
`;

const StyledH1 = styled.h1`
    margin: 0;
    font-size: 192px;
    font-weight: 100;
`;

const StyledH4 = styled.h1`
    font-weight: 100;
    font-size: 19px;
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    padding: 7px 15px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
`;


import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled(Link)`
    margin-left:20px;
`;

const HeaderNavegation = () => {
    return ( 
        <nav>
            <Nav to="/">Home</Nav>
            <Nav to="/bestSale">Best Sale</Nav>
            <Nav to="/themeTour">Theme Tour</Nav>
            <Nav to="/custimized">Custimized</Nav>
            <Nav to="/guideTeam">Guide Team</Nav>
            <Nav to="/touristInformation">Tourist Information</Nav>
            <Nav to="/reviews">Reviews</Nav>
            <Nav to="/contactUs">Contact</Nav>
            <Nav to="/aboutUs">About Us</Nav>
        </nav>
     );
}
 
export default HeaderNavegation;
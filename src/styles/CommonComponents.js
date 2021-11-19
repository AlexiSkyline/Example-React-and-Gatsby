import styled from '@emotion/styled';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export const HeaderPrincipal = styled.header`
    background-color: #222;
    padding: 1rem;

    div {
        max-width: 1200px;
        margin: 0 auto;

        @media ( min-width: 768px ) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    h1 {
        color: #FFF;
        text-align: center;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media ( min-width: 768px ) {
        padding-bottom: 0;
    }
`;

export const NavLink = styled( Link ) `
    color: #FFF;
    font-size: 1.9rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-left:  0;
    }
    &.pagina-actual {
        border-bottom: 2px solid #FFF;
    }
`;

export const ImageBackground = styled( BackgroundImage )`
    height: 700px;
`;

export const TextoImagen = styled.div`
    background-image: linear-gradient( to top, rgba( 34, 49, 63, .75 ), rgba( 34, 49, 63, .75 ) );
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin: 0;

        @media ( min-width: 992px ) {
            font-size: 5.8rem;
        }
    }

    p {
        font-size: 2rem;
        
        @media ( min-width: 992px ) {
            font-size: 2.6rem;
        }
    }
`;
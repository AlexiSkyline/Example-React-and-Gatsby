import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const HeaderPrincipal = styled.header`
    background-color: #333;
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
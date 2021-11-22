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

export const TituloInicio = styled.h2`
    text-align: center;
    font-size: 4rem;
    margin-top: 4rem;
`; 

export const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media ( min-width: 768px ) {
        display: grid;
        grid-template-columns: repeat( 2, 1fr );
        column-gap: 2rem;
    }

    p {
        line-height: 2;
    }
`;

export const EnlaceHome = styled( Link )`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

export const TituloHabitaciones = styled.h2`
    text-align: center;
    margin-top: 5rem;
    font-size: 3rem;
`;

export const Boton = styled( Link )`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba( 44, 62, 80, .85 );
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

export const ContenedorHabitacion = styled.div`
    border: 1px solid #e1e1e1;
    margin-bottom: 2rem;

    div {
        padding: 3rem;
    }

    h3 {
        font-size: 3rem;
    }
`;

export const ListadoHabitaciones = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media ( min-width: 768px ) {
        display: grid;
        grid-template-columns: repeat( 3, 1fr );
        column-gap:  3rem;
    }
`;

export const ImagenHabitacion = styled( BackgroundImage )`
    height: 250px;
`;

export const MainHabitacion = styled.main`
    margin: 0 auto;
    max-width: 1200px;
    width: 95%;

    h1 {
        text-align: center;
        margin-top: 4rem;
    }
`;
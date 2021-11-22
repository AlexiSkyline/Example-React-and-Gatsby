import React from 'react'
import { DerechosReservados, EnlaceHome, ContainerFooter } from '../styles/CommonComponents';
import { Navegacion } from './Navegacion';

export const Footer = ({ title }) => {

    const year = new Date().getFullYear();

    return (
        <>
            <ContainerFooter>
                <div>
                    <Navegacion />

                    <EnlaceHome to='/'>
                        <h1>Hotel Gatsby</h1>
                    </EnlaceHome>
                </div>
            </ContainerFooter>
            <DerechosReservados>{ title }. Todos los derechos Reservados { year } &copy;</DerechosReservados>
        </>
    );
}

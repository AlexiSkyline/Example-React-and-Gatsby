import React from 'react'
import { EnlaceHome, HeaderPrincipal } from '../styles/CommonComponents';
import { Navegacion } from './Navegacion';

export const Header = () => {
    return (
        <HeaderPrincipal>
            <div>
                <EnlaceHome to='/'>
                    <h1>Hotel Gatsby</h1>
                </EnlaceHome>

                <Navegacion />
            </div>
        </HeaderPrincipal>
    );
}

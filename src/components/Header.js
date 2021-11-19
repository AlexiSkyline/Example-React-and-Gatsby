import React from 'react'
import { HeaderPrincipal } from '../styles/CommonComponents';
import { Navegacion } from './Navegacion';

export const Header = () => {
    return (
        <HeaderPrincipal>
            <div>
                <h1>Hotel Gatsby</h1>

                <Navegacion />
            </div>
        </HeaderPrincipal>
    );
}

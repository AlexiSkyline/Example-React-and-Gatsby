import React from 'react';
import { Nav, NavLink } from '../styles/CommonComponents';

export const Navegacion = () => {
    return (
        <Nav>
            <NavLink 
                to={ '/' }
                activeClassName='pagina-actual'
            >
                Inicio
            </NavLink>

            <NavLink 
                to={ '/nosotros' }
                activeClassName='pagina-actual'
            >
                Nosotros
            </NavLink>
        </Nav>  
    );
}

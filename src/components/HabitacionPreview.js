import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Boton, ContenedorHabitacion, ImagenHabitacion } from '../styles/CommonComponents';

export const HabitacionPreview = ({ habitacion }) => {
    
    const  { contenido, imagen, titulo, slug } = habitacion;

    return (
        <ContenedorHabitacion>
            <ImagenHabitacion fluid={ imagen.fluid }/>
            <div>
                <h3>{ titulo }</h3>
                <p>{ contenido }</p>

                <Boton to={ slug }>Ver Habitacion</Boton>
            </div>
        </ContenedorHabitacion>
    );
}

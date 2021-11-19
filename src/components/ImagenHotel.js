import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ImageBackground, TextoImagen } from '../styles/CommonComponents';

export const ImagenHotel = () => {

    const { image } = useStaticQuery( graphql`
        query {
            image: file( relativePath:{ eq: "8.jpg"} ) {
                    sharp: childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    ` );

    return (
        <ImageBackground tag='section' fluid={ image.sharp.fluid } fadeIn='soft'>
            <TextoImagen>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>El mejor hotel para tus vacaciones</p>
            </TextoImagen>
        </ImageBackground>
    );
}

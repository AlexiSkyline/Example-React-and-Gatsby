import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-plugin-image';
import { TextoInicio, TituloInicio } from '../styles/CommonComponents';
import BackgroundImage from 'gatsby-background-image';

export const ContenidoInicio = () => {

    const informacion = useStaticQuery( graphql`
    query {
        allDatoCmsPagina( filter: { slug: { eq: "inicio" } } ) {
                nodes {
                        titulo
                        contenido
                        imagen {
                            fluid {
                                ...GatsbyDatoCmsFluid
                            }
                        }
                }
        }
    }` );

    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];

    return (
        <Fragment>
            <TituloInicio>{ titulo }</TituloInicio>   

            <TextoInicio>
                <p>{ contenido }</p>
                <BackgroundImage fluid={ imagen.fluid }/>
            </TextoInicio>
        </Fragment>
    )
}

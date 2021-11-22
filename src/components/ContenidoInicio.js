import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Contenido, TituloInicio } from '../styles/CommonComponents';
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
        }` 
    );

    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];

    return (
        <Fragment>
            <TituloInicio>{ titulo }</TituloInicio>   

            <Contenido>
                <p>{ contenido }</p>
                <BackgroundImage fluid={ imagen.fluid }/>
            </Contenido>
        </Fragment>
    );
}

import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Contenido, TituloInicio } from '../styles/CommonComponents';

export const ContenidoNosotros = () => {

    const resultado = useStaticQuery( graphql`
        query {
            allDatoCmsPagina( filter: { slug: { eq: "nosotros" } } ) {
                    nodes {
                            titulo
                            contenido
                            imagen {
                                fluid( maxWidth: 1200 ) {
                                    ...GatsbyDatoCmsFluid
                                }
                            }
                    }
            }
        }` 
    );

    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];
    
    return (
        <Fragment>
            <TituloInicio>{ titulo }</TituloInicio>

            <Contenido>
                <p>{ contenido }</p>
                <BackgroundImage fluid={ imagen.fluid }/>
            </Contenido>
        </Fragment>
    )
}

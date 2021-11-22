import React from 'react';
import { graphql,  } from 'gatsby';
import { Layout } from './Layout';
import { ImageBackground, MainHabitacion } from '../styles/CommonComponents';

export const query = graphql`
    query( $slug: String! ) {
        allDatoCmsHabitacion( filter: { slug: { eq: $slug } } ) {
                nodes {
                    titulo
                    slug
                    contenido
                    imagen {
                        fluid( maxWidth: 1200 ) {
                        ...GatsbyDatoCmsFluid
                        }
                    }
                }
        }
    }
`;

export default function HabitacionesTemplete ({ data:{ allDatoCmsHabitacion: { nodes } } }) {

    const { titulo, contenido, imagen } = nodes[0];
    return (
        <Layout>
            <MainHabitacion>
                <h1>{ titulo }</h1>
                <p>{ contenido }</p>
                <ImageBackground fluid={ imagen.fluid }/>
            </MainHabitacion>
        </Layout>
    );
}

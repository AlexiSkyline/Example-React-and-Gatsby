import React from 'react';
import { graphql,  } from 'gatsby';

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

export default function HabitacionesTemplete ({ data }) {

    console.log( data );
    
    return (
        <h1>
            habitaciones.js            
        </h1>
    )
}

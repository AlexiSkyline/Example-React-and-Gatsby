import * as React from 'react';
import { Layout } from '../components/Layout';
import { ImagenHotel } from '../components/ImagenHotel';
import { ContenidoInicio } from '../components/ContenidoInicio';
import { useHabitaciones } from '../hooks/useHabitaciones';
import { ListadoHabitaciones, TituloHabitaciones } from '../styles/CommonComponents';
import { HabitacionPreview } from '../components/HabitacionPreview';

const IndexPage = () => {

  const habitaciones = useHabitaciones();
   
  return (
      <Layout>
          <ImagenHotel />
    
          <ContenidoInicio />

          <TituloHabitaciones>
              Nuestras Habitaciones
          </TituloHabitaciones>

          <ListadoHabitaciones>
            { habitaciones.map( habitacion => (
                <HabitacionPreview 
                    key={ habitacion.id }
                    habitacion={ habitacion }
                />
            ))}
          </ListadoHabitaciones>
      </Layout>
  );
}

export default IndexPage;

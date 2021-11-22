import React from 'react';
import { Helmet } from 'react-helmet';
import { useSeo } from '../hooks/useSeo';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ( props ) => {

    const seo = useSeo();

    const { siteName, fallbackSeo: { description, title } } = seo;
    
    return (
        <>
            <GlobalStyles />
            
            <Helmet>
                <title>{ title }</title>
                <meta name="description" content={ description } />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header />
            { props.children }

            <Footer 
                title={ title }
            />
        </>
    )
}

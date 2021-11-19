import styled from '@emotion/styled';

export const HeaderPrincipal = styled.header`
    background-color: #333;
    padding: 1rem;

    div {
        max-width: 1200px;
        margin: 0 auto;

        @media ( min-width: 768px ) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    h1 {
        color: #FFF;
        text-align: center;
    }
`;
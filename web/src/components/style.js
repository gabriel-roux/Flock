import styled from "styled-components";



export const PriceBoxComponent = styled.div`

    width: 18.75rem;
    margin-right: 1rem;
    height: 22rem;
    border-radius: 6px;
    background: linear-gradient(180deg, #000000 0%, #262626 50%, #000000 100%);
    overflow: hidden;

    header {
        width: 100%;
        height: 100px;
        background: #008AC1;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            color: #fff;
            font-size: 1.25rem;
            text-align: center;
            font-family: 'Be Vietnam Pro', sans-serif;
        }

    }

    main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 1rem;


        h1 {
            color: #fff;
            font-size: 3rem;
            font-weight: 900;
            text-align: center;
            font-family: 'Be Vietnam Pro', sans-serif;
        }

        p {
            color: #00B6FF;
        }

        button {
            margin-top: .5rem;
            background: #00B6FF;
            width: 85%;
            height: 3.5rem;
            border-radius: 99px;
            color: #fff;
            font-size: 1rem;
            font-weight: 700;
            font-family: 'Be Vietnam Pro', sans-serif;
            transition: all 300ms ease;
            cursor: pointer;

            &:hover {
                background-color: #00C8FE;
            }

        }
    }
`

export const AdvantageBoxComponent = styled.div`

    width: 300px;
    margin-right: 1rem;
    height: 210px;
    padding: .5rem 1rem;

    border-radius: 6px;
    background: #00000050;
    overflow: hidden;

    main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1rem;


        h1 {
            color: #fff;
            font-size: 1.25rem;
            font-weight: 700;
            text-align: center;
            font-family: 'Be Vietnam Pro', sans-serif;
        }

        p {
            color: #E0E0E0;
            margin: .5rem;
            line-height: 1;
            text-align: center;
            font-size: 1rem;
        }
    }

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`

export const FaqBoxComponent = styled.div`


    width: 42.5rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    @media screen and (max-width: 1100px) {
        width: 100%;
    }
`

export const FaqBoxCard = styled.div`

    height: 50px;
    width: 100%;
    border-bottom: 1px solid #424242;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
    cursor: pointer;

    h1 {
        font-size: 1.25rem;
        color: #fff;
    }

    button {

        background-color: transparent;
        border: 0;
        color: #fff;
    }
`

export const FaqBoxDesc = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 140px;
    @media screen and (max-width: 1100px) {
        height: 250px;
    }

    animation: openAnimation 200ms ease;
    margin-bottom: 1rem;

    p {
        color: #fff;
    }

    @keyframes openAnimation {
        0% {
            opacity: 0;
            height: 0;
        }

        100% {
            opacity: 1;
            height: 140px;
            @media screen and (max-width: 1100px) {
                height: 250px;
            }
        }
    }

`

export const Footer = styled.div`

    width: 100%;
    height: 20rem;
    padding: 1rem;
    background: url(${props => props.background});
    background-size: cover;
    margin-top: 6rem;

    @media screen and (max-width: 1100px) {
        height: 30rem;
    }
`
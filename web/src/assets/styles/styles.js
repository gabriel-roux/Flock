import styled from 'styled-components'
import { css } from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1180px;
    margin: 0 auto;

`

export const Container2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1180px;
    margin: 0 auto;

    @media screen and (max-width: 1100px) {
        flex-direction: column;
        gap: 2rem;
    }
`

export const Row = styled.div`

    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1100px) {
      flex-direction: column;
    }
`

export const Column = styled.div`
    width: calc(100% / ${props => props.sz});
    max-width: calc(100% / ${props => props.sz});
    
    ${props => props.position && css`
        display: flex;
        flex-direction: ${props => props.position === 'center' ? 'column' : 'row'};
        align-items: center;
        justify-content: ${props => props.position === 'end' ? 'flex-end' : props.position === 'start' ? 'flex-start' : props.position === 'center' ? 'center' : 'space-between'};
    `}
    
`

export const Header = styled.header`
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.bgImage});
    background-size: cover;


    ul {
        padding: 0;
        list-style: none;

        li {
            display: inline;
            margin-right: 2rem;
            cursor: pointer;

            a {
                font-family: 'Be Vietnam Pro';
                font-weight: 600;
                font-size: 18px;
                line-height: 30px;
                color: #CCCCCC;
                transition: color 200ms ease;

                &:hover {
                    color: #00B6FF;
                }
            }
        }
    }

    .letsStart {
        transform: translateY(25px);
        padding: 1rem;
        font-family: 'Be Vietnam Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 25.659px;
        line-height: 100%;
        color: #000;
        background: linear-gradient(90deg, #00B6FF, #9E00FF);
        background-size: 300% 300%;
        animation: bgAnim 3s ease infinite;
        border-radius: 50px;
    }

    @keyframes bgAnim {
          0% {
            background-position: 50% 100%;
          }
      
          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 50% 100%;
          }
        }
`

export const Title = styled.h1`
        max-width: 14ch;

        font-family: 'Be Vietnam Pro';
        font-style: normal;
        font-weight: 900;
        font-size: 60px;
        line-height: 100%;

        text-align: center;
        letter-spacing: -0.025em;
        color: #FFFFFF;

        span {
          font-weight: 900;
          -webkit-text-fill-color:  transparent;
          animation: textAnim 3s ease infinite;
          background: linear-gradient(90deg, #00B6FF, #9E00FF);;
          -webkit-background-clip: text;
          background-size: 300% 300%;
        }

        @keyframes textAnim {
          0% {
            background-position: 50% 100%;
          }
      
          50% {
            background-position: 100% 100%;
          }
      
          100% {
            background-position: 50% 50%;
          }
        }
`

export const Description = styled.p`
    max-width: 35ch;
    font-family: 'Be Vietnam Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 100%;
    text-align: center;
    color: #C6C6C6;
    margin-top: 1rem;
`

export const Body = styled.main`
    max-width: 100%;

`

export const PreviewSiteCard = styled.div`

    width: 98%;
    height: 45rem;
    border-radius: 4px;
    background: url(${props => props.siteImage});
    background-size: cover;
    transition: all 1500ms ease;

    &:hover {
      background-position-y: -${props => props.maxHeight};
    }

    @media screen and (max-width: 1100px) {
      height: 30rem;
    }

`

export const Button = styled.button`   
    transform: translateY(25px);
    padding: 1rem 2rem;
    font-family: 'Be Vietnam Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    outline: #000;
    border: 0;
    cursor: pointer;
    line-height: 100%;
    color: #000;
    background: linear-gradient(90deg, #00B6FF, #9E00FF);
    background-size: 300% 300%;
    animation: bgAnim 3s ease infinite;
    border-radius: 50px;

`

export const Advantages = styled.div`

    width: 650px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.78rem;

    @media screen and (max-width: 1100px) {
      width: 100%;
    }

    &:hover .column1 h1, &:hover .column2 h1 {
      color: #00B6FF;

    }

      .column1 {
        width: 88px;
        display: flex;
        padding-top: 1rem;
        justify-content: center;
        align-items: flex-start;
        border-top: 2px solid #00B6FF;
        h1 {
          color: #fff;
          transition: all 300ms ease;
        }
      }
      
      .column2 {
        width: 550px;
        display: flex;
        padding-top: 1rem;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        border-top: 2px solid #00B6FF;

        h1 {
          color: #fff;
          font-size: 1.6rem;
          text-align: center;
          transition: all 300ms ease;
        }

        p {
          color: #888;
        }
      }
      
`

export const AdvantagesContent = styled.div`

    display: flex;
    margin-top: 2rem;
    flex: 1;
    flex-direction: column;
    width: 100%;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;

    .column {
      display: flex;
      flex: 1;
      align-items: flex-start;
      justify-content: center;
      @media screen and (max-width: 1100px) {
          flex-direction: column;
          gap: 2rem;
      }
    }

`

export const AdvantagesForm = styled.form`

    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2rem;

    @media screen and (max-width: 1100px) {
      align-items: center;
      max-width: 100%;
    }

    div {
      margin-top: 2rem;
      h4 {
        color: #fff;
      }

      input {
        background-color: transparent;
        border: 1.5px solid #404040;
        border-radius: 6px;
        width: 415px;
        height: 50px;
        color: #fff;
        font-size: 1.2rem;
        margin: .5rem 0;
        padding: 1rem;
        transition: all 200ms ease;

        @media screen and (max-width: 1100px) {
          width: 90%;
        }

        &:focus {
          box-shadow: 0px 0px 0px 2px #00B6FF;
          outline: 0;
        }
      }

      textarea {
        background-color: transparent;
        border: 1.5px solid #404040;
        border-radius: 6px;
        width: 415px;
        height: 10rem;
        padding: 1rem;
        font-size: 1.2rem;
        resize: none;
        transition: all 200ms ease;
        margin: .5rem 0;
        font-family: 'Be Vietnam Pro', sans-serif;

        &:focus {
          box-shadow: 0px 0px 0px 2px #00B6FF;
          outline: 0;
        }

        @media screen and (max-width: 1100px) {
          width: 100%;
        }
      }
    }

    
    button {
        width: 415px;
        background-color: #00B6FF;
        border-radius: 8px;
        font-weight: bold;
        font-size: 1.25rem;
        color: #fff;
        height: 50px;
        border: 0;
        margin: 2rem 0;
        cursor: pointer;
        transition: all 300ms ease;

        &:hover {

          background-color: #00C8FE;

        }

        align-items: flex-start;

        @media screen and (max-width: 1100px) {
          width: 98%;
        }
      }

`

export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 99;
  background: linear-gradient(125deg, #8D37FC, #3D96BC);
  border-radius: 50px;
  color: #ffffff;
  text-decoration: none;
  width: 50px;
  height: 50px;
  font-size: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 25px -6px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 25px -6px rgba(0,0,0,1);
  box-shadow: 0px 0px 25px -6px rgba(0,0,0,1);
  animation: pulse 5s ease infinite;

  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(90, 18, 158, 1);
    }
    
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 20px rgba(90, 18, 158, 0);
    }
    
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(90, 18, 158, 0);
    }
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

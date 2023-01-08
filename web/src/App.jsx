import { GlobalStyle } from './assets/styles/globals.js'
import { Advantages, AdvantagesContent, AdvantagesForm, Body, Button, Column, Container, Container2, Description, Header, PreviewSiteCard, Row, Title, WhatsAppButton } from './assets/styles/styles'

import Background from './assets/imgs/background.png'
import BackgroundBody from './assets/imgs/background-body.png'
import Logo from './assets/imgs/logo.png'
import { PhoneCall } from 'phosphor-react'
import PriceBox from './components/pricebox.jsx'
import AdvantageBox from './components/advantagesBox.jsx'

import Analytcs from './assets/imgs/analytcs.svg'
import Star from './assets/imgs/star.svg'
import Message from './assets/imgs/message.svg'
import Search from './assets/imgs/search.svg'
import Chat from './assets/imgs/chat.svg'
import Crosshair from './assets/imgs/crosshair.svg'
import { FaqBox } from './components/faqbox.jsx'

import Site1 from './assets/imgs/site1.png'
import Site2 from './assets/imgs/site2.png'
import Site3 from './assets/imgs/site3.png'

import ScrollAnim from './assets/imgs/scroll.gif'
import { useRef } from 'react'

import { WhatsappLogo } from 'phosphor-react'
import { Footer } from './components/style.js'

function App() {

  const servicosForm = useRef(null)
  const contatosForm = useRef(null)


  return (
    <div>
      <GlobalStyle bgImage={BackgroundBody} />
      <Header bgImage={Background}>
        <Container>
          <Row>

            <Column position={'start'} sz={2}>
              <img src={Logo} width={150} />
            </Column>
            <Column position={'end'} sz={2}>
              <ul>
                <li>
                  <a>Inicio</a>
                </li>
                <li onClick={() =>
                  servicosForm.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest',
                  })}
                >
                  <a>Serviços</a>
                </li>
                {/* <li>
                  <a>Player</a>
                </li> */}
                <li onClick={() =>
                  contatosForm.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest',
                  })}
                >
                  <a>
                    <PhoneCall
                      size={21}
                    /> Contate-nos
                  </a>
                </li>
              </ul>
            </Column>

          </Row>
        </Container>

        <Container>
          <Row>
            <Column sz={1} position={'center'}>
              <Title style={{ marginTop: '7rem' }}>
                ONE <span>BRILLIANT</span> IDEA CAN CHANGE YOUR LIFE.
              </Title>
              <Description>
                A melhor experiência para seu cliente
              </Description>
              <img
                style={{
                  marginTop: '16%',
                  opacity: '0.3'
                }}
                src={ScrollAnim}
                width={50}
                height={50}
              />
            </Column>
          </Row>
        </Container>
      </Header>
      <Body>
        <Container style={{ marginTop: '6rem' }}>
          <Row>
            <Column sz={1} position={'center'}>
              <Title style={{ maxWidth: '17ch' }}>
                Seu site com um novo design <span>único</span> e <span> moderno</span>
              </Title>
              <Description>
                Ganhe seu proprio design feito por nós ao iniciarmos seu site
              </Description>
            </Column>
          </Row>
        </Container>
        <Container style={{ marginTop: '4rem' }}>
          <Row>
            <Column sz={1} position={'start'}>
              <PreviewSiteCard siteImage={Site1} maxHeight='1600px' />
            </Column>
            <Column sz={1} position={'start'}>
              <PreviewSiteCard siteImage={Site2} maxHeight='1280px' />
            </Column>
          </Row>
        </Container>
        <Container>
          <Column sz={1} position={'start'} style={{ marginTop: '1.5rem' }}>
            <PreviewSiteCard siteImage={Site3} maxHeight='3430px' style={{ width: '99%', height: '30rem' }} />
          </Column>
        </Container>
        <Container>
          <Column sz={1} position={'center'} style={{ marginTop: '1.5rem' }}>
            <Button onClick={() => window.location.href = 'https://wa.me/5547996734942?text=Ola%2C+tudo+bem%3F+Gostaria+de+fazer+um+or%C3%A7amento+com+voc%C3%AAs%21+'}>
              Vamos começar
            </Button>
          </Column>
        </Container>
        <Container style={{ marginTop: '6rem' }}>
          <Row>
            <Column sz={1} position={'center'}>
              <Title style={{ maxWidth: '17ch' }}>
                Uma média de nossos <span>preços</span>
              </Title>
              <Description style={{ maxWidth: '50ch', lineHeight: '150%' }}>
                Aqui a baixo você encontra uma média de nossos preços mínimos, mas o real preço é negociado apenas com o cliente. A Flock, além de apresentar o melhor desempenho em sites, tem um preço super justo e manutenção grátis durante 30 dias.
              </Description>
            </Column>
          </Row>
        </Container>
        <Container2 ref={servicosForm} style={{ marginTop: '5rem' }}>
          <PriceBox link='https://wa.me/5547996734942?text=Ola%2C+tudo+bem%3F+Gostaria+de+falar+sobre+o+or%C3%A7amento+de+Landing+Pages%21+' title='Criação de sites/landing pages a partir de:' price12x='R$49,90' price='R$499,90' />
          <PriceBox link='https://wa.me/5547996734942?text=Ola%2C+tudo+bem%3F+Gostaria+de+falar+sobre+o+or%C3%A7amento+de+E-Commerce%21+' title='Criação de marketplaces/ecommerce a partir de:' price12x='R$197,90' price='R$1.900,00' />
          <PriceBox link='https://wa.me/5547996734942?text=Ola%2C+tudo+bem%3F+Gostaria+de+falar+sobre+o+or%C3%A7amento+de+Apps%2FPlataformas%21+' title='Criação de apps/plataformas complexas a partir de:' price12x='R$357,90' price='R$3.500,00' />
        </Container2>

        <Container style={{ marginTop: '6rem' }}>
          <Row>
            <Column sz={1} position={'center'}>
              <Title style={{ maxWidth: '17ch' }}>
                Um site na <span>velocidade máxima</span>, só a Flock tem

              </Title>
              <Description style={{ maxWidth: '50ch', lineHeight: '150%' }}>
                Você sabia que um site lento pode te levar a perder mais de 80% das pessoas que entram nele? A Flock é uma agência digital especializada em criar sites rápidos programados. Não só velocidade, mas estamos sempre atentos na otimização de seu site. Afinal... Por que um site rápido é importante?              </Description>
            </Column>
          </Row>
        </Container>
        <Container style={{ marginTop: '6rem' }}>
          <Advantages>
            <div className='column1'>
              <h1>01</h1>
            </div>
            <div className='column2'>
              <h1>Aumenta a retenção do seu público</h1>
              <p>Existem estudos que mostram que pelo menos 80% das pessoas deixam de continuar navegando em sites nos seus primeiros 3 segundos. Se você consegue surpreender seu prospect logo nos primeiros segundos de experiência, você provavelmente conseguirá ganhar um novo cliente</p>
            </div>
          </Advantages>
        </Container>
        <Container style={{ marginTop: '2rem' }}>
          <Advantages>
            <div className='column1'>
              <h1>02</h1>
            </div>
            <div className='column2'>
              <h1>Melhor experiência para seu cliente</h1>
              <p>Você provavelmente ja deixou de entrar em diversos sites por conta da demora de carregamento ou por ele ser muito “Complexo” de se mexer.  Um site mais rápido e otimizado transmite da melhor forma a melhor experiência do seu cliente / prospect / Lead.</p>
            </div>
          </Advantages>
        </Container>
        <Container style={{ marginTop: '2rem' }}>
          <Advantages>
            <div className='column1'>
              <h1>03</h1>
            </div>
            <div className='column2'>
              <h1>Mais posicionamento no mercado</h1>
              <p>Um site de competência alta, ou seja: Profissional, tem de transparecer, não apenas para seus concorrentes, mas também para clientes, autoridade no mercado. Faça parte da minoria e faça agora mesmo um orçamento conosco.</p>
            </div>
          </Advantages>
        </Container>
        <Container style={{ marginTop: '2rem' }}>
          <Advantages>
            <div className='column1'>
              <h1>04</h1>
            </div>
            <div className='column2'>
              <h1>O Google pede isso</h1>
              <p>Em meados de 2010, o Google anunciou que um dos fatores mais importantes para o seu site ter o maior posicionamento dos mecanismos de buscas, seria a otimização para abertura do site, quanto mais rápido, mais rankeado.</p>
            </div>
          </Advantages>

        </Container>
        <Container style={{ marginTop: '2rem' }}>

          <Button onClick={() => window.location.href = 'https://wa.me/5547996734942?text=Ola%2C+tudo+bem%3F+Gostaria+de+fazer+um+or%C3%A7amento+com+voc%C3%AAs%21+'} style={{ fontSize: '1.5rem' }}>
            FAZER ORÇAMENTO
          </Button>

        </Container>

        <Container
          ref={contatosForm}
          style={{
            background: '#18181865',
            border: '1px solid #383838',
            flexDirection: 'column',
            marginTop: '6rem',
            padding: '4rem 2rem'
          }}
        >
          <Row>
            <Column sz={1} position={'center'} >
              <Title style={{ maxWidth: '17ch' }}>
                Faça agora mesmo o seu{' '}
                <span>orçamento</span>
              </Title>
            </Column>
          </Row>
          <Row style={{ marginTop: '3rem' }}>
            <Column sz={1.5} position={'center'} >
              <Title style={{ fontSize: '2rem', textAlign: 'left', maxWidth: '50ch' }}>
                Trabalhar com a Flock é sempre estar um passo a frente da <span>concorrência</span>
              </Title>
              <Description style={{ textAlign: 'left', maxWidth: '50ch' }}>
                <span style={{ color: '#008AC1' }}>TER UM SITE BOM SIGNIFICA:</span> Reduzir custos com publicidade, Transmitir a credibilidade do negócio, Ficar acessível aos clientes a qualquer momento, Posicionar a marca no mercado, Ser encontrado no Google, Aumentar as vendas e Muito mais!
                <br /><br />
                Confira as principais vantagens da Flock na criação de seu site.
              </Description>

              <AdvantagesContent>

                <div className='column'>
                  <AdvantageBox
                    title='Alta conversão'
                    desc='Criamos o seu Site com foco em resultados e conversão'
                    imgSrc={Analytcs}
                    first
                  />
                  <AdvantageBox
                    title='Segurança verificada'
                    desc='A Flock respeita a segurança e a privacidade de todos'
                    imgSrc={Crosshair}
                  />
                </div>
                <div className='column'>
                  <AdvantageBox
                    title='Entrega super rápida'
                    desc='Um prazo mínimo de 5 dias úteis para a entrega completa do site'
                    imgSrc={Message}
                  />
                  <AdvantageBox
                    title='Suporte 24 horas'
                    desc='Oferemos suporte 24 horas para todos nossos clientes'
                    imgSrc={Chat}
                  />
                </div>
                <div className='column'>
                  <AdvantageBox
                    title='Site de qualidade máxima'
                    desc='Garantimos dedicação máxima para a melhor qualidade e entrega de todo o mercado'
                    imgSrc={Star}
                  />
                  <AdvantageBox
                    title='Otimização para buscas'
                    desc='Criamos seu site e o otimizamos para ele ficar no topo das buscas do Google, por exemplo'
                    imgSrc={Search}
                  />
                </div>
              </AdvantagesContent>
            </Column>
            <Column
              sz={1}
              position={'center'}
              style={{
                background: '#4D4D4D50',
                padding: '2rem',
                borderRadius: '8px',
                maxWidth: '90%'
              }}
            >
              <Title style={{ fontSize: '1.7rem', width: '100%' }}>
                Preencha os campos abaixo que você será atendido <span>da melhor forma:</span>
              </Title>

              <Description>
                A Flock garante e protege todos os seus dados sem invasão de privacidade
              </Description>

              <AdvantagesForm>
                <div>
                  <h4>
                    Preenche seus dados para contato
                  </h4>
                  <input type='text' placeholder='Nome' />
                  <input type='email' placeholder='Email' />
                  <input type='text' placeholder='Celular' />
                </div>
                <div>
                  <h4>
                    Me diga: Como você quer o seu site?
                  </h4>
                  <textarea type='text' placeholder='Digite aqui' />
                </div>
                <div>
                  <h4>
                    O quanto você está disposto a investir nele?
                  </h4>
                  <input type='text' placeholder='Valor aqui' />
                </div>

                <button>FAZER ORÇAMENTO</button>
              </AdvantagesForm>
            </Column>
          </Row>
        </Container>
        <Container style={{ marginTop: '6rem' }}>
          <Row>
            <Column sz={1} position={'center'}>
              <Title style={{ maxWidth: '17ch' }}>
                Ficou alguma <span>dúvida?</span>

              </Title>
              <Description style={{ maxWidth: '50ch', lineHeight: '150%' }}>
                Check out our FAQ section to see if we can help.
              </Description>

              <div style={{ marginTop: '3rem' }}>

                <FaqBox
                  question='O que é a Flock? Como funciona o seu trabalho?'
                  answer='- Somos uma agência de sites. Criamos seu site na velocidade máxima. A Flock está preparada para qualquer seja o desafio. Todos nossos projetos são feitos em uma linguagem na qual apenas APLICATIVOS são feitos, react js. Isso significa que conseguimos otimizar os códigos programados de seu site, fazendo com que ele leia mais rápido. Não trabalhamos com wordpress, até mesmo porque projetos complexos e bem feitos são necessários serem programados. A Flock é uma agência do Brasil que foca em velocidade e conversão!'
                />
                <FaqBox
                  question='Como funciona o meio de pagamento da Flock?'
                  answer='- Funciona assim: Você paga um valor que da pro seu bolso e paga o resto quando o projeto for finalizado. O Cliente opita sua melhor forma de pagamento e preço inicial. Oferecemos a opção: Cartão de crédito / débito; Píx ou boleto. Faça um orçamento ainda hoje e garanta um site impecável em mãos.'
                />
                <FaqBox
                  question='Qual o prazo de entrega?'
                  answer='- A Flock sempre define isso de acordo com a complexidade do projeto. Porém, sites, landing page, um prazo de 2 a 5 dias.'
                />
                <FaqBox
                  question='A Flock faz o responsivo também?'
                  answer='- Sim, para todos dispositivos móveis, principalmente para celulares.'
                />
                <FaqBox
                  question='A Flock possui planos mensais?'
                  answer='- Por enquanto ainda não disponibilizamos planos mensais. Mas garantimos que 1 único serviço e gasto não precisará de manutenções!'
                />

              </div>
            </Column>
          </Row>
        </Container>
        <Footer background={Background}>
          <Container>
            <Row>
              <Column sz={1} position={'center'}>
                <Description style={{ maxWidth: '55ch', lineHeight: '200%' }}>
                  FAÇA UM ORÇAMENTO HOJE E TENHA O SEU SITE NA VELOCIDADE MÁXIMA
                </Description>
                <Title style={{ maxWidth: '25ch'}}>
                  Explore o máximo de <span>seu site</span>
                </Title>
                <Button onClick={() => window.location.href = 'https://wa.me/5547996734942?text=Ola%2C+tudo+bem%3F+Gostaria+de+fazer+um+or%C3%A7amento+com+voc%C3%AAs%21+'} style={{ fontSize: '1.5rem' }}>
                  ENTRE EM CONTATO AGORA
                </Button>
              </Column>
            </Row>
          </Container>
        </Footer>
      </Body>
      <WhatsAppButton
        href="https://wa.me/5547996734942?text=Ola%2C+tudo+bem%3F+Gostaria+de+falar+sobre+um+or%C3%A7amento+com+voc%C3%AAs%21+"
      >
        <WhatsappLogo
          weight="thin"
          sx={{
            fontSize: '36px',
            color: '#fff'
          }}
        />
      </WhatsAppButton>
    </div >
  )
}

export default App

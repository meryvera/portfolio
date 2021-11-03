import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React from 'react'; 
import bq from './assets/bq.png';
import bqfb from './assets/bqfb.png';
import travelers from './assets/travelers.png';
import dl from './assets/dl.png';
import me from './assets/me.png';
import cipher from './assets/cipher.png';
import chat from './assets/chat.png';
import express from './assets/express.png';
import node from './assets/node.png';
import wordpress from './assets/wordpress.png'
import { Nav, Navbar, Container, Card } from 'react-bootstrap';
import bubble from './assets/bubble.png';  
import { ModalInfo } from './components/Modal';

function App() {

  return (

    <div className="hero">
   
      <Navbar bg="dark" variant="dark" style={{padding:'10px 5px', position:'fixed', width:'100%', zIndex:'9'}} className='navBar bg-dark'>
        <Container bg="dark" variant="dark" className='d-flex justify-content-between bg-dark' style={{padding:'0 5px'}}>
          <Navbar.Brand href="#home" className='fs-3' style={{fontFamily:'Lobster'}}>
            MeryV
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <b><Nav.Link href="#sobre-mi" style={{fontFamily:'Open Sans', color:'#fbfcfd'}}>Sobre mi</Nav.Link></b>
            <b><Nav.Link href="#portafolio" style={{fontFamily:'Open Sans', color:'#fbfcfd'}}>Portafolio</Nav.Link></b>
            <b><Nav.Link href="#experiencia" style={{fontFamily:'Open Sans', color:'#fbfcfd'}}>Experiencia</Nav.Link></b>
            <b><Nav.Link href="#educacion" style={{fontFamily:'Open Sans', color:'#fbfcfd'}}>Educación</Nav.Link></b>
          </Nav>
        </Container>
      </Navbar>
      <article className="content">
        <small>Welcome to my site</small>
        <h1 style={{fontSize:'5.5rem', fontFamily:'Sansita'}}>Mery Vera</h1>
        <button>Contact me</button>
      </article>

      <article className='bubbles'>
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
      </article> 
     
      <article className='d-block w-100' style={{position:'absolute', top:'35rem'}}>
        <section id='sobre-mi' className='px-5 py-5'>
          <h2 className='subtitle mb-4'>Sobre mi</h2>
          <div className='d-flex' style={{width:'100%'}}>
            <figure style={{width:'45%', maxHeight:'300px'}} className='me-5'>
              <img src={me} alt=""  style={{width:'100%', zIndex:'1', height:'100%', objectFit:'cover'}}/>
            </figure>
            <p style={{width:'45%'}}>Soy desarrolladora Front-End con 5 años de experiencia laboral en consultoras . A través del desarrollo de soluciones y mejoras tecnológicas, busco ser parte del proceso de transformación digital que atraviesan  las empresas para impactar positivamente en su crecimiento y en el de sus clientes.
              Además,  soy licenciada en Contabilidad con conocimientos en marketing digital.</p>
          </div>
        </section>
        <section id='portafolio' className='px-5 py-5' style={{background:'#ced4da'}}>
          <h2 className='subtitle mb-4'>Portafolio</h2>
          <div className="section-content d-flex flex-wrap  justify-content-center">

            <Card className='m-3' style={{width: "300px", height: "250px", background:'#f0f0f0', borderRadius:'30px'}}>{/* #b4b4b4 */}
              <figure className="figure-healht" style={{width: "100%", height: "195px", marginBottom:'0'}}>
                <img src={bq} style={{width: "100%", objectFit:'fill', height: "195px", borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}} alt="burger queen" />
              </figure>
              <div className='d-flex' style={{ padding:'0', margin:'auto'}}>
                <ModalInfo id={1} />
                <a href='https://lim014-bq-api-client.web.app/' target='_blank' type="button" className="btn" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Link</a>
              </div>
            </Card>

            <Card className='m-3' style={{width: "300px", height: "250px", background:'#f0f0f0', borderRadius:'30px'}}>
              <figure className="figure-healht" style={{width: "100%", height: "195px", marginBottom:'0'}}>
                <img src={travelers} style={{width: "100%", objectFit:'fill', height: "195px", borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}} alt="burger queen" />
              </figure>
              <div className='d-flex' style={{ padding:'0', margin:'auto'}}>
                <ModalInfo id={2} />
                <a href='https://mairelis-montilla.github.io/LIM014-social-network/#/login' target='_blank' type="button" className="btn" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Link</a>
              </div>
            </Card>

            <Card className='m-3' style={{width: "300px", height: "250px", background:'#f0f0f0', borderRadius:'30px'}}>
              <figure className="figure-healht" style={{width: "100%", height: "195px", marginBottom:'0'}}>
                <img src={dl} style={{width: "100%", objectFit:'fill', height: "195px", borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}} alt="burger queen" />
              </figure>
              <div  className='d-flex' style={{ padding:'0', margin:'auto'}}>
                <ModalInfo id={3} />
                <a href='https://meryvera.github.io/LIM014-data-lovers/src/index.html' target='_blank' type="button" className="btn" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Link</a>
              </div>
            </Card>

            <Card className='m-3' style={{width: "300px", height: "250px", background:'#f0f0f0', borderRadius:'30px'}}>
              <figure className="figure-healht" style={{width: "100%", height: "195px", marginBottom:'0'}}>
                <img src={cipher} style={{width: "100%", objectFit:'fill', height: "195px", borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}} alt="burger queen" />
              </figure>
              <div  className='d-flex' style={{ padding:'0', margin:'auto'}}>
                <ModalInfo id={4} />
                <a href='https://meryvera.github.io/LIM014-cipher/' target='_blank' type="button" className="btn" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Link</a>
              </div>
            </Card>

            <Card className='m-3' style={{width: "300px", height: "250px", background:'#f0f0f0', borderRadius:'30px'}}>
              <figure className="figure-healht" style={{width: "100%", height: "195px", marginBottom:'0'}}>
                <img src={bqfb} style={{width: "100%", objectFit:'fill', height: "195px", borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}} alt="burger queen" />
              </figure>
              <div  className='d-flex' style={{ padding:'0', margin:'auto'}}>
                <ModalInfo id={5} />
                <a href='https://lim014-burgerqueen.web.app/' target='_blank' type="button" className="btn" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Link</a>
              </div>
            </Card>

            <Card className='m-3' style={{width: "300px", height: "250px", background:'#f0f0f0', borderRadius:'30px'}}>
              <figure className="figure-healht" style={{width: "100%", height: "195px", marginBottom:'0'}}>
                <img src={chat} style={{width: "100%", objectFit:'fill', height: "195px", borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}} alt="burger queen" />
              </figure>
              <div className='d-flex' style={{ padding:'0', margin:'auto'}}>
                <ModalInfo id={6} />
                <a href='https://github.com/meryvera/chat-app-fe' target='_blank' type="button" className="btn" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Link</a>
              </div>
            </Card>

            <Card className='m-3' style={{width: "300px", height: "250px", background:'#f0f0f0', borderRadius:'30px'}}>
              <figure className="figure-healht" style={{width: "100%", height: "195px", marginBottom:'0'}}>
                <img src={express} style={{width: "100%", objectFit:'fill', height: "195px", borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}} alt="burger queen" />
              </figure>
              <div className='d-flex' style={{ padding:'0', margin:'auto'}}>
                <ModalInfo id={7} />
                <a href='http://reg003-bq-api.herokuapp.com/' target='_blank' type="button" className="btn" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Link</a>
              </div>
            </Card>

            <Card className='m-3' style={{width: "300px", height: "250px", background:'#f0f0f0', borderRadius:'30px'}}>
              <figure className="figure-healht" style={{width: "100%", height: "195px", marginBottom:'0'}}>
                <img src={node} style={{width: "100%", objectFit:'fill', height: "195px", borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}} alt="burger queen" />
              </figure>
              <div className='d-flex' style={{ padding:'0', margin:'auto'}}>
                <ModalInfo id={8} />
                <a href='https://github.com/meryvera/LIM014-mdlinks' target='_blank' type="button" className="btn" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Link</a>
              </div>
            </Card>

            <Card className='m-3' style={{width: "300px", height: "250px", background:'#f0f0f0', borderRadius:'30px'}}>
              <figure className="figure-healht" style={{width: "100%", height: "195px", marginBottom:'0'}}>
                <img src={wordpress} style={{width: "100%", objectFit:'fill', height: "195px", borderTopLeftRadius:'30px', borderTopRightRadius:'30px'}} alt="burger queen" />
              </figure>
              <div className='d-flex' style={{ padding:'0', margin:'auto'}}>
                <ModalInfo id={9} />
                <a href='https://github.com/meryvera/REG003-wordpress-plugin' target='_blank' type="button" className="btn" style={{height:'32px', fontFamily:'calibri', fontWeight:'bold', background:'rgb(29 122 121)', color:'white'}} rel="noreferrer">Link</a>
              </div>
            </Card>

          </div>
        </section>
        <section id='experiencia' className='px-5 py-5'>
          <h2 className='subtitle mb-4'>Experiencia</h2>
          <p>
            FRONT END DEVELOPER JR. 
            Laboratoria | 01-2021 - 07/2020
            En este bootcamp intensivo desarrollé aplicaciones web responsivas y librerías en Node como herramientas de trabajo para otros desarrolladores, todo esto entendiendo desde un inicio a mi usuario final y sus trabajadores. 
            Todos mis proyectos fueron realizado bajo la metodología SCRUM, github projects, y en equipos de trabajo.
            Participé del Talent Fest donde desarrollamos un proyecto de centralización de canales de comunicación interna para una empresa reconocida en la industria de aceros, SIDERPERU .
            
            Tecnologías y lenguajes usados:
            • JavaScript • React js  • Node  • Express  • MongoDB    • Firebase   • HTML5  • CSS3  • Sass  • Bootstrap  • React-Bootstrap

            Principales proyectos:
            • Buger Queen Api Client • Burger Queen • Crypto Sistemas 
            • Travellers - Social Network  • Md-Links • Data Squad Up
          </p>
          <p>
            ACCOUNT EXECUTIVE - MEDIA PLANNER JR. 
            Quorum Soho Square - Mi Manzana | 08-2018 - 06/2020
            Dirigí campañas digitales con objetivos de mediano y corto y plazo en base a estrategias digitales de social media y la planificación de inversión en plataformas digitales como Facebook Ads y Google Ads. Con cada cliente logramos alcanzar los objetivos en los KPI´s propuestos como el incremento del reconocimiento de marca, awareness, aterrizaje en landing pages, websites, engagement y conversión. Todo esto mediante la comprensión, análisis y naturaleza de cada campaña en colaboración, comunicación y alineamiento con los objetivos de nuestros clientes.

            Principales clientes:
            • Exportadora Romex • Cafetal  • Tabernero 
          </p>
          <p>
            ASSURANCE ASSOCIATE
            Price Waterhouse Coopers - BDO | 08-2014 - 07-2017
            Determiné la razonabilidad de la información financiera de principales empresas de la economía peruana, en base a una planificación y ejecución de auditoría. Todo ello bajo el marco de las IFRS y NIA´s.
            Mediante la comprensión de la naturaleza del rubro financiero de cada una, la oportunidad de revisión y alcance de los procedimientos de auditoría, logré fundamentar las bases para la opinión de los dictámenes dirigidos a los Entes reguladores y stakeholders.

            Principales Clientes:
            • Solgas S.A. • SEDAPAL • Volcan Compañía Minera S.A.A.  
            • Pesquera Exalmar S.A.A.
          </p>
        </section>
        <section id='educacion' className='px-5 py-5' style={{background:'#ced4da'}}>
          <h2 className='subtitle mb-4'>Educación</h2>
          <p>
            Back END DEVELOPER
            Laboratoria
            08/2021 – Actualmente - Lima, Perú 
          </p>
          <p>
            FRONT END DEVELOPER
            Laboratoria
            01/2021 – 07/2021 - Lima, Perú 
          </p>
          <p>
            MARKETING DIGITAL
            ipad
            2018 Lima, Perú 
          </p>
          <p>
            Contabilidad y Finanzas
            UNMSM
            2016 Lima, Perú 
          </p>
        </section>
      </article>
    </div>
  );
}

export default App;

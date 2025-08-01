import { useState } from 'react'
import './App.css'
import './styles/navbar.css'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, createTheme, Grid, Grid2, IconButton, ThemeProvider, Typography } from '@mui/material';
import home from './assets/myPhoto.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import me from './assets/me.png'
import ParticlesBg from 'particles-bg'
import Loader from './components/Loader';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from './components/Footer';
import logo from './assets/v1.png'
import Marquee from 'react-fast-marquee';
import py from './assets/py.png'
import flutter from './assets/flutter.png'
import paper from './assets/paper.png'

// tech stack images
import js from './assets/tech/JavaScript.svg'
import react1 from './assets/tech/react-original.svg'
import node1 from './assets/tech/nodejs-original.svg'
import java from './assets/tech/java.svg'
import C from './assets/tech/C.svg'
import CSharp from './assets/tech/CSharp.svg'
import mui from './assets/tech/Material UI.svg'
import mongo from './assets/tech/MongoDB.svg'
import MySQL from './assets/tech/MySQL.svg'
import net from './assets/tech/NET core.svg'
import tailwind from './assets/tech/tailwindcss-original-wordmark.svg'
import sql from './assets/tech/SQL Developer.svg'
import PHP from './assets/tech/PHP.svg'
import ExperienceStepper from './components/ExperienceStepper';
import Particles from './components/Particles';


// Set theme on MUI
const theme = createTheme({
  palette: {
    primary: { main: "#FFB433" },
  },
});

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const DownloadCV = () => {
    fetch('assets/resume/Vimukthi_Maduwantha.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Vimukthi Maduwantha.pdf';
        alink.click();
      });
    });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <ParticlesBg color='#F6DC43' type="cobweb" bg={true} /> */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}>
          <Particles
            particleColors={['#e1e1f0', '#e1e1f0']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="Navbar">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              className="navBarLogo"
            />
          </a>

          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#technology" onClick={() => setIsOpen(false)}>Technologies</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#project" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div >

        {/* Home section */}
        <section id="home" style={{ paddingTop: '80px', }}>
          <Grid container spacing={2} sx={{ height: '100vh' }}>
            <Grid item md={7} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: { md: '5vw', xs: '12vw' }, fontFamily: 'Lilita One, sans-serif', fontWeight: 'bold', color: '#FFB433', letterSpacing: '10px' }}>Hello, I'm</Typography>
              <Typography sx={{ fontSize: { md: '5vw', xs: '12vw' }, fontFamily: 'Lilita One, sans-serif', textAlign: 'center' }}>Vimukthi Maduwantha</Typography>
              <Typography sx={{ fontSize: '20px', fontFamily: "Space Grotesk, serif", }}>Software Engineer | Full Stack Developer</Typography>
              <div style={{ marginBottom: '10px' }}>
                <a
                  href="https://www.linkedin.com/in/vimukthi-maduwantha-serasinghe?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiJfIVQotTuOepEsMzVxL5Q%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton >
                    <LinkedInIcon sx={{ color: 'white', backgroundColor: 'rgba(255, 180, 51, 0.2)', border: "2px solid #FFB433", borderRadius: '50%', padding: '5px' }} />
                  </IconButton>
                </a>
                <a
                  href="https://www.instagram.com/vimukthi_326/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <InstagramIcon sx={{ color: 'white', backgroundColor: 'rgba(255, 180, 51, 0.2)', border: "2px solid #FFB433", borderRadius: '50%', padding: '5px' }} />
                  </IconButton>
                </a>
                <a
                  href="https://www.facebook.com/vimukthi.maduwantha.564"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <FacebookRoundedIcon sx={{ color: 'white', backgroundColor: 'rgba(255, 180, 51, 0.2)', border: "2px solid #FFB433", borderRadius: '50%', padding: '5px' }} />
                  </IconButton>
                </a>
                <a
                  href="https://github.com/VimukthiMaduwantha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <GitHubIcon sx={{ color: 'white', backgroundColor: 'rgba(255, 180, 51, 0.2)', border: "2px solid #FFB433", borderRadius: '50%', padding: '5px' }} />
                  </IconButton>
                </a>
              </div>
              <Button
                variant="contained"
                sx={{ width: '200px' }}
                onClick={() => DownloadCV()}
              >Hire Me</Button>

            </Grid>
            <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <img
                src={home}
                alt='vimu'
                className='myPhoto'
              />
            </Grid>
          </Grid>
        </section>

        {/* About section */}
        <section id="about" style={{ textAlign: 'center', height: 'auto', paddingTop: '40px' }}>
          <Grid container spacing={2} sx={{ height: { md: '100vh', xs: 'auto' } }}>
            <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold', display: { md: 'none', xs: 'contents' }, color: '#FFB433' }}>More About Me</Typography>
              <img
                src={me}
                alt='vimu'
                className='myPhoto1'
              />
            </Grid>
            <Grid item md={5} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }} >
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold', display: { md: 'contents', xs: 'none' }, color: '#FFB433', }}>More About Me</Typography>
              <Typography>
                Vimukthi Maduwantha is a highly skilled Software Engineer and a final-year student at the Sri Lanka Institute of Information Technology,
                hands-on industry experience in software development. I specialize in full-stack development, working with the MERN stack, .NET, and Flutter,
                along with expertise in MongoDB, Node.js, Express, React, and SQL Server. My industry experience includes developing cloud-based systems, AI-driven screening
                tools, and interactive learning applications. I have worked on enterprise-level projects, integrating OAuth authentication, managing databases, and optimizing
                system performance. I have experience in POS systems, user management, and report generation for businesses. My research work involved feasibility studies,
                machine learning, and collaborations with schools to develop technology-driven solutions for education. Additionally, you have worked with MudBlazor components,
                developed robotics and kinematics simulations, and have experience in data science using Pandas and OpenCV. With strong analytical skills, problem-solving
                abilities, and a passion for research-driven technology, I continuously develop
                innovative solutions that make a real-world impact in both academic and professional environments.
              </Typography>
            </Grid>
          </Grid>
        </section>

        {/* Technology section */}
        <section id="technology" style={{ height: 'auto', paddingTop: '95px', paddingBottom: '90px', display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2} sx={{
            height: 'auto', width: '90%',
            // width: '100%',
            display: {
              xs: 'flex',   // visible on extra-small screens (0px+)
              sm: 'none',   // visible on small screens (600px+)
              md: 'flex',    // hidden on medium screens and up (900px+)
            },
          }} >
            <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '50px', textAlign: 'center', }} >
              <Typography sx={{ fontSize: { md: '50px', xs: '35px' }, fontWeight: 'bold', color: '#FFB433' }}>Tech Stack</Typography>
              <Typography sx={{ fontSize: { md: '1.5rem', xs: '1rem' }, fontWeight: '200', color: '#FFB433' }}>I rely on this tech stack to create robust and elegant solutions.</Typography>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={js}
                    style={{
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>JavaScript</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={java}
                    style={{
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>JavaScript</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={react1}
                    style={{
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>React.Js</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={node1}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>Node.Js</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={CSharp}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>C Sharp</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={C}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>C</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={net}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>.Net Core</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={mui}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>MUI</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={tailwind}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>Tailwind</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={PHP}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>php</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={mongo}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>MongoDb</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={sql}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>Ms SQL</Typography>
                </div>
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "180px",
                width: "180px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <img
                    src={MySQL}
                    style={{
                      height: "100px",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Typography sx={{ color: 'white', fontFamily: "Space Grotesk, serif", fontSize: '20px' }}>MySQL</Typography>
                </div>
              </Card>
            </Grid>

            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Loader />
            </Grid>
          </Grid>
        </section>

        {/* Experience section start */}
        <section id="experience" style={{ height: 'auto', paddingTop: '95px', paddingBottom: '90px', display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2} sx={{
            height: 'auto', width: '90%'
          }}>
            <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '50px', textAlign: 'center', }} >
              <Typography sx={{ fontSize: { md: '50px', xs: '35px' }, fontWeight: 'bold', color: '#FFB433' }}>My Professional Work Experience</Typography>
            </Grid>
            <Grid item md={12} xs={12}  >
              <ExperienceStepper />
            </Grid>
          </Grid>

        </section>
        {/* Experience section end */}

        {/* project section start*/}
        <section id="project" style={{ textAlign: 'center', height: 'auto', }}>
          < Grid container spacing={2} sx={{
            height: '100vh', pt: "80px",
            pr: '20px',
            pb: '80px',
            pl: '20px',
            textAlign: 'center'
          }}>
            <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', }} >
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold', color: '#FFB433' }}>Projects</Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={py}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </section>
        {/* project section end */}

        {/* contact section start */}
        <section id="contact" style={{
          height: 'auto',
        }}>
          < Grid container spacing={2} sx={{
            height: '100vh', pt: "80px",
            pr: '20px',
            pb: '80px',
            pl: '20px',
            textAlign: 'center'
          }}>
            <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', }} >
              <Typography sx={{ fontSize: '50px', fontWeight: 'bold', color: '#FFB433' }}>Get In Touch</Typography>
            </Grid>
            <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', }} >
              <Card sx={{
                borderRadius: '9px',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "400px",
                width: "500px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '10px',
                overflow: 'hidden',
                border: '2px solid #FFB433'
              }}>
                <img
                  src={paper}
                  style={{
                    width: '50px',
                    height: 'auto'
                  }}
                />
                <br />
                <Typography sx={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>Let's Connect</Typography>
                <Typography sx={{ fontSize: '17px', color: 'white', opacity: '0.6', fontFamily: "Space Grotesk, serif", }}>
                  Feel free to reach out if you need assistance with development projects,
                  have any questions, or just want to connect !
                </Typography>
                <Box sx={{
                  marginTop: '20px',
                  padding: '10px 10px',
                  backgroundColor: 'rgba(255, 180, 51, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '50px',
                  border: '2px solid #FFB433'
                }}>
                  <a href="mailto:maduwanthavimukthi@gmail.com" style={{ textDecoration: 'none' }}>
                    <Typography sx={{
                      fontSize: '17px',
                      color: '#FFB433',
                      fontFamily: 'Space Grotesk, serif',
                    }}>
                      maduwanthavimukthi@gmail.com
                    </Typography>
                  </a>
                </Box>
                <div style={{ marginTop: '20px' }}>
                  <a
                    href="https://www.linkedin.com/in/vimukthi-maduwantha-serasinghe?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiJfIVQotTuOepEsMzVxL5Q%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton >
                      <LinkedInIcon sx={{ color: 'white', backgroundColor: 'rgba(255, 180, 51, 0.2)', border: "2px solid #FFB433", borderRadius: '50%', padding: '5px' }} />
                    </IconButton>
                  </a>
                  <a
                    href="https://www.instagram.com/vimukthi_326/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <InstagramIcon sx={{ color: 'white', backgroundColor: 'rgba(255, 180, 51, 0.2)', border: "2px solid #FFB433", borderRadius: '50%', padding: '5px' }} />
                    </IconButton>
                  </a>
                  <a
                    href="https://www.facebook.com/vimukthi.maduwantha.564"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <FacebookRoundedIcon sx={{ color: 'white', backgroundColor: 'rgba(255, 180, 51, 0.2)', border: "2px solid #FFB433", borderRadius: '50%', padding: '5px' }} />
                    </IconButton>
                  </a>
                  <a
                    href="https://github.com/VimukthiMaduwantha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <GitHubIcon sx={{ color: 'white', backgroundColor: 'rgba(255, 180, 51, 0.2)', border: "2px solid #FFB433", borderRadius: '50%', padding: '5px' }} />
                    </IconButton>
                  </a>
                </div>
              </Card>
            </Grid>
          </Grid>
          <Footer />
        </section>
        {/* contact section end */}
      </ThemeProvider >
    </>
  )
}

export default App

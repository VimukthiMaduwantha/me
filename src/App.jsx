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
import react1 from './assets/react-1.png'
import node1 from './assets/nodejs-1.png'
import net from './assets/net.png'
import java from './assets/java-1.png'
import git from './assets/git.png'
import mongo from './assets/mongo1.png'
import sql from './assets/sql.png'
import py from './assets/py.png'
import flutter from './assets/flutter.png'
import paper from './assets/paper.png'
import Loader from './components/Loader';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from './components/Footer';
import logo from './assets/v1.png'
import Marquee from 'react-fast-marquee';
// import logo from './assets/v.png'

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
        {/* Particles Background */}
        <ParticlesBg color='#F6DC43' type="cobweb" bg={true} />
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
        <section id="home" style={{ paddingTop: '80px', borderBottom: '0.5px solid #FFB433' }}>
          <Grid container spacing={2} sx={{ height: '100vh' }}>
            <Grid item md={7} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: { md: '5vw', xs: '12vw' }, fontFamily: 'Lilita One, sans-serif', fontWeight: 'bold', color: '#FFB433', letterSpacing: '10px' }}>Hello, I'm</Typography>
              <Typography sx={{ fontSize: { md: '5vw', xs: '12vw' }, fontFamily: 'Lilita One, sans-serif', textAlign: 'center' }}>Vimukthi Maduwantha</Typography>
              <Typography sx={{ fontSize: '20px', fontFamily: "Space Grotesk, serif", }}>Software Engineer | Freelancer</Typography>
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
        <section id="about" style={{ textAlign: 'center', height: 'auto', borderBottom: '0.5px solid #FFB433', paddingTop: '40px' }}>
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
        <section id="technology" style={{ height: 'auto', borderBottom: '0.5px solid #FFB433', paddingTop: '95px', paddingBottom: '90px', display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2} sx={{
            height: 'auto',
            width: '100%',
            display: {
              xs: 'none',   // visible on extra-small screens (0px+)
              sm: 'none',   // visible on small screens (600px+)
              md: 'flex',    // hidden on medium screens and up (900px+)
            },
          }} >
            <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '50px', textAlign: 'center', }} >
              <Typography sx={{ fontSize: { md: '50px', xs: '35px' }, fontWeight: 'bold', color: '#FFB433' }}>Languages and Tools</Typography>
              <Typography sx={{ fontSize: { md: '50px', xs: '35px' }, fontWeight: 'bold', color: '#FFB433' }}>I'm Familiar with.</Typography>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Card sx={{
                borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "120px",
                width: "120px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(254, 249, 225, 0.3)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <img
                  src={react1}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image is fully visible
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Card sx={{
                borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "120px",
                width: "120px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(254, 249, 225, 0.3)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <img
                  src={node1}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image is fully visible
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Card sx={{
                borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "120px",
                width: "120px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(254, 249, 225, 0.3)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <img
                  src={net}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image is fully visible
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Card sx={{
                borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "120px",
                width: "120px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(254, 249, 225, 0.3)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <img
                  src={flutter}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image is fully visible
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Card sx={{
                borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "120px",
                width: "120px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(254, 249, 225, 0.3)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <img
                  src={java}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image is fully visible
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Card sx={{
                borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "120px",
                width: "120px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(254, 249, 225, 0.3)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <img
                  src={py}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image is fully visible
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Card sx={{
                borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "120px",
                width: "120px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(254, 249, 225, 0.3)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <img
                  src={mongo}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image is fully visible
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Card sx={{
                borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "120px",
                width: "120px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(254, 249, 225, 0.3)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <img
                  src={sql}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image is fully visible
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Card sx={{
                borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                backgroundColor: 'rgba(254, 249, 225, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                height: "120px",
                width: "120px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(254, 249, 225, 0.3)',
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                },
              }}>
                <img
                  src={git}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100%",
                    objectFit: "contain", // Ensures the image is fully visible
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={2} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
              <Loader />
            </Grid>
          </Grid>


          {/* --------------------------------------------------------------------------------------------------- */}



          <Box
            sx={{
              width: '98%',
              display: {
                xs: 'block',   // visible on extra-small screens (0px+)
                sm: 'block',   // visible on small screens (600px+)
                md: 'none',    // hidden on medium screens and up (900px+)
              },
            }}
          >
            <Grid container spacing={2} sx={{ height: 'auto', }} >
              <Grid item md={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '50px', textAlign: 'center', }} >
                <Typography sx={{ fontSize: { md: '50px', xs: '35px' }, fontWeight: 'bold', color: '#FFB433' }}>Languages and Tools</Typography>
                <Typography sx={{ fontSize: { md: '50px', xs: '35px' }, fontWeight: 'bold', color: '#FFB433' }}>I'm Familiar with.</Typography>
              </Grid>
            </Grid>
            <Marquee /* pauseOnHover */>
              <div className='imageWrapper'>
                <Card sx={{
                  borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                  backgroundColor: 'rgba(254, 249, 225, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  height: "120px",
                  width: "120px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(254, 249, 225, 0.3)',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}>
                  <img
                    src={react1}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ensures the image is fully visible
                    }}
                  />
                </Card>
              </div>

              <div className='imageWrapper'>
                <Card sx={{
                  borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                  backgroundColor: 'rgba(254, 249, 225, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  height: "120px",
                  width: "120px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(254, 249, 225, 0.3)',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}>
                  <img
                    src={node1}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ensures the image is fully visible
                    }}
                  />
                </Card>
              </div>

              <div className='imageWrapper'>
                <Card sx={{
                  borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                  backgroundColor: 'rgba(254, 249, 225, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  height: "120px",
                  width: "120px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(254, 249, 225, 0.3)',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}>
                  <img
                    src={net}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ensures the image is fully visible
                    }}
                  />
                </Card>
              </div>

              <div className='imageWrapper'>
                <Card sx={{
                  borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                  backgroundColor: 'rgba(254, 249, 225, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  height: "120px",
                  width: "120px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(254, 249, 225, 0.3)',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}>
                  <img
                    src={flutter}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ensures the image is fully visible
                    }}
                  />
                </Card>
              </div>

              <div className='imageWrapper'>
                <Card sx={{
                  borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                  backgroundColor: 'rgba(254, 249, 225, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  height: "120px",
                  width: "120px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(254, 249, 225, 0.3)',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}>
                  <img
                    src={java}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ensures the image is fully visible
                    }}
                  />
                </Card>
              </div>

              <div className='imageWrapper'>
                <Card sx={{
                  borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                  backgroundColor: 'rgba(254, 249, 225, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  height: "120px",
                  width: "120px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(254, 249, 225, 0.3)',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}>
                  <img
                    src={py}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ensures the image is fully visible
                    }}
                  />
                </Card>
              </div>

              <div className='imageWrapper'>
                <Card sx={{
                  borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                  backgroundColor: 'rgba(254, 249, 225, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  height: "120px",
                  width: "120px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(254, 249, 225, 0.3)',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}>
                  <img
                    src={mongo}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ensures the image is fully visible
                    }}
                  />
                </Card>
              </div>

              <div className='imageWrapper'>
                <Card sx={{
                  borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                  backgroundColor: 'rgba(254, 249, 225, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  height: "120px",
                  width: "120px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(254, 249, 225, 0.3)',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}>
                  <img
                    src={sql}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ensures the image is fully visible
                    }}
                  />
                </Card>
              </div>

              <div className='imageWrapper'>
                <Card sx={{
                  borderRadius: '83% 17% 84% 16% / 16% 83% 17% 84%',
                  backgroundColor: 'rgba(254, 249, 225, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  height: "120px",
                  width: "120px",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(254, 249, 225, 0.3)',
                    transform: 'scale(1.05)',
                    cursor: 'pointer',
                  },
                }}>
                  <img
                    src={git}
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ensures the image is fully visible
                    }}
                  />
                </Card>
              </div>
            </Marquee>
          </Box>


          {/* ---------------------------------------------------------------------------------------------------------- */}



        </section>

        {/* project section start*/}
        <section id="project" style={{ textAlign: 'center', height: 'auto', borderBottom: '0.5px solid #FFB433' }}>
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

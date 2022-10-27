import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import getRequests from '../utils/APIServices';

const cards = [];

const theme = createTheme();

function LandingPage(props){
     return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
            <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
            
            >
            <img src="https://content.api.news/v3/images/bin/afb92595cf1385ee8ffaf27e4fa806b8" width="1000" align="right" style={{margin: "40px"}}/>
            <Typography
            component="h1"
            variant="h2"
            align="left"
            color="text.primary"
            gutterBottom
            maxWidth="sm"
            margin="70px"
            fontFamily='monospace'
            >
                Learning Guardians
            </Typography>
            <Typography variant="h5" fontFamily='monospace' align="left" color="text.secondary" margin="70px" maxWidth="sm" paragraph>
            La solucion para tus habitos de Estudios
            Aprende como administrar mejor tus sesiones y potencia al maximo tus resultados.
            Con Learning Guardians y su Increible Sistema de Estudio basado en las metodologias mas modernas del 
            sector podrás impulsar tus rutinas y aprenderas mejor y mas rapidamente.
            </Typography>
            
            </Box>
            <Container>
            <Button variant="contained" href="/login">
                INICIA AQUI
            </Button>
            </Container>
        </main>
        </ThemeProvider>
     );
 }

 export default LandingPage
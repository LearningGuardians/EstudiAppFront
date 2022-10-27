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
            <Container maxWidth="sm" disableGutters="True" sx={align="left"} >
                <Typography
                component="h1"
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom
                >
                    Bienvenido a Learning Guardians
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                Este es un espacio orientado para ayudar a los estudiantes en falencias académicas en ciertas áreas, 
                donde el alumno no sienta el estudiar como una obligación de horas, 
                si no como una actividad que se puede repartir de manera que su vida cotidiana no se vea afectada
                </Typography>
                <Stack
                sx={{ pt: 4 }}
                flexDirection="ltr"
                spacing={2}
                justifyContent="center"
                
                >
                </Stack>
            </Container>
            </Box>
            
        </main>
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
            Footer
            </Typography>
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
            Something here to give the footer a purpose!
            </Typography>
        </Box>
        </ThemeProvider>
     );
 }

 export default LandingPage
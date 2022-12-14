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
import dataJSON from '../DataProof/DataFirstPage';
import { useNavigate } from 'react-router-dom';

export default function Album() {
  const cards = dataJSON.proof2.PlanesOperativos;
  const theme = createTheme();  
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/pOperativo/create");
}



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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
                Bienvenido a Learning Guardians
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Este es un espacio orientado para ayudar a los estudiantes en falencias académicas en ciertas áreas, 
            donde el alumno no sienta el estudiar como una obligación de horas, 
            si no como una actividad que se puede repartir de manera que su vida cotidiana no se vea afectada
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href='/pOperativo/create'>Crear Plan de Estudios</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0%',
                    }}
                    image={require('./public/logo192.png')}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" >
                      {card.nombreMateria}
                    </Typography>
                    <Typography>
                      {card.info}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Continuar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          @LearningGuardians
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

import React from "react";
import ClockPicker from "../components/ClockPicker";
import Header from "../components/Header";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
    Accordion, AccordionSummary, AccordionDetails, TextField, Autocomplete,
    createTheme, ThemeProvider, Stack, Typography, Box, Container,
    CssBaseline, Fab, Chip, IconButton, Button
} from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const theme = createTheme();

const Time = "Hora de llegada"

const materias = [
    { label: "Matematicas", id: 1 },
    { label: "Fisica", id: 2 },
    { label: "Ingles", id: 3 }
]


// function LabelsCreateOperative() {
//     return (

//     )
// };

export default function CreateView() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>
                <Box
                    component="form"
                    sx={{
                        bgcolor: 'background.paper',
                        pt: '10%',
                        pb: '10%',
                        '& .MuiTextField-root': { m: 1, width: '25ch' }
                    }}
                >
                    <Container maxWidth="md">
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" spacing={2} >
                                <Typography >
                                    Seleccione la materia que desea reforzar
                                </Typography>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={materias}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Subject" />}
                                />
                            </Stack>
                            <Stack direction="row" spacing={3} >
                                <Typography>
                                    Seleccione su hora de llegada
                                </Typography>
                                <ClockPicker value={Time} />
                            </Stack>
                            <Stack direction="row" spacing={3}>
                                <Typography mr="sx">
                                    Nombre
                                </Typography>
                                <TextField id="outlined-basic" label="Actividad Extrarricular" variant="outlined" />
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <Typography>
                                    Hora de inicio
                                </Typography>
                                <ClockPicker />
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <Typography>
                                    Hora de fin
                                </Typography>
                                <ClockPicker />
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                {/* <Typography>
                                    Seleccione la razón
                                </Typography>
                                <Fab variant="extended">
                                    <QuizIcon sx={{ mr: 1 }}/>
                                    Examen
                                </Fab>
                                <Container maxWidth="xs">
                                    <Button variant="contained" startIcon={<FontAwesomeIcon icon={QuizIcon} />}>
                                        Examen
                                    </Button>
                                    <Chip Icon={<QuizIcon />} label="Prueba" />
                                </Container> */}
                                <Typography>
                                    Seleccione la razón
                                </Typography>
                                <Button>Examen</Button>
                                <Button>Quiz</Button>
                                <Button>Estudio</Button>
                            </Stack>
                            <Container maxWidth="sm">
                                <Button size="small" variant="contained">Crear plan de estudio</Button>    
                            </Container>
                        </Stack>
                    </Container>

                </Box>
            </main>
        </ThemeProvider>
    );
}
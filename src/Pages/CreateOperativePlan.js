import React, { useState, useEffect } from "react";
import ClockPicker from "../components/ClockPicker";
import Header from "../components/Header";
import {
    TextField, Autocomplete,
    createTheme, ThemeProvider, Stack, Typography, Box, Container,
    CssBaseline, Fab, Chip, IconButton, Button
} from '@mui/material';
import dayjs from 'dayjs';



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

    const [arrivalTime, setArrivalTime] = useState(dayjs('2022-04-07'))
    const [startTime, setStartTime] = useState(dayjs('2022-04-07'))
    const [endTime, setEndTime] = useState(dayjs('2022-04-07'))

    useEffect(() => {
        console.log(`Arrival Time ${arrivalTime['$d']}`)
        console.log(`Start time ${startTime['$d']}`)
        console.log(`End Time ${endTime['$d']}`)
    }, [arrivalTime, startTime, endTime])

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
                        <Stack direction="column" spacing={1}>
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
                                <ClockPicker value={arrivalTime} setValue={setArrivalTime} />
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
                                <ClockPicker value={startTime} setValue={setStartTime} />
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <Typography>
                                    Hora de fin
                                </Typography>
                                <ClockPicker value={endTime} setValue={setEndTime} />
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
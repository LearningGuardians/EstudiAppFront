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

export default function CreateOperativeplan() {

    const [materia,setMateria] = useState("");
    const [arrivalTime, setArrivalTime] = useState(dayjs('2022-04-07'))
    const [startTime, setStartTime] = useState(dayjs('2022-04-07'))
    const [endTime, setEndTime] = useState(dayjs('2022-04-07'))
    const [extrarricularName, setExtrarricularName] = useState("")
    const [razon, setRazon] = useState("");
    const [operativePlan, setOperativePlan] = useState({});


    const handleSubmit = () =>{
        setOperativePlan({
            "materia": materia,
            "HoraLlegada":arrivalTime['$H'] + ":" + arrivalTime['$m'],
            "Actividad":{
                "Nombre":extrarricularName,
                "HoraLlegada":startTime['$H']+":"+endTime['$m'],
                "HoraFin":endTime['$H']+":"+arrivalTime['$m']
            },
            "Razon":razon
        });
        console.log(materia,razon);
    }
    useEffect(() => {
    }, [materia,setOperativePlan]);

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
                                    onChange={(newValue) => {
                                        setMateria(newValue)
                                    }}
                                    disablePortal
                                    id="combo-box-demo"
                                    options={materias}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Subject" />
                                }
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
                                <TextField id="outlined-basic"
                                 onChange={(newValue)=>{
                                    setExtrarricularName(newValue.currentTarget.value);
                                    console.log("Value: " + newValue.currentTarget.value);
                                 }} label="Actividad Extrarricular" variant="outlined" />
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
                                <Typography>
                                    Seleccione la razón
                                </Typography>
                                <Button onClick={(event)=> {
                                    setRazon("Examen");
                                }}>Examen</Button>
                                <Button onClick={(event)=> {
                                    setRazon("Quiz");
                                }}>Quiz</Button>
                                <Button onClick={(event)=> {
                                    setRazon("Estudio");
                                }}>Estudio</Button>
                            </Stack>
                            <Container maxWidth="sm">
                                <Button onClick={handleSubmit} size="small" variant="contained">Crear plan de estudio</Button>
                            </Container>
                        </Stack>
                    </Container>

                </Box>
            </main>
        </ThemeProvider>
    );
}
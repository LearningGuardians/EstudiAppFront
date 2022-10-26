import * as React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { Container } from '@mui/system';
import { TimePicker } from '@mui/x-date-pickers';

export default function ClockPicker() {
    const [value, setValue] = useState(dayjs('2022-04-07'));
    const [valor, setValor] = useState("Hola perras");

    const actValor = () => {

    };

    return (
        <Container maxWidth="xs">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <StaticTimePicker
                    ampm
                    orientation="portrait"
                    openTo="minutes"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    toolbarTitle=""
                /> */}
                <TimePicker
                    value={value}
                    onChange={setValue}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Container>
    );
}

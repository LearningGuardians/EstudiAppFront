import * as React from 'react';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { Container } from '@mui/system';
import { MobileTimePicker, TimePicker } from '@mui/x-date-pickers';

export default function ClockPicker({ value, setValue }) {
    // const [value, setValue] = useState(dayjs('2022-04-07'));

    return (
        <Container maxWidth="xs">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileTimePicker
                    label="For mobile"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                {/* <TimePicker
                    value={value}
                    onChange={setValue}
                    renderInput={(params) => <TextField {...params} />}
                /> */}
            </LocalizationProvider>
        </Container>
    );
}

import React, { useEffect } from 'react';
import './FormRouteMig.scss'
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import AddIcon from '@material-ui/icons/Add';
import PDF from '../PDF';


const FormRouteMig = () => {


    const [page, setPage] = React.useState(1);
    const [formaIngreso, setformaIngreso] = React.useState('');
    const [lugarIngreso, setLugarIngreso] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handlePageChange = (index) => {
        setPage(index);
    }
    console.log(page);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const handleChangeFormaIngreso = (event) => {
        setformaIngreso(event.target.value);
    };

    const handleChangeLugarIngreso = (event) => {
        setLugarIngreso(event.target.value);
    };
    switch (page) {
        case 1:
            return <div className="formRouteMig">
                <h1>Solicitud de Refugio</h1>
                <form action="">
                    <h4>Datos personales</h4>
                    <hr />
                    <div className="formRow">
                        <div className="fullName">
                            <p>Nombre completo del solicitante</p>
                            <TextField className="fullName__textfield" id="outlined-basic" variant="outlined"
                                placeholder="Ej: Michael Rojas" />
                        </div>
                        <div className="ident">
                            <p>Número de cédula de identidad venezolana</p>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                    </div>

                    <div className="formRow">
                        <div className="tel">
                            <p>Telefono</p>
                            <TextField className="fullName__textfield" id="outlined-basic" variant="outlined" />
                        </div>
                        <div className="email">
                            <p>Correo electronico del solicitante</p>
                            <TextField className="emailinput" id="outlined-basic" variant="outlined" />
                        </div>
                    </div>

                    <div className="formRow">
                        <div className="email">
                            <p>Dirección de residencía</p>
                            <TextField className="emailinput" id="outlined-basic" variant="outlined" />
                        </div>
                    </div>
                    <h4 className="ingresoColombiaTitle">Ingreso a Colombia</h4>
                    <hr />

                    <div className="formRow">
                        <div className="Cformadeingreso">
                            <p>Forma de ingreso a Colombia</p>
                            <FormControl className="formadeingreso" variant="outlined" >
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={formaIngreso}
                                    onChange={handleChangeFormaIngreso}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    <MenuItem value={"Opcion A"}>Opcion A</MenuItem>
                                    <MenuItem value={"Opcion B"}>Opcion B</MenuItem>
                                    <MenuItem value={"Opcion C"}>Opcion C</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                        <div className="CLugarIngreso">
                            <p>Lugar de ingreso</p>
                            <FormControl className="lugarIngreso" variant="outlined" >
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={lugarIngreso}
                                    onChange={handleChangeLugarIngreso}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Opcion A</MenuItem>
                                    <MenuItem value={20}>Cucuta</MenuItem>
                                    <MenuItem value={30}>Opcion C</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                        <div className="CLugarIngreso">
                            <p>Fecha de ingreso a Colombia(Aproximada)</p>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid>
                                    <KeyboardDatePicker
                                        id="date-picker-dialog"
                                        label="Elige una fecha"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>

                    </div>

                    <div className="lastButton">
                        <Button className="nextBtn" onClick={() => handlePageChange(2)} variant="contained">Siguiente</Button>
                    </div>
                </form>
            </div>

            break;

        case 2:
            return <div className="formRouteMig">
                <h1>Solicitud de Refugio</h1>
                <form action="">
                    <h4>Beneficiaros</h4>
                    <hr />

                    <div className="formRow">
                        <div className="fullName">
                            <p>Nombre completo del solicitante</p>
                            <TextField className="fullName__textfield" id="outlined-basic" variant="outlined"
                                placeholder="Ej: Michael Rojas" />
                        </div>
                        <div className="">
                            <p>Número de identificacion venezolana</p>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>
                        <div className="">
                            <p>Edad</p>
                            <TextField id="outlined-basic" variant="outlined" />
                        </div>

                    </div>

                    <h4 className="ingresoColombiaTitle">Ingreso a Colombia</h4>
                    <hr />

                    <div className="formRow">
                        <div className="Cformadeingreso">
                            <p>Forma de ingreso a Colombia</p>
                            <FormControl className="formadeingreso" variant="outlined" >
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={formaIngreso}
                                    onChange={handleChangeFormaIngreso}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    <MenuItem value={"Opcion A"}>Opcion A</MenuItem>
                                    <MenuItem value={"Opcion B"}>Opcion B</MenuItem>
                                    <MenuItem value={"Opcion C"}>Opcion C</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                        <div className="CLugarIngreso">
                            <p>Lugar de ingreso</p>
                            <FormControl className="lugarIngreso" variant="outlined" >
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={lugarIngreso}
                                    onChange={handleChangeLugarIngreso}
                                >
                                    <MenuItem value="">
                                        <em>Seleccionar</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Opcion A</MenuItem>
                                    <MenuItem value={20}>Cucuta</MenuItem>
                                    <MenuItem value={30}>Opcion C</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                        <div className="CLugarIngreso">
                            <p>Fecha de ingreso a Colombia(Aproximada)</p>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid>
                                    <KeyboardDatePicker
                                        id="date-picker-dialog"
                                        label="Elige una fecha"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>

                    <div className="addBenButton">
                        <Button className="addBenBtn" startIcon={<AddIcon />} variant="contained">Agregar Beneficiario</Button>
                    </div>
                    <div className="lastButton">
                        <Button className="nextBtn" onClick={() => handlePageChange(3)} variant="contained">Siguiente</Button>
                    </div>

                </form>
            </div>
            break;

        case 3:
            return <div className="formRouteMig">
                <h1>Solicitud de Refugio</h1>
                <h4>Descargar Solicitud</h4>
                <hr />
                <div className="download">
                    <img className="downloadImg" src="/images/descargar.png" alt="Descargar" />
                    <Button className="nextBtn" variant="contained">Descargar</Button>

                </div>
                <PDF></PDF>
            </div>
            break;

        default:
            break;
    }

}

export default FormRouteMig;
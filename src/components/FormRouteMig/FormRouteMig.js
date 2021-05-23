import React, { useEffect, useState } from 'react';
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
import AppContext from '../../App/AppContext';
import User from '../../constants/Firebase/User';


const FormRouteMig = () => {
    const { useFaq, useDataForms, useLogin, usePageRouteMig } = AppContext.Consumer();

    const [nombre, setNombre] = useState("Nombre de usuario");

    const [isLoging, setIsLogin] = useLogin();
    const [type, Step] = useFaq();

    useEffect(() => {
        Step("Step");
        setNombre(User.information.nombre)
        setDataForms({ ...dataForms, nombreSolicitante: User.information.nombre })
    }, [isLoging])




    const [dataForms, setDataForms] = useDataForms();

    const { formaIngreso, lugarIngreso, selectedDate, cedulaPersona, telefono, correoSolicitante, direccionResidencia, nombreSolicitante,
        nombreBeneficiario, idBeneficiario, edadBeneficiario, formaIngresoBeneficiario, lugarIngresoBeneficiario, fechaIngresoBeneficiario } = dataForms;

    const [page, setPage] = usePageRouteMig();

    const handlePageChange = (index) => {
        setPage(index);
    }

    console.log(page);

    const handleDateChange = (selectedDate) => {
        setDataForms({ ...dataForms, selectedDate })
    };
    const handleFechaIngresoBeneficiario = (fechaIngresoBeneficiario) => {
        setDataForms({ ...dataForms, fechaIngresoBeneficiario })
    };

    const handleChangeFormaIngreso = (event) => {
        setDataForms({ ...dataForms, formaIngreso: event.target.value })
    };

    const handleChangeLugarIngreso = (event) => {
        setDataForms({ ...dataForms, lugarIngreso: event.target.value })

    };

    const handleChangeCedulaPersona = (event) => {
        setDataForms({ ...dataForms, cedulaPersona: event.target.value })
    };

    const handleChangeTelefono = (event) => {
        setDataForms({ ...dataForms, telefono: event.target.value })
    };

    const handleChangeCorreoSolicitante = (event) => {
        setDataForms({ ...dataForms, correoSolicitante: event.target.value })
    };

    const handleChangeDireccionResidencia = (event) => {
        setDataForms({ ...dataForms, direccionResidencia: event.target.value })
    };

    const handleChangeNombreBeneficiario = (event) => {
        setDataForms({ ...dataForms, nombreBeneficiario: event.target.value })
    }
    const handleChangeIdBeneficiario = (event) => {
        setDataForms({ ...dataForms, idBeneficiario: event.target.value })
    }
    const handleChangeEdadBeneficiario = (event) => {
        setDataForms({ ...dataForms, edadBeneficiario: event.target.value })
    }
    const handleChangeFormaIngresoBeneficiario = (event) => {
        setDataForms({ ...dataForms, formaIngresoBeneficiario: event.target.value })
    }
    const handleChangeLugarIngresoBeneficiario = (event) => {
        setDataForms({ ...dataForms, lugarIngresoBeneficiario: event.target.value })
    }

    switch (page) {
        case 1:
            return <div className="formRouteMig" key="1">
                <h1>Solicitud de Refugio</h1>
                <form action="">
                    <h4>Datos personales</h4>
                    <hr />
                    <div className="formRow">
                        <div className="fullName">
                            <p>Nombre completo del solicitante</p>
                            <TextField className="fullName__textfield" id="outlined-basic" variant="outlined" value={nombre}
                                placeholder="Ej: Michael Rojas" />
                        </div>
                        <div className="ident">
                            <p>Número de cédula de identidad venezolana</p>
                            <TextField id="outlined-basic" variant="outlined" onChange={handleChangeCedulaPersona} />
                        </div>
                    </div>

                    <div className="formRow">
                        <div className="tel">
                            <p>Telefono</p>
                            <TextField className="fullName__textfield" id="outlined-basic" variant="outlined" onChange={handleChangeTelefono} />
                        </div>
                        <div className="email">
                            <p>Correo electronico del solicitante</p>
                            <TextField className="emailinput" id="outlined-basic" variant="outlined" onChange={handleChangeCorreoSolicitante} />
                        </div>
                    </div>

                    <div className="formRow">
                        <div className="email">
                            <p>Dirección de residencía</p>
                            <TextField className="emailinput" id="outlined-basic" variant="outlined" onChange={handleChangeDireccionResidencia} />
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
                                    <MenuItem value={10}>Nariño</MenuItem>
                                    <MenuItem value={20}>Cucuta</MenuItem>
                                    <MenuItem value={30}>Santander</MenuItem>
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
            return <div className="formRouteMig" key="2">
                <h1>Solicitud de Refugio</h1>
                <form action="">
                    <h4>Beneficiarios</h4>
                    <hr />

                    <div className="formRow">
                        <div className="fullName">
                            <p>Nombre completo del Beneficiario</p>
                            <TextField className="fullName__textfield" id="outlined-basic" variant="outlined"
                                placeholder="Ej: Michael Rojas" onClick={handleChangeNombreBeneficiario} />
                        </div>
                        <div className="">
                            <p>Número de identificacion venezolana</p>
                            <TextField id="outlined-basic" variant="outlined" onClick={handleChangeIdBeneficiario} />
                        </div>
                        <div className="">
                            <p>Edad</p>
                            <TextField id="outlined-basic" variant="outlined" onClick={handleChangeEdadBeneficiario} />
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
                                    value={formaIngresoBeneficiario}
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
                                    value={lugarIngresoBeneficiario}
                                    onChange={handleChangeLugarIngresoBeneficiario}
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
                                        value={fechaIngresoBeneficiario}
                                        onChange={handleFechaIngresoBeneficiario}
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
            return <div className="formRouteMig" key="3">
                <h1>Solicitud de Refugio</h1>
                <h4>Solicitante</h4>
                <hr />
                <h3 className="formRouteMig__title">Selecciones los ducmentos los cuales disponga en sus manos.</h3>
                <div className="lastButton">
                    <Button className="nextBtn" onClick={() => handlePageChange(4)} variant="contained">Siguiente</Button>
                </div>

            </div>
            break;

        case 4:
            return <div className="formRouteMig" key="4">
                <h1>Solicitud de Refugio</h1>
                <h4>Descargar Solicitud</h4>
                <hr />

                <PDF></PDF>
            </div>
            break;

        default:
            break;
    }

}

export default FormRouteMig;
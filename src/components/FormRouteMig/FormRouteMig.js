import React, { useEffect, useState } from 'react';
import './FormRouteMig.scss'
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, makeStyles, MenuItem, Select, TextField, withStyles } from '@material-ui/core';
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
import FormDescription from '../FormDescription/FormDescription'


const FormRouteMig = () => {
    const { useFaq, useDataForms, useLogin, usePageRouteMig, useCompleted } = AppContext.Consumer();
    const [nombre, setNombre] = useState("Nombre de usuario");
    const [beneficiarioNull, setbeneficiarioNull] = useState(false);
    const [finishForm, setfinishForm] = useState(false);
    const [pageRouteMig, setPageRouteMig] = usePageRouteMig();
    const [isLoging, setIsLogin] = useLogin();
    const [type, Step] = useFaq();
    const [onCompleted, setCompleted] = useCompleted();

    useEffect(() => {
        setNombre(User.information.nombre)
        setDataForms({ ...dataForms, nombreSolicitante: User.information.nombre })
    }, [isLoging])

    useEffect(() => {
        
        if (pageRouteMig == 0) {
            Step("Notification");
        } else {
            Step("Step");
        }
    }, [pageRouteMig])


    const GreenCheckbox = withStyles({
        root: {
            color: "#7241A6",
            '&$checked': {
                color: "#7241A6",
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

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
        if (nombreBeneficiario == "" || nombreBeneficiario == null) {
            setbeneficiarioNull(true);
        }
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

    const handleFinishForm = () => {
        handlePageChange(4)
         setCompleted(true)
    }

    switch (page) {

        case 0:
            return <div className="formRouteMig" key="0">
                <h1>Solicitud de Refugio</h1>
                <hr />

                <FormDescription />

            </div>
            break;

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
                                placeholder="Ej: Michael Rojas" onChange={handleChangeNombreBeneficiario} />
                        </div>
                        <div className="">
                            <p>Número de identificacion venezolana</p>
                            <TextField id="outlined-basic" variant="outlined" onChange={handleChangeIdBeneficiario} />
                        </div>
                        <div className="">
                            <p>Edad</p>
                            <TextField id="outlined-basic" variant="outlined" onChange={handleChangeEdadBeneficiario} />
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
                <h3 className="formRouteMig__title">Selecciones los documentos los cuales disponga en sus manos.</h3>
                <p>Los anexos son diferentes documentos los cuales certifican su autenticidad como solicitante la de sus beneficiarios. A continuación, se mostrarán una serie de anexos y es importante marcar con los cuales cuenta usted y sus beneficiarios. Por lo menos, el solicitante y los beneficiarios deben contar con al menos 1 de los documentos.</p>

                <div className="formRouteMig__checks">
                    <FormControlLabel
                        control={<GreenCheckbox name="checkedG" />}
                        label="Identifiación Venezolana"
                    />
                    <FormControlLabel
                        control={<GreenCheckbox name="checkedG" />}
                        label="Pasaporte"
                    />
                    <FormControlLabel
                        control={<GreenCheckbox name="checkedG" />}
                        label="Declaración Juramentada"
                    />
                </div>
                {beneficiarioNull ? <div>
                    <h4>Beneficiario</h4>
                    <hr />
                    <div className="formRouteMig__checks">
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Identifiación Venezolana"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Pasaporte"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Declaración Juramentada"
                        />
                    </div>

                </div> : <></>}



                <div className="lastButton">
                    <Button className="nextBtn" onClick={handleFinishForm} variant="contained">Siguiente</Button>
                </div>

            </div>
            break;

        case 4:
            return <div className="formRouteMig" key="4">
                <h1>Solicitud de Refugio</h1>
                <h4>Descargar Solicitud</h4>
                <hr />

                <PDF></PDF>
                <div className="sendEmail">
                    <a onClick={() => setfinishForm(true)} href="mailto:cjuridico@icesi.edu.co">Click para enviar al correo de migracion colombia</a>

                </div>
                {finishForm ?
                    <div className="lastButton">
                        <Link to="/inicio/Ruta_Migratoria">
                            <Button className="nextBtn" onClick={() => handlePageChange(0)} variant="contained">Finalizar</Button>
                        </Link>
                    </div> : <></>
                }
            </div>
            break;

        default:
            break;
    }

}

export default FormRouteMig;
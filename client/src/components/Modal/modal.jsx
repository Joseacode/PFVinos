import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { style } from '@material-ui/icons';
import { postUser } from '../../actions/user';


const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos: {
        cursor: 'pointer'
    },
    inputMaterial: {
        width: '100%'
    },
    button: {
        minwidth: '130px',
        height: "40px",
        color: "#fff",
        padding: "30px 40%",
        fontweight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        display: "inlineblock",
        outline: "none",
        overflow: "hidden",
        borderradius: "5px",
        border: "none",
        backgroundcolor: "#3d348b"
    }


}));

export default function Modall() {

    const dispatch = useDispatch()

    const styles = useStyles()

    const [modalInsertar, setModalInsertar] = useState(false)

    const [consolaSeleccionada, setConsolaSeleccionada] = useState({
        usuario: '',
        nombre: '',
        direccion: '',
        pais: '',
        provincia: '',
        contrasena:'',
        email: '',
        telefono: '',
        
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setConsolaSeleccionada(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(consolaSeleccionada);
    }

    const abrirCerrarModalInsertar = () => {
        setModalInsertar(!modalInsertar)
    }

    const hundleSubmit = e => {
        dispatch(postUser(consolaSeleccionada))
        abrirCerrarModalInsertar()
    }
    
    const bodyInsertar = (
        <div className={styles.modal}>
            <h3>Agregar Nuevo Usuario</h3>
            <TextField className={styles.inputMaterial} name='ususaio' label="Usuario" onChange={(e) => handleChange(e)} />
            <br/>
            <TextField className={styles.inputMaterial} name='nombre' label="Nombre" onChange={(e) => handleChange(e)}/>
            <br />
            <TextField className={styles.inputMaterial} name='direccion' label="Direccion" onChange={(e) => handleChange(e)}/>
            <br />
            <TextField className={styles.inputMaterial} name='pais' label="Pais" onChange={(e) => handleChange(e)}/>
            <br />
            <TextField className={styles.inputMaterial} name='provincia' label="Provincia" onChange={(e) => handleChange(e)}/>
            <br />
            <TextField className={styles.inputMaterial} name='contraena' label="contrasena" onChange={(e) => handleChange(e)} />
            <br />
            <TextField className={styles.inputMaterial} name='email' label="Email" onChange={(e) => handleChange(e)}/>
            <br />
            <TextField className={styles.inputMaterial} name='telefono' label="Telefono" onChange={(e) => handleChange(e)}/>
            <br />
            
            <br /><br />
            <div align='rigth'>
                <Button color='primary' onClick={(e) => hundleSubmit(e)}>Insertar</Button>
                <Button color='secondary' onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
            </div>

        </div>

        )

    return (
        <div>

            <Modal
                open={modalInsertar}
                onClose={abrirCerrarModalInsertar}>
                {bodyInsertar}

            </Modal>
            <Button className={styles.button} onClick={() => abrirCerrarModalInsertar()} >Insertar Nuevo Usuario</Button>
        </div>


        )
}

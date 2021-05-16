import React from 'react';
import {
    Label,
    GrupoInput,
    Input,
    LeyendaError,
    IconoValidacion,
} from '../elementos/Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = (props) => {

    const OnChange = (e) => {
        props.cambiarEstado({ ...props.estado, campo: e.target.value })
    }

    const Validacion = () => {
        if (props.expresionRegular) {
            if (props.expresionRegular.test(props.estado.campo)) {
                props.cambiarEstado({ ...props.estado, valido: 'true' })
            } else {
                props.cambiarEstado({ ...props.estado, valido: 'false' })
            }
        }

        if(props.funcion){
            props.funcion();
        }
    }

    return (
        <div>
            <Label htmlFor={props.name} valido={props.estado.valido} >{props.label}</Label>
            <GrupoInput>
                <Input
                    type={props.tipo}
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.estado.campo}
                    onChange={OnChange}
                    onKeyUp={Validacion}
                    onBlur={Validacion}
                    valido={props.estado.valido}
                />
                <IconoValidacion
                    icon={props.estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                    valido={props.estado.valido}
                />
            </GrupoInput>
            <LeyendaError valido={props.estado.valido} >{props.leyendaError}</LeyendaError>
        </div>
    );
}

export default ComponenteInput;
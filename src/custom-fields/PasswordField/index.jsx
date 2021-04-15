import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './PasswordField.scss';

PasswordField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

PasswordField.defaultProps = {
    type: 'password',
    label: '',
    placeholder: '',
    disabled: false,
}

function PasswordField(props) {
    const [visible, setVisible] = useState(false);
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;
    const { name } = field;
    const{errors, touched} = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input 
                id={name}
                {...field}

                type={visible ? "password" : "text"}
                disabled={disabled}
                placeholder={placeholder}

                invalid={showError}
            />
             <span>
                <FontAwesomeIcon className="password-toggle-icon"
                    icon={visible ? faEyeSlash : faEye} 
                    onClick={() => setVisible(!visible)} 
                />
            </span>
            <ErrorMessage name={name} component={FormFeedback}/>
        </FormGroup>
    );
}

export default PasswordField;
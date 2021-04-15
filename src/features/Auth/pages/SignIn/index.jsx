import InputField from 'custom-fields/InputField';
import PasswordField from 'custom-fields/PasswordField';
import firebase from 'firebase';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import './SignIn.scss';


SignIn.propTypes = {
    onSubmit: PropTypes.func,
};
SignIn.defaultProps = {
    onSubmit: null,
}
const uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };
function SignIn(props) {
    
    const initialValues = {
        username: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .min(8, "Tên đăng nhập có độ dài ít nhất 8 ký tự")
        .max(50, "Tên đăng nhập có độ dài dài nhất 50 ký tự")
        .required('Trường bắt buộc nhập'),
        password: Yup.string()
        .required('Trường bắt buộc nhập'),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched });
                
                return (
                    <Form className="form">
                        <div className="text-center">
                            <h2>Đăng nhập</h2>
                            <p>Tham gia chia sẻ cùng cộng đồng phụ nữ lớn nhất Việt Nam</p>
                        </div>

                        <FastField
                            name="username"
                            component={InputField}

                            lable="UserName"
                            placeholder="Tên đăng nhập"
                        >
                        </FastField>

                        <FormGroup>
                        <FastField
                            name="password"
                            component={PasswordField}

                            lable="Password"
                            placeholder="Mật khẩu"
                        >   
                        </FastField>
                        
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit" color={'primary'}>
                                {isSubmitting && <Spinner size="smm" />}
                                &nbsp;
                                Đăng nhập
                            </Button>
                        </FormGroup>
                        <a href="#">Quên mật khẩu?</a>
                        <hr />
                        <FormGroup>
                            <p>Hoặc đăng nhập qua</p>
                            <StyledFirebaseAuth className="Social" uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        </FormGroup>
                        <FormGroup>
                            <p>Bạn chưa có tài khoản? <a href="">Đăng ký</a></p>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default SignIn;
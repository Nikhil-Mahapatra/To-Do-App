import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { load as loadAccount } from '../../Reducers/Account'

const data = {
  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Nikhil',
  email: 'nikhil.mahapatra@gmail.com'
};

const newField = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} id={id} />
      {touched && error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

const required = value => (value ? undefined : 'Required!');
const longEnough = value =>
  value && value.length >= 5 ? undefined : 'Too short!';
const email = value =>
  value && /(.+)@(.+){2,}\.(.+){2,}/i.test(value)
    ? undefined
    : 'Invalid email!';
const passwordsMatch = (value, allValues) => 
    value !== allValues.password ? 'Passwords don\'t match' : undefined;

let RegistrationForm = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props;
  return (
      <Card style={{ width: '22rem' }}>
            <Card.Body>
                <Card.Title>Registration Page</Card.Title>
                  <Card.Text>
                  <form onSubmit={handleSubmit(val => alert("Name:" + val.firstName + "\r\nEmail:" + val.email + "\r\nPassword:" +val.password))}>
                  <Form.Group controlId="formBasic">
                    <label htmlFor="first-name">Name:</label>
                    <Field name="firstName" type="text" component={newField} id="first-name" validate={[required, longEnough]}/>
                    <label htmlFor="email">Email:</label>
                    <Field name="email" type="email" component={newField} id="email" validate={[required, email]}/>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                    <label htmlFor="pass">Password:</label>
                    <Field name="password" type="password" component={newField} id="password" validate={[required, longEnough, passwordsMatch]}/>
                    <label htmlFor="pass">Retype Password:</label>
                    <Field name="passwordRetype" type="password" component={newField} id="passwordRetype" validate={[required, longEnough, passwordsMatch]}/>
                    <Form.Text className="text-muted">
                      We'll encrypt your secret.
                    </Form.Text>
                    <br></br>
                    <Button type="submit" disabled={pristine || submitting} variant="success">
                      Register
                    </Button> &nbsp;
                    <Button type="button" onClick={reset} variant="primary">
                      Reset Form
                    </Button>&nbsp;
                    
                    </Form.Group>
                  </form>
                 </Card.Text>
            </Card.Body>
      </Card>
    )
  }

  
  export default reduxForm({
    form: 'RegistrationForm'
  })(RegistrationForm);

  RegistrationForm = connect(
    state => ({
      initialValues: state.account.data, // pull initial values from account reducer
    }),
    { load: loadAccount }, // bind account loading action creator
  )(RegistrationForm);
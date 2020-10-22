import React from 'react';
import s from './LoginPage.module.css';
import { Button, Form, Input } from 'element-react';
import 'element-theme-default';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        login: '',
        pass: ''
      },
      validCredentials: {
        username: "user",
        password: "pass"
      },
      rules: {
        login: [
          { required: true, message: 'Please input the login name', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('Please input the login name'));
              } else {


                callback();
              }
            }
          }
        ],
        pass: [
          { required: true, message: 'Please input the password', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('Please input the password'));
              } else {
                callback();
              }
            }
          }
        ]
      }
    };
  }



  handleSubmit(e) {
    e.preventDefault();
    // debugger;


    if (this.state.form.login === '') {
      this.refs.form.validateField('login');
    }

    if (this.state.form.pass === '') {
      this.refs.form.validateField('pass');
    }

    else {
      if (this.state.form.login === this.state.validCredentials.username &&
        this.state.form.pass === this.state.validCredentials.password) {
        alert('success!');
      }
      else {
        alert('not success');
      }
    }

    // this.refs.form.validate((valid) => {
    //   if (valid) {
    //     alert('submit!');
    //   } else {
    //     console.log('error submit!!');
    //     return false;
    //   }
    // });
  }

  handleReset(e) {
    e.preventDefault();
    this.refs.form.resetFields();
  }

  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }

  render() {
    return (
      <div className={s.login__container}>
        <p>Login: user</p>
        <p>Password: pass</p>
        <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">

          <Form.Item label="Login" prop="login">
            <Input type="login" value={this.state.form.login} onChange={this.onChange.bind(this, 'login')} autoComplete="off" />
          </Form.Item>

          <Form.Item label="Password" prop="pass">
            <Input type="password" value={this.state.form.pass} onChange={this.onChange.bind(this, 'pass')} autoComplete="off" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={this.handleSubmit.bind(this)}>Log In</Button>
            <Button onClick={this.handleReset.bind(this)}>Reset</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default LoginPage;
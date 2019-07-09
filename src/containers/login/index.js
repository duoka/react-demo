import React                                    from "react"
import { Form, Icon, Input, Button, Checkbox }  from "antd";
import "./index.less";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Form onSubmit={this.handleSubmit} className="content">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: '请输入用户名!' },
                { min: 3, message: '用户名不能少于3个字符!' },
                { max: 30, message: '用户名不能大于30个字符!' },
              ],
            })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入用户名"
                />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: '请输入密码!' },
                { min: 4, message: '密码不能少于4个字符!' },
                { max: 20, message: '用户名不能大于20个字符!' },
              ],
            })(
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="请输入密码"
                />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>七天内免登录</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码？
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Login);

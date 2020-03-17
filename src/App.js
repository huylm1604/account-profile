import React from "react";
import styles from "./App.css";
import { Row, Col, Divider, Form, Input, Button } from "antd";

function App() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };
  return (
    <div>
      <Divider orientation="left" className={styles.divider}>
        Profile Settings
      </Divider>
      <Row style={{marginTop : "3%"}}>
        <Col span={6} offset={8}>
          <Form name="register" scrollToFirstError {...formItemLayout}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "Valid email!"
                },
                {
                  required: true,
                  message: "Please input your email!"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="nickname"
              label="Fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your fullname!",
                  whitespace: true
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!"
                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="New Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") !== value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The new password should not be matched with the old password!"
                    );
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <div>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
                <Button style={{marginLeft : "5%"}} htmlType="submit">Reset</Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;

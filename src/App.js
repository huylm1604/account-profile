import React from "react";
import styles from "./App.css";
import {
  Row,
  Col,
  Divider,
  Form,
  Input,
  Button,
  Typography,
  Table,
  Modal,
  Tooltip
} from "antd";

import { FireFilled, GiftFilled } from "@ant-design/icons";
import { useState } from "react";

const { Title } = Typography;
// dataSource dummie data
const dataSource = [
  {
    key: "1",
    name: "Tap Doan Huy Map"
  },
  {
    key: "2",
    name: "Web cua Don Dai Ca"
  },
  {
    key: "3",
    name: "Orga 3"
  }
];

// table columns
const columns = [
  {
    title: "Organization Name",
    dataIndex: "name",
    key: "name"
  },
  {
    render: () => <Button type="danger">Delete</Button>
  }
];

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

  const [visible, setVisible] = useState(false);
  return (
    <div>

      {/* Begin Feedback button  */}

      <Button
        type="danger"
        style={{
          position: "fixed",
          right: "0",
          top: "50%",
          zIndex: "10",
          transform: "rotate(-90deg)",
          marginRight: "-42px"
        }}
        size="large"
        onClick={() => setVisible(true)}
      >
        <FireFilled rotate="90" />
        Feedback
      </Button>

        {/* End Feedback button */}

        {/* Begin Feedback Modal */}

      <Modal
        title="How would you rate your experience?"
        style={{ right: 0, position: "absolute", top: "35%", textAlign:"center" }}
        visible={visible}
        width= '300px'
        height= '50px'
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>
          <Tooltip placement="bottom" title="Hate">
          <Button type="danger" size="large" style={{marginLeft: "10px"}} shape="circle">
            <GiftFilled />
          </Button>
          </Tooltip>
          <Tooltip placement="bottom" title="Dislike">
          <Button type="danger" size="large" style={{marginLeft: "10px"}} shape="circle">
            <GiftFilled />
          </Button>
          </Tooltip>
          <Tooltip placement="bottom" title="Neutral">
          <Button type="danger" size="large" style={{marginLeft: "10px"}} shape="circle">
            <GiftFilled />
          </Button>
          </Tooltip>
          <Tooltip placement="bottom" title="Like">
          <Button type="danger" size="large" style={{marginLeft: "10px"}} shape="circle">
            <GiftFilled />
          </Button>
          </Tooltip>
          <Tooltip placement="bottom" title="Love">
          <Button type="danger" size="large" style={{marginLeft: "10px"}} shape="circle">
            <GiftFilled />
          </Button>
          </Tooltip>
          
        </p>
      </Modal>

      {/* End Feedback Modal */}

      <Title level={2}>Account profile</Title>
      <Row style={{ marginTop: "3%" }}>
        <Col span={6} offset={8}>
          <Divider orientation="left" className={styles.divider}>
            <Title level={4}>Profile information</Title>
          </Divider>
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
              name="fullName"
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
            <Form.Item {...tailFormItemLayout}>
              <div>
                <Button type="primary" htmlType="submit">
                  Update profile
                </Button>
                <Button style={{ marginLeft: "5%" }} htmlType="reset">
                  Reset
                </Button>
              </div>
            </Form.Item>
          </Form>
          <Divider orientation="left" className={styles.divider}>
            <Title level={4}>Password change</Title>
          </Divider>
          <Form name="passwordChange" scrollToFirstError {...formItemLayout}>
            <Form.Item
              name="password"
              label="Old Password"
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
                  Change Password
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Divider orientation="left" className={styles.divider}>
        <Title level={4}>My Organization</Title>
      </Divider>
      <Table
        pagination={{ position: "both" }}
        columns={columns}
        dataSource={dataSource}
      ></Table>
    </div>
  );
}

export default App;

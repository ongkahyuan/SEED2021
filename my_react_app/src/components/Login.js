import React from 'react';
import { useSignIn } from 'react-auth-kit';
import { Form,Button,Input } from "antd"
import { useNavigate } from 'react-router-dom';

export const Login= () => {
    const navigate = useNavigate()
    const signIn = useSignIn()

    const HandleSubmitFunction = async (target) =>{
        signIn({
            token:"12312321",
            expiresIn:60,
            tokenType:"Bearer"
        })
        navigate("/")        
        // await postRequest("/login",target).then(
        //     (response) => {
        //         signIn({
        //             token:response.data.token,
        //             expiresIn:60,
        //             tokenType:"Bearer",
            
        //         })
        //     }
        // ).catch((err) => {
        //     console.log(err)
        // })
    } 

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={HandleSubmitFunction}
            >
                <Form.Item
                label="Employee ID"
                name="username"
                rules={[{ required: true, message: 'Please input your Employee ID!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login
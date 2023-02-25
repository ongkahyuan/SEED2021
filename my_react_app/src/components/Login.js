import React from 'react';
import { useSignIn } from 'react-auth-kit';
import { Form,Button,Input } from "antd"
import { useNavigate } from 'react-router-dom';
import {ClaimTable} from  './claims'
import {PolicyTable} from './policy'
import {EditDeleteButton} from './Button'
import {AddButton} from './AddButton'
import {postRequest} from '../api/api'
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
        // await postRequest("/user/login",target).then(
        //     (response) => {
        //         signIn({
        //             token:response.data.token,
        //             expiresIn:60,
        //             tokenType:"Bearer",
            
        //         })
        //         navigate("/")   
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
                name="EmployeeID"
                rules={[{ required: true, message: 'Please input your Employee ID!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="Password"
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

            <EditDeleteButton text={"Delete"}/>
            <EditDeleteButton text={"Edit"}/>
            <AddButton/>
        </div>
    );
}

export default Login
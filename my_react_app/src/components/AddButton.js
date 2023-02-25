import React from 'react'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { DatePicker, Form, Input, Select, Space, Radio, Button as Btn , } from 'antd';
const regex = /[^\d]/g;
export const AddButton = ()=>{
    const [open, setOpen] = useState(false);
    const [reciept, setReciept] = useState('')
    const [date, setDate] = useState('')
    const [claimAmount, setClaimAmount] = useState('')
    const [purpose, setPurpose] = useState('')
    const [followUp, setFollowUp] = useState('')
    const [previousClaimId, setPreviousClaimId] = useState('')

    const addClaims= (e)=>{
        console.log({reciept})
        console.log.apply({purpose})
        console.log({claimAmount})
        console.log({date})
      }

    const openModal = ()=> setOpen(true)
    const closeModal = ()=>setOpen(false)
    const onOk = (value) => {
        console.log('onOk: ', value);
      };

    return (
        <div>
        <button onClick = {openModal}>Add</button>
        <Modal isOpen={open} onRequestClose={closeModal}  appElement={document.getElementById('root')}>
            <h2>Add a New Claim</h2>
            <Form className="edit-form" onFinish = {addClaims}>
                <div>
                  <Form.Item label="Reciept Number">
                  <Input value ={reciept} tpye="number"placeholder="Reciept Number" onChange={(e)=>{setReciept(e.target.value)}}/>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item label="Claim Amount">
                  <Input value ={claimAmount} tpye="number"placeholder="$" onChange={(e)=>{setClaimAmount(e.target.value)}}/>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item label="Purpose">
                  <Input value ={purpose} tpye="number"placeholder="Purpose" onChange={(e)=>{setPurpose(e.target.value)}}/>
                  </Form.Item>
                </div>
                <div>
                <Form.Item label="Date">
                 <Space direction="vertical" size={12}>
                  <DatePicker  onChange={(date, dateString) => setDate(dateString)} onOk={onOk} />
                </Space>
                </Form.Item>
                </div>
                <Form.Item label="Is this a follow up?" >
                <Input 
                type="checkbox" 
                checked ={followUp}
                value={followUp} 
                onChange={(e)=>{setFollowUp(e.currentTarget.checked)}}
                />
                </Form.Item>
                {followUp&&
                  <Form.Item label="Previous Claim ID">
                  <Input value ={previousClaimId} tpye="number"placeholder="Previous Claim ID" onChange={(e)=>{setPreviousClaimId(e.target.value)}}/>
                  </Form.Item>
                }
                <br/>
                <Space wrap>
                <input type = "submit" value = 'Save' className="btn btn-block"></input>
                {/* <input type = "submit" value = 'Update' className="btn btn-block" onClick={(console.log('asda'))}/> */}
                <button onClick={closeModal}>Close Modal</button>
                </Space>
            </Form>
        </Modal> 
        </div>
    )
}
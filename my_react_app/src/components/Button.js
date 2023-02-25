import React from 'react'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { DatePicker,Form, Input, Select, Space, Radio, Button as Btn , Checkbox } from 'antd';


export const Button = ()=>{
    
    // For Delete, Edit or Add
    const [type, setType] = useState('')
    const [open, setOpen] = useState(false);
    const [errMsg, setErrMsg] = useState('')
    const [claimNo, setClaimNo] = useState('')
    const [claimAmount, setClaimAmount] = useState('')
    const [purpose, setPurpose] = useState('')
    const [date, setDate] = useState('')
    const [followUp, setFollowUp] = useState(false)
    const [previousClaimId, setPreviousClaimId] = useState('')
    const { RangePicker } = DatePicker;
    
    useEffect(() => {
      setType('Edit')
    }, [])
    
    useEffect(()=>{
      console.log({followUp})
    },[setFollowUp])
    const openModal = ()=> setOpen(true)

    const closeModal = ()=>setOpen(false)

  //   const deleteClaims = async(id) =>{   
  //     try{
  //        await axios.delete(`/api/${id}`,{
  //            data:{
  //                claimId:claimId
  //            }
  //        })
  //        .then(response=>{ 
  //            console.log(response.data)
  //        })
  //     } catch(err){
  //        console.log(`Error:${err.messagae}`)
  //     }
  //     closeModal()
  // }
    const deleteClaims=()=>{
      console.log('delete')
    }
    const editInputs= (e)=>{
      
      console.log({claimAmount})
      console.log({date})
    }

    const customStyles = {
        content: {
          width: '400px',
          height: '100px',
          margin: 'auto'
        }
      };

      const onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      };
      const onOk = (value) => {
        console.log('onOk: ', value);
      };
    return (
      <div>
      {
      type==='Delete' 
      ?  
        <div>
          <button onClick = {openModal}>{type}</button>
            <Modal isOpen={open} onRequestClose={closeModal} style={customStyles} appElement={document.getElementById('root')}>
                <div>
                  <header><b>Are you sure you want to delete insurance claim No.?</b></header></div>
                {/* <button onClick= {()=>(deleteClaims())}>Delete</button> */}
                <Space wrap>
                <div style={{ position: 'absolute', bottom: '5%', left: '45%', transform: 'translateX(-50%)' }}>
                  <button  style ={{margin:'30px'}} onClick={deleteClaims}>Delete</button>
                  <button onClick={closeModal}>Close Modal</button>
                </div>
                </Space>
            </Modal>   
        </div> 
        :
        <div>
        <button onClick = {openModal}>{type}</button>
        <Modal isOpen={open} onRequestClose={closeModal}  appElement={document.getElementById('root')}>
            <h2>Edit Insurance Claim No:</h2>
            <Form className="edit-form" onFinish = {editInputs}>
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
                {/* <div>
                  <Form.Item label="Date">
                  <Input value ={date} tpye="number"placeholder="DD/MM/YYYY" onChange={(e)=>{setDate(e.target.value)}}/>
                  </Form.Item>
                </div> */}
                <Form.Item label="Date">
                 <Space direction="vertical" size={12}>
                  <DatePicker  onChange={(date, dateString) => setDate(dateString)} onOk={onOk} />
                </Space>
                </Form.Item>
                {/* <Form.Item label="Is this a follow up?" >
                <Checkbox value={followUp}  onChange={onChange}>Checkbox</Checkbox>
                </Form.Item> */}
                {followUp&&
                  <Form.Item label="Previous Claim ID">
                  <Input value ={previousClaimId} tpye="number"placeholder="Previous Claim ID" onChange={(e)=>{setPreviousClaimId(e.target.value)}}/>
                  </Form.Item>
                }
                <br/>
                <Space wrap>
                <input type = "submit" value = 'Update' className="btn btn-block"></input>
                {/* <input type = "submit" value = 'Update' className="btn btn-block" onClick={(console.log('asda'))}/> */}
                <button onClick={closeModal}>Close Modal</button>
                </Space>
            </Form>
        </Modal> 
        </div>
        
        }
      </div>
      
    )
}
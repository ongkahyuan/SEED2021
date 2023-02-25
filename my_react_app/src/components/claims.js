import { useState, useEffect } from 'react';
import { Button, Space, Table } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function claims() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchClaims = async () => {
            try {
                const response = await axios.get('');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchClaims();
    }, []);

    const handleDelete = async (record) => {
        try {
            const response = await axios.delete(`/${record.ClaimID}`);
            message.success('Claim deleted successfully!');
            setData(data.filter(item => item.ClaimID !== record.ClaimID));
        } catch (error) {
            console.log(error);
            message.error('Failed to delete Claim!');
        }
    };

    const handleEdit = () => {
        let navigate = useNavigate();
        navigate('/policy/:id');
    }

    const columns = [
        {
            title: 'Claim ID',
            dataIndex: 'ClaimID',
            key: 'ClaimID',
        },
        {
            title: 'Expense Date',
            dataIndex: 'ExpenseDate',
            key: 'ExpenseDate',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Operation',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        color="primary" className="px-4"
                        onClick={handleEdit}>
                        Edit
                    </Button>
                    <Popconfirm
                        title="Are you sure you want to delete this claim?"
                        onConfirm={() => handleDelete(record)}
                    >
                        <Button type="link" danger>
                            Delete
                        </Button>
                    </Popconfirm>)
                    : null
                </Space>
            ),
        },
    ];
    return (
        <div>
            <Table
                dataSource={data}
                columns={columns}
                style={{ margin: '0 auto', padding: '40px' }}
            />
        </div>
    );
}
export default claims;
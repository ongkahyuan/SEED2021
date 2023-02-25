import { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

function claims() {
    const [data, setData] = useState([]);
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
    },
    {
        title: '',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Edit</a>
                data.length >= 1 ? (
                <Popconfirm
                    title="Are you sure you want to delete this transaction?"
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

  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
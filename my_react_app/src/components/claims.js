import { Table, Space, Popconfirm, Button } from 'antd';
import { useEffect, useState } from 'react';
import { getRequestProtected } from '../api/api';

// import {moment} from 'moment';

export const ClaimTable = () => {

    const [data, setData] = useState([]);

    useEffect(async () => {
        await getRequestProtected('/claim').then(response => {
            setData(response.data);
        })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const columns = [
        {
            title: 'Claim ID',
            dataIndex: 'ClaimID',
            key: 'ClaimID',
        },
        ,
        {
            title: 'Expense Date',
            dataIndex: 'ExpenseDate',
            key: 'ExpenseDate',
            // render: (ExpenseDate) => moment(ExpenseDate).format('YYYY-MM-DD'),
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            onFilter: (value, record) => record.address.indexOf(value) === 0,

        },
        {
            title: 'Amount',
            dataIndex: 'Amount',
            key: 'Amount',
        },
        {
            title: 'Purpose',
            dataIndex: 'Purpose',
            key: 'Purpose',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a> Edit </a>
                    <Popconfirm
                        title="Are you sure you want to delete this user?"
                    // onConfirm={() => handleDelete(record)}
                    >
                        <Button type="link" danger>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },

    ];
    return (
        <Table columns={columns} dataSource={data} style={{
            margin: '0 auto',
            padding: '40px',
        }} />
    );
};

// export default ClaimTable;
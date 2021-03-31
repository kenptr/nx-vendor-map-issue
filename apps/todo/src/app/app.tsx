import React from 'react';
import { Button, Input, Result, Table } from 'antd';
import styles from './app.module.less';
import { ReactComponent as Logo } from './logo.svg';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  'asd',
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
];

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to todo!</h1>
      </header>
      <main style={{ marginTop: 30 }}>
        <Input placeholder="Basic usage" />
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
        <Table dataSource={dataSource as any} columns={columns} />
      </main>
    </div>
  );
}

export default App;

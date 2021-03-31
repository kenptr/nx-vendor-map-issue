import React from 'react';
import { Button, Input, Result } from 'antd';
import styles from './app.module.less';
import { ReactComponent as Logo } from './logo.svg';

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
            <Button type={'break-it!' as any} key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
        ,
      </main>
    </div>
  );
}

export default App;

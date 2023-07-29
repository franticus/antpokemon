import React from 'react';
import Header from './components/Header';
import { Row, Col } from "antd";
import Table from './components/Table';

function App() {
  return (
    <>
      <Header />
      <Row>
        <Col xs={24} md={{span: 12, offset: 6}}>
          <Table />
        </Col>
      </Row>
    </>
  );
}

export default App;

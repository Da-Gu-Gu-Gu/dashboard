import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

const SelectComponents = () => {
  return (
    <Select
    defaultValue="lucy"
    bordered={false}
    style={{
      width: 120,

    }}
    onChange={handleChange}
  >
    <Option value="jack">1</Option>
    <Option value="lucy">2</Option>
    <Option value="Yiminghe">3</Option>
  </Select>
  )
}

export default SelectComponents
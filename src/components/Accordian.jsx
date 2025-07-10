import React from 'react';
import { Collapse } from 'antd';
const text = `
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
  vol culpa qui officia desrerum facilis est et expedita distinctio” .
`;
const items = [
  {
    key: '1',
    label: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui',
    children: <p>{text}</p>,
  },
];
const Accordion = () => {
  const onChange = key => {
    console.log(key);
  };
  return <Collapse  className='' items={items} defaultActiveKey={['1']} onChange={onChange} />;
};
export default Accordion;
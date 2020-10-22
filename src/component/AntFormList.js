import React, {Component} from 'react';
import { Form, Input, Button, Layout } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const validateMessages  ={
  required: '${label} is required',
  types: {
    email: '${label} is not validate email',
    number: '${label} is not validate number'
  }
}

export default class AntFormList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onFinish (value) {
    console.log('value', value)
  }

  render () {
    
    return (
    <div ref={this.myRef}>
      <Form name="" onFinish={this.onFinish} validateMessages={validateMessages}>
        <Form.Item name={['name']} label="Name" rules={[
          {required: true}
        ]}>
          <Input />
        </Form.Item>
        <Form.Item name={['email']} label="Email" rules={[
          {type: 'email'}
        ]}>
          <Input />
        </Form.Item>
        <Form.Item name={['numbers']} label="Age" rules={[
          {type: 'number'}
        ]}>
          <Input />
        </Form.Item>
        
        {/* <Form.List name="FormListDemo">
          { (fields, {add, remove}, { errors }) => {
              return (
                <div>
                  {
                    fields.map((field, index) => (
                      <div key={field.key} style={{ display:'flex', width:'90%'}}>
                        <Form.Item
                          {...field}
                          name={[field.name, 'first']}
                          fieldKey={[field.fieldKey,  'first']}
                        >
                          <Input placeholder="first name."/>
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, 'last']}
                          fieldKey={[field.fieldKey,  'last']}
                        >
                          <Input placeholder="last name."/>
                        </Form.Item>
                        {
                          // fields.length > 1 ? (
                            <MinusCircleOutlined onClick={() => {remove(field.name)}}/>
                          // ) : null
                        }
                      </div>
                    )
                    )}
                  <Form.Item>
                    <Button
                      onClick={() => {
                        add();
                      }}
                      style={{ width: '30%' }}
                    >
                      <PlusOutlined /> Add field
                    </Button>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add('The head item', 0);
                      }}
                      style={{ width: '30%', marginTop: '20px' }}
                    >
                      <PlusOutlined /> Add field at head
                    </Button>

                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </div>
              );
            }
          }
        </Form.List> */}
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    );
  }
}

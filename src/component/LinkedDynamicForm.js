import React, {Component} from 'react';
import { Form, Input, Row, Col, Radio, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './LinkedDynamicForm.css'

export default class LinkedDynamicForm extends Component {
  constructor(props) {
    super(props);
    this.DynamicRef = React.createRef();
    this.state = {
      isGoodsDiscount: false
    }
  }

  onFinish (value) {
    console.log('value', value)
  }

  ConpouTypeChange(e) {
    const couponType = e.target.value;
    console.log('this.ref', this.DynamicRef)
    this.DynamicRef.current.resetFields();
    this.setState ({
      isGoodsDiscount: couponType === 0 ? true : false
    })
  }

  onChange(e) {
    console.log('changeValue', e.target.value)
  }

  render () {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const formItemLayout0717 = {
      labelCol: {
          span: 7,
      },
      wrapperCol: {
          span: 17
      },
    };
    const { isGoodsDiscount } = this.state;

    return (
    <div>
      <Form {...layout} name="DynamicForm" ref={this.DynamicRef} onFinish={this.onFinish} >
        <Form.Item name="ConpouType" label="优惠券类型" 
          rules={[
            {required: true}
          ]} 
          initialValue={1}
          >
          <Radio.Group onChange={this.ConpouTypeChange.bind(this)}>
              <Radio value={0}>商品优惠券</Radio>
              <Radio value={1}>折扣优惠券</Radio>
          </Radio.Group >
        </Form.Item>
        {
          isGoodsDiscount ? (
            <Form.Item name="GoodsBenefitPoint" 
              label="利益点" 
              rules={[
              {required: true}
            ]}>
              <Input placeholder="商品优惠券的控件"/>
            </Form.Item>
          ) : (
            <div >
              <Form.Item label="利益点"
                  name="DiscountBenefitPoint">
                  <Input placeholder="折扣优惠券的控件"/>
                </Form.Item>
              <Form.List name="benefitList">
                { 
                  (fields, {add, remove}, {errors}) => {
                    return (
                      <div>
                        {
                          fields.map( (field, item) => (
                            <Row key={field.key} >
                              {/* <Col span={10}> */}
                              满
                                <Form.Item
                                  {...formItemLayout0717}
                                  fieldKey={[field.fieldKey,  'first']}
                                  name={[field.name, 'first']}>
                                    <Input placeholder="折扣优惠券的控件"/>
                                </Form.Item>
                              {/* </Col> */}
                              {/* <Col span={10}> */}
                              减
                                <Form.Item
                                {...formItemLayout0717}
                                  fieldKey={[field.fieldKey,  'sec']}
                                  name={[field.name, 'second']}>
                                    <Input placeholder="折扣优惠券的控件"/>
                                </Form.Item>
                              {/* </Col> */}
                              {
                                // fields.length > 1 ? (
                                  // <Col span={4}>
                                    <MinusCircleOutlined onClick={() => {remove(field.name)}}/>
                                  // </Col>
                                // ) : null
                              }
                            </Row>
                          ))
                        }
                        <Form.Item>
                          <Button
                            onClick={() => {
                              add();
                            }}
                            style={{ width: '30%' }}
                          >
                            <PlusOutlined />
                          </Button>

                          <Form.ErrorList errors={errors} />
                        </Form.Item>
                      </div>
                    )
                  }
                }
              </Form.List>
            </div>
          )
        }
        <Form.Item >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
    );
  }
}

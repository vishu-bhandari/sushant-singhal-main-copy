import React from "react";
import { Form} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";
import {  TextInput, Textarea } from "flowbite-react";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";


function AdminAboutme() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        `${BASE_URL}/api/portfolio/update-aboutme`,
        {
          ...values,
          _id: portfolioData.aboutme._id,
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div>
      <Form
        className=" py-10  text-white "
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.aboutme,
        }}
      >
        <Form.Item name="about" label="About ">
          <Textarea placeholder="About" className="md:text-lg text-sm"></Textarea>
        </Form.Item>
        <Form.Item name="heading1" label="Heading1">
          <TextInput type="text" placeholder="Heading1" />
        </Form.Item>
        <Form.Item name="content1" label="Content1">
          <Textarea placeholder="Content1" className="md:text-lg text-sm" />
        </Form.Item>
        <Form.Item name="heading2" label="Heading2">
          <TextInput type="text" placeholder="Heading2" />
        </Form.Item>
        <Form.Item name="content2" label="Content2">
          <Textarea placeholder="Content2" className="md:text-lg text-sm" />
        </Form.Item>
        <Form.Item name="heading3" label="Heading3">
          <TextInput type="text" placeholder="Heading3" />
        </Form.Item>
        <Form.Item name="content3" label="content3">
          <Textarea placeholder="content3" className="md:text-lg text-sm" />
         
        </Form.Item>

        <div className="flex justify-start w-full" label="Save">
          <button className=" bg-primary text-white p-2 rounded-lg " type="submit">
            Save
          </button>
        
        </div>
      </Form>
    </div>
  );
}

export default AdminAboutme;

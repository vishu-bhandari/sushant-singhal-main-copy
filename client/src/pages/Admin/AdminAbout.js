import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";
import { TextInput, Textarea } from "flowbite-react";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";



function AdminAbout() {

  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        `${BASE_URL}/api/portfolio/update-about`,  // Using BASE_URL environment variable
        {
          ...values,
          _id: portfolioData.about._id,
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
        className="py-10 text-white"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about,
        }}
      >
        <Form.Item name="heading" label="Heading ">
          <TextInput type="text" placeholder="Url" />
        </Form.Item>
        <Form.Item name="content" label="Content">
          <Textarea type="text" placeholder="Url" />
        </Form.Item>
        <Form.Item name="image" label="Image">
          <TextInput type="text" placeholder="Url" />
        </Form.Item>
        <Form.Item name="paragraph1" label="Paragraph 1">
          <Textarea type="text" placeholder="Url" />
        </Form.Item>
        <Form.Item name="paragraph2" label="Paragraph 2">
          <Textarea type="text" placeholder="Url" />
        </Form.Item>
        <Form.Item name="paragraph3" label="Paragraph 3">
          <Textarea type="text" placeholder="Url" />
        </Form.Item>
        <Form.Item name="lottieURL" label="Lottie URL">
          <TextInput type="text" placeholder="Url" />
        </Form.Item>
        <Form.Item name="description1" label="Description 1">
          <TextInput type="text" placeholder="Description 1" />
        </Form.Item>
        <Form.Item name="description2" label="Description 2">
          <TextInput type="text" placeholder="Description 2" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white" type="submit">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;

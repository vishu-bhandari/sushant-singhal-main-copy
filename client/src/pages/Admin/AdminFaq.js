import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

// Ensure BASE_URL is defined correctly in your environment
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

function AdminFaq() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { faq } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(
          `${BASE_URL}/api/portfolio/update-faq`,
          {
            ...values,
            _id: selectedItemForEdit._id,
          }
        );
      } else {
        response = await axios.post(
          `${BASE_URL}/api/portfolio/add-faq`,
          values
        );
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        `${BASE_URL}/api/portfolio/delete-faq`,
        {
          _id: item._id,
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
            setType("add");
          }}
        >
          Add Project
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly w-full items-start gap-4 mt-5">
        {faq.map((item) => (
          <div
            key={item._id}
            className="shadow border p-5 border-gray-300 w-full sm:w-1/2 lg:w-1/4 h-64 flex flex-col rounded-md"
          >
            <div className="overflow-auto flex-grow">
              <hr />
              <h1 className="font-bold text-lg">Title: {item.title}</h1>
              <p className="mt-2">Content: {item.content}</p>
            </div>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-secondary text-white px-5 py-2"
                onClick={() => onDelete(item)}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(item);
                  setShowAddEditModel(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModel}
          title={selectedItemForEdit ? "Edit FAQ" : "Add FAQ"}
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            className="p-4"
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit || {}}
          >
            <Form.Item name="title" label="Title">
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </Form.Item>
            <Form.Item name="content" label="Content">
              <TextArea
                placeholder="Content"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </Form.Item>
            <div className="flex justify-end gap-2">
              <button
                className="bg-secondary text-white px-5 py-2"
                onClick={() => {
                  setShowAddEditModel(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2" type="submit">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminFaq;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

// Ensure BASE_URL is defined correctly in your environment
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

function AdminTestimonial() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { testimonial } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(
          `${BASE_URL}/api/portfolio/update-testimonial`,
          {
            ...values,
            _id: selectedItemForEdit._id,
          }
        );
      } else {
        response = await axios.post(
          `${BASE_URL}/api/portfolio/add-testimonial`,
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
        `${BASE_URL}/api/portfolio/delete-testimonial`,
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
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex justify-end mb-4">
        <button
          className="bg-primary px-5 py-2 text-white rounded-md"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
            setType("add");
          }}
        >
          Add Testimonial
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly w-full items-start gap-4 mt-5">
        {testimonial.map((item) => (
          <div
            key={item._id}
            className="shadow border p-5 border-gray-300 flex-col w-full sm:w-1/2 lg:w-1/4 overflow-hidden rounded-md"
          >
            <hr />
            <h1 className="text-lg font-semibold truncate">Name: {item.name}</h1>
            <h1 className="text-lg truncate">Last Name: {item.lname}</h1>
            <h1 className="text-lg truncate">Position: {item.position}</h1>
            <h1 className="text-lg truncate">Image URL: {item.imageUrl}</h1>
            <h1 className="text-lg truncate">Description: {item.description}</h1>
            <div className="flex justify-end gap-2 mt-5">
              <button
                className="bg-secondary text-white px-5 py-2 rounded-md"
                onClick={() => onDelete(item)}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2 rounded-md"
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
          title={selectedItemForEdit ? "Edit Testimonial" : "Add Testimonial"}
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit || {}}
          >
            <Form.Item name="name" label="Name">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </Form.Item>
            <Form.Item name="lname" label="Last Name">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </Form.Item>
            <Form.Item name="position" label="Position">
              <input
                type="text"
                placeholder="Position"
                className="w-full px-3 py-2 border rounded-md"
              />
            </Form.Item>
            <Form.Item name="imageUrl" label="Image URL">
              <input
                type="text"
                placeholder="Image URL"
                className="w-full px-3 py-2 border rounded-md"
              />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <TextArea
                placeholder="Description"
                className="w-full px-3 py-2 border rounded-md"
                rows={4}
              />
            </Form.Item>
            <div className="flex justify-end gap-2">
              <button
                className="bg-secondary text-white px-5 py-2 rounded-md"
                onClick={() => {
                  setShowAddEditModel(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2 rounded-md" type="submit">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminTestimonial;

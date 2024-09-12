import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

// Ensure BASE_URL is defined correctly in your environment
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(`${BASE_URL}/api/portfolio/update-project`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post(`${BASE_URL}/api/portfolio/add-project`, values);
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
      const response = await axios.post(`${BASE_URL}/api/portfolio/delete-project`, {
        _id: item._id,
      });
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
    <div className="container mx-auto px-4 ">
      <div className="flex justify-end">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {projects.map((project) => (
          <div
            key={project._id}
            className="shadow border p-5 border-gray-300 flex-col rounded-lg"
          >
            <h1 className="text-primary text-xl font-bold">{project.period}</h1>
            <hr className="my-2" />
            <img
              src={project.image}
              alt=""
              className="h-60 w-full object-cover mb-2"
            />
            <h1 className="font-bold">Role: {project.title}</h1>
            <p className="text-sm text-gray-700">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link : {project.link}
              </a>
            )}
            <div className="flex justify-end mt-4">
              <button
                className="bg-secondary text-white px-4 py-2 mr-2"
                onClick={() => onDelete(project)}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-4 py-2"
                onClick={() => {
                  setSelectedItemForEdit(project);
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
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
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
            <Form.Item name="title" label="Title">
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Title"
              />
            </Form.Item>
            <Form.Item name="image" label="Image URL">
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Image URL"
              />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <TextArea
                className="w-full px-3 py-2 border rounded"
                placeholder="Description"
                rows={4}
              />
            </Form.Item>
            <Form.Item name="link" label="Link">
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Link"
              />
            </Form.Item>

            <div className="flex justify-end mt-4">
              <button
                className="bg-secondary text-white px-4 py-2 mr-2"
                onClick={() => {
                  setShowAddEditModel(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-4 py-2" type="submit">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminProjects;

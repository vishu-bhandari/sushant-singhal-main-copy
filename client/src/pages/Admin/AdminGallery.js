import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

// Ensure BASE_URL is defined correctly in your environment
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

function AdminGallery() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { gallery } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(`${BASE_URL}/api/portfolio/update-gallery`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post(`${BASE_URL}/api/portfolio/add-gallery`, values);
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
      const response = await axios.post(`${BASE_URL}/api/portfolio/delete-gallery`, {
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
    <div className="flex flex-col items-right p-4">
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
      <div className="flex justify-evenly w-full items-start gap-4 flex-wrap">
        {gallery.map((project) => (
          <div
            key={project._id}
            className="shadow border p-5 border-gray-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-md flex flex-col"
          >
            <hr className="my-2" />
            <img src={project.src} alt="" />
            <p className="text-sm text-gray-600 mb-4">Description: {project.description}</p>
            <div className="mt-auto">
              <div className="flex justify-end gap-4">
                <button
                  className="bg-secondary text-white px-5 py-2"
                  onClick={() => onDelete(project)}
                >
                  Delete
                </button>
                <button
                  className="bg-primary text-white px-5 py-2"
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
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModel}
          title={selectedItemForEdit ? "Edit Gallery Item" : "Add Gallery Item"}
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
            <Form.Item name="src" label="Source">
              <input
                type="text"
                className="w-full px-3 py-2 border"
                placeholder="Link"
              />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <TextArea
                className="w-full px-3 py-2 border"
                placeholder="Description"
              />
            </Form.Item>
            <div className="flex justify-end gap-4 mt-5">
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

export default AdminGallery;

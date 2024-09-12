import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { TextInput, Textarea } from "flowbite-react";

// Ensure BASE_URL is defined correctly in your environment
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

const AdminBlog = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { blog } = portfolioData;

  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const url = selectedItemForEdit
        ? `${BASE_URL}/api/portfolio/update-blog`
        : `${BASE_URL}/api/portfolio/add-blog`;
      const response = await axios.post(url, {
        ...values,
        _id: selectedItemForEdit?._id,
      });

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
      const response = await axios.post(`${BASE_URL}/api/portfolio/delete-blog`, {
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

  const isYouTubeLink = (url) => /youtube\.com|youtu\.be/.test(url);
  const isImageLink = (url) => /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-end mb-4">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
            setType("add");
          }}
        >
          Add Blog
        </button>
      </div>

      <div className="flex flex-wrap justify-evenly w-full items-start gap-4 mt-5">
        {blog.map((project) => (
          <div
            key={project._id}
            className="shadow border p-5 border-gray-400 flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-md"
            style={{ minHeight: "300px", maxHeight: "100%", overflow: "hidden" }}
          >
            <div style={{ maxHeight: "100%", overflowY: "auto" }}>
              <hr />
              <h1 className="font-bold">Title: {project.title}</h1>
              <h1>Date: {project.date}</h1>
              {isYouTubeLink(project.youtubeLink) ? (
                <iframe
                  src={project.youtubeLink}
                  className="truncate rounded-md w-full h-48"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                />
              ) : isImageLink(project.youtubeLink) ? (
                <img
                  src={project.youtubeLink}
                  className="truncate rounded-md w-full h-48 object-cover"
                  alt={project.title}
                />
              ) : null}
              <h1>Description: {project.description}</h1>
            </div>

            <div className="flex justify-center gap-4 mt-auto">
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
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModel}
          title={selectedItemForEdit ? "Edit Blog" : "Add Blog"}
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            className="max-w-lg w-full"
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit || {}}
          >
            <Form.Item name="title" label="Title">
              <Textarea
                type="text"
                className="w-full px-3 py-2 border"
                placeholder="Title"
              />
            </Form.Item>
            <Form.Item name="date" label="Date">
              <TextInput
                type="text"
                className="w-full py-2"
                placeholder="Date"
              />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Textarea
                className="w-full px-3 py-2 border"
                placeholder="Description"
              />
            </Form.Item>
            <Form.Item name="youtubeLink" label="Media Link">
              <Textarea
                type="text"
                className="w-full px-3 py-2 border"
                placeholder="Media Link"
              />
            </Form.Item>

            <div className="flex justify-center gap-4 mt-5">
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
};

export default AdminBlog;

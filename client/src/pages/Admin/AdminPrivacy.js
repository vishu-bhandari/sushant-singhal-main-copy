import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function AdminPrivacy() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { privacyPolicies = [] } = portfolioData; // Default to empty array

  // Debugging logs
  console.log('portfolioData:', portfolioData);
  console.log('privacyPolicies:', privacyPolicies);
  console.log('Is privacyPolicies an array?', Array.isArray(privacyPolicies));

  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(`${BASE_URL}/api/portfolio/update-privacy-policy`, {
        ...values,
        _id: selectedItemForEdit._id,
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

  return (
    <div className="container mx-auto px-4 ">
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(privacyPolicies[0]); // Edit the first privacy policy
            setShowAddEditModel(true);
          }}
        >
          Edit Privacy Policy
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {Array.isArray(privacyPolicies) && privacyPolicies.length > 0 ? (
          privacyPolicies.map((policy) => (
            <div key={policy._id} className="shadow border p-5 border-gray-300 rounded-lg">
              <h1 className="text-primary text-xl font-bold">{policy.subheading}</h1>
              <hr className="my-2" />
              <p className="text-sm text-gray-700">{policy.text}</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-primary text-white px-4 py-2"
                  onClick={() => {
                    setSelectedItemForEdit(policy);
                    setShowAddEditModel(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No privacy policies available.</div> // Handle the case where privacyPolicies is empty
        )}
      </div>

      {selectedItemForEdit && (
        <Modal
          visible={showAddEditModel}
          title="Edit Privacy Policy"
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit}
          >
            <Form.Item name="subheading" label="Subheading">
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Subheading"
              />
            </Form.Item>
            <Form.Item name="text" label="Content">
              <TextArea
                className="w-full px-3 py-2 border rounded"
                placeholder="Content"
                rows={4}
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
                Update
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminPrivacy;

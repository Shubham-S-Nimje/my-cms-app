import axios from "axios";

const EditEntityForm = async () => {
  const response = await axios.post(
    `https://vahan-cms-backend.onrender.com/entity`,
    entityData
  );
  return <div>EditEntityForm</div>;
};

export default EditEntityForm;

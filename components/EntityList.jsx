import React, { useEffect, useState } from "react";
import axios from "axios";

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const response = await axios.get(
          `https://vahan-cms-backend.onrender.com/entities`
        );
        setEntities(response.data);
      } catch (error) {
        console.error("Error fetching entities:", error);
      }
    };

    fetchEntities();
  }, []);

  console.log(entities);

  return (
    <div className="container w-fulls">
      <h1 className="text-3xl font-bold text-center my-2">Entity List</h1>
      {/* <ul>
        {entities.map((entity) => (
          <li key={entity.id}>{entity.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default EntityList;

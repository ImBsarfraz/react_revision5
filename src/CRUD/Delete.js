import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteCandidate = async () => {
      try {
        await axios.delete(`http://localhost:3000/candidate/${id}`);
        navigate("/ReadList");
      } catch (error) {
        navigate("/ReadList");
      }
    }

    deleteCandidate();
  }, []);

  return null;
}

export default Delete;
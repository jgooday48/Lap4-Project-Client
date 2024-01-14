import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTourist } from "../../contexts/touristContext";
import { useGuide } from "../../contexts/guideContext";

const ProtectedRoute = ({ children }) => {
  const { touristaccess } = useTourist();
  const { guideaccess } = useGuide();
  const navigate = useNavigate();

  useEffect(() => {
    if (!touristaccess || !guideaccess) {
      navigate("/welcomepage");
    }
  }, [touristaccess, guideaccess, navigate]);

  return touristaccess && guideaccess ? children : null;
};

export default ProtectedRoute;

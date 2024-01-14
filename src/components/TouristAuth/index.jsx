import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTourist } from "../../contexts/touristContext";
import { useGuide } from "../../contexts/guideContext";

const TouristProtectedRoute = ({ children }) => {
  const { touristaccess } = useTourist();
  const { guideaccess } = useGuide();
  const navigate = useNavigate();

  useEffect(() => {
    if (!touristaccess) {
      navigate("/touristloginpage");
    }
  }, [touristaccess, navigate]);

  return touristaccess ? children : null;
};

export default TouristProtectedRoute;

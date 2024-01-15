import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTourist } from "../../contexts/touristContext";
import { useGuide } from "../../contexts/guideContext";

const TouristProtectedRoute = ({ children }) => {
  const { touristaccess } = useTourist();
  const { guideaccess } = useGuide();
  const navigate = useNavigate();

  useEffect(() => {
    if (!touristaccess || !localStorage.getItem("tourist_access_token")) {
      navigate("/touristloginpage");
    }
  }, [touristaccess, localStorage.getItem("tourist_access_token"), navigate]);

  return touristaccess ? children : null;
};

export default TouristProtectedRoute;

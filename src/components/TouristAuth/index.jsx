import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTourist } from "../../contexts/touristContext";
import { useGuide } from "../../contexts/guideContext";

const TouristProtectedRoute = ({ children }) => {
  // const { touristaccess } = useTourist();
  // const { guideaccess } = useGuide();
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("tourist_token")) {
      navigate("/touristloginpage");
    }
  }, [sessionStorage.getItem("tourist_token"), navigate]);

  return sessionStorage.getItem("tourist_token") ? children : null;
};

export default TouristProtectedRoute;

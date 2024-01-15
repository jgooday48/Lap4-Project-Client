import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTourist } from "../../contexts/touristContext";
import { useGuide } from "../../contexts/guideContext";

const GuideProtectedRoute = ({ children }) => {
  const { touristaccess } = useTourist();
  const { guideaccess } = useGuide();
  const navigate = useNavigate();

  useEffect(() => {
    if (!guideaccess || !localStorage.getItem("guide_access_token")) {
      navigate("/guideloginpage");
    }
  }, [guideaccess, localStorage.getItem("guide_access_token"), navigate]);

  return guideaccess ? children : null;
};

export default GuideProtectedRoute

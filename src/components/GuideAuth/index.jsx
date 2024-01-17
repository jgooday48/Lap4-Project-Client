import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTourist } from "../../contexts/touristContext";
import { useGuide } from "../../contexts/guideContext";

const GuideProtectedRoute = ({ children }) => {
  const { touristaccess } = useTourist();
  const { guideaccess } = useGuide();
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("guide_token")) {
      navigate("/guideloginpage");
    }
  }, [sessionStorage.getItem("guide_token"), navigate]);

  return sessionStorage.getItem("guide_token") ? children : null;
};

export default GuideProtectedRoute

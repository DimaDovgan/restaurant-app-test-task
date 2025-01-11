import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface SpinnerProps {
  color?: string; 
  loading: boolean;
  size?: number; }

const Spinner: React.FC<SpinnerProps> = ({ color = "#3498db", loading, size = 50 }) => {
    return (
      <div style={loading ? spinnerContainerStyle : { display: "none" }}>
        <ClipLoader color={color} loading={loading} size={size} aria-label="Loading Spinner" />
      </div>
    );
  };
  
  const spinnerContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  
  export default Spinner;
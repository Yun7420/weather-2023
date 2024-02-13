import React from "react";
// React-Redux
import { useSelector } from "react-redux";
// React-Spinner(NPM)
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  const loading = useSelector((state) => state.loading);

  return (
    <div className="App">
      <div className="AppCover">
        <div className="loading">
          <ClipLoader color="#ffffff" loading={loading} size={100} />
        </div>
      </div>
    </div>
  );
};

export default Loading;

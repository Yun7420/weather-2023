import React from "react";

const Error = () => {
  return (
    <div className="App">
      <div className="AppCover">
        <div className="error">
          <div className="error_info">
            <div>
              죄송합니다. <br /> 도시이름을 찾을 수 없습니다.
            </div>
            <button onClick={() => window.location.reload()}>GO HOME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

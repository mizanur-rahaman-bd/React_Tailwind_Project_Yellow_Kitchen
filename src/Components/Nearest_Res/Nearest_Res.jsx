import React from "react";
import "./Nearest_Res.css";


const Nearest_Res = () => {
  return (
    <>
      <section className="Nearest_Res">
        <div className="container">
          <div className="nearest_res_row">
            <div className="nearest_res_text_col">
                <h2>Your nearest restaurants</h2>
                <p>Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
            </div>
            <div className="nearest_res_input_col">
                <input placeholder="Enter delivery address" type="text" />
                <button>send</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nearest_Res;

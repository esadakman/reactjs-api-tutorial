import { useState } from "react";
// import { nanoid } from "nanoid";
const AddTutorial = ({ apiPost }) => {
  const [myTitle, setMyTitle] = useState("");
  const [myDesc, setMyDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    apiPost({ title: myTitle, description: myDesc });
    // ! submit işlemi sonrası inputları sıfırlamak için setterları sıfırladım
    setMyTitle("");
    setMyDesc("");
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={myTitle}
            onChange={(e) => setMyTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={myDesc}
            onChange={(e) => setMyDesc(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;

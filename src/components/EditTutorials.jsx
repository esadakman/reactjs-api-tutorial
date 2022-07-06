import { useState, useEffect } from "react";

const EditTutorial = ({ apiEdit, editItem }) => {
  // ! editItem'dan gelen bilgilerimi dest. yaptım ve ilgili yerlere gönderdim
  const { id, title: oldTitle, description } = editItem;

  // ! edit kısımlarında var olan bilgileri göstermek için useState parantezinin içine editItem'la gelen ve dest ettiğim bilgileri yazdım
  const [newTitle, setNewTitle] = useState(oldTitle);
  const [newDesc, setNewDesc] = useState(description);
  // ! verilerime didUpdate yapmak ve edit kısmında açılınca görülmesini sağlamak için useEffect ile eski verileri set ediyorum
  useEffect(() => {
    setNewTitle(oldTitle);
    setNewDesc(description);
  }, [oldTitle, description]);

  const handleSave = (e) => {
    e.preventDefault();
    // ! değiştirdiğim item değerlerini apiEdit fonksiyonunu sayesinde api'ye gönderdim ve ekranımda gözlemleyebildim
    apiEdit(id, newTitle, newDesc);
    setNewTitle("");
    setNewDesc("");
  };

  return (
    <div className="modal" tabIndex="-1" id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                // * value değeri en başta undefined olup sonra defined değer alınca hata almamak için || kullanıp undefined bir durumda boş string basmasını sağladık
                value={newTitle || ""}
                onChange={(e) => setNewTitle(e.target.value)}
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
                value={newDesc || ""}
                onChange={(e) => setNewDesc(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;

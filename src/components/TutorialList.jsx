import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorials from "./EditTutorials";
import { useState } from "react";

const TutorialList = ({ tutorial, apiDelete, apiEdit }) => {
  // ! EditTutorials componentine id ve diğer bilgileri göndermek için useState'i kullandım ve ilgili yerin bilgilerini setter'la alıp, props halinde EditTutorials'a gönderdim
  const [editItem, setEditItem] = useState("");

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorial?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center">
                  <FaEdit
                    size={20}
                    className="me-3 text-warning "
                    role="button"
                    // ! edit kısmının çıkması için bootstram modal'ını çağırdım ve htmlde js kısmını import ettim
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    // ? butona basıldığında ilgili yerin bilgilerini map'de kullandığımız "item" la editItem'a, ordanda editItemrials componentine göndermiş oluyorum
                    onClick={() => setEditItem(item)}
                  />
                  <AiFillDelete
                    size={22}
                    className="text-danger"
                    role="button"
                    onClick={() => apiDelete(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorials apiEdit={apiEdit} editItem={editItem} />
    </div>
  );
};

export default TutorialList;

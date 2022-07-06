import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorials from "./EditTutorials";

const TutorialList = ({ tutorial, apiDelete, apiEdit }) => {
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
                    onClick={() =>
                      apiEdit(id, "title edited", "desc edited too")
                    }
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
      <EditTutorials />
    </div>
  );
};

export default TutorialList;

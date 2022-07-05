import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = ({ tutorial }) => {
  //? Test data
  // let tutorials = [
  //   {
  //     id: 1,
  //     title: "ReactJS",
  //     description: "React is a JS-library for UI Design",
  //   },
  //   {
  //     id: 2,
  //     title: "HTML",
  //     description: "HTML is a markup language",
  //   },
  // ];
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
                  <FaEdit size={20} className="me-3 text-warning " />
                  <AiFillDelete size={22} className="text-danger" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
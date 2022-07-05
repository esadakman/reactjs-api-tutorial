import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { nanoid } from "nanoid";
import axios from "axios";
const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
const Home = () => {
  // ! Tutorial state
  const [tutorial, setTutorial] = useState([]);
  const [addTutorial, setAddTutorial] = useState([]);

  // ! API'den mevcut tutorialları çekiyorum
  const apiGet = async () => {
    try {
      const data = (await axios.get(url)).data;
      console.log(data);
      setTutorial(data);
    } catch (err) {
      console.log(err);
    }
  };
  // ? useEffect sayesinde api'de bir değiiklik olduğunda ilgili kısmım renderlanıyor
  useEffect(() => {
    apiGet();
  }, []);
  // ! apiPut
  const apiPut = async () => {
    try {
      const data = (await axios.put(url)).data;
      console.log(data);
      setTutorial(data);
    } catch (err) {
      console.log(err);
    }
  };
  // *_________________________
  const addTuto = (newTuto) => {
    const addNewTuto = { ...newTuto, id: nanoid() };
    setAddTutorial([...addTutorial, addNewTuto]);
  };
  console.log(addTutorial);
  return (
    <>
      <AddTutorial addTuto={addTuto} />
      <TutorialList tutorial={tutorial} />
    </>
  );
};

export default Home;

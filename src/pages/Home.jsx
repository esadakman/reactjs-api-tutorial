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
  // ? useEffect sayesinde sadece api'de bir değiiklik olduğunda ilgili kısmım renderlanıyor
  useEffect(() => {
    apiGet();
  }, []);
  // ! apiPost
  const apiPost = async (newTuto) => {
    console.log(newTuto);
    try {
      // ! newTuto'dan gelen input bilgilerini post metoduyla (url, newTuto diyerek) apiye eklemiş olduk
      await axios.post(url, newTuto);
    } catch (err) {
      console.log(err);
    }
    apiGet();
  };
  // *_________________________

  // console.log(addTutorial);
  return (
    <>
      <AddTutorial apiPost={apiPost} />
      <TutorialList tutorial={tutorial} />
    </>
  );
};

export default Home;

// const addTuto = (newTuto) => {
//   const addNewTuto = { ...newTuto, id: nanoid() };
//   setAddTutorial([...addTutorial, addNewTuto]);
// };

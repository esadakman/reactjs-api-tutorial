import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
const Home = () => {
  // ! Tutorial state
  const [tutorial, setTutorial] = useState([]);

  // !___________ API'den mevcut tutorialları çekiyorum ___________
  const apiGet = async () => {
    try {
      const data = (await axios.get(url)).data;
      console.log(data);
      // ! Apiden gelen verileri setter ile tutorial'ıma ekledim
      setTutorial(data);
    } catch (err) {
      console.log(err);
    }
  };
  // ? useEffect sayesinde sadece api'de bir değişiklik olduğunda ilgili kısmım renderlanıyor
  useEffect(() => {
    apiGet();
  }, []);
  // ! ________apiPost___________
  const apiPost = async (newTuto) => {
    try {
      // ! newTuto'dan gelen input bilgilerini post metoduyla (url, newTuto diyerek) apiye eklemiş olduk
      await axios.post(url, newTuto);
      console.log("veri gitti");
    } catch (err) {
      console.log(err);
    }
    // ? her post işleminde verilerimin ekranda sayfa yenilenmeden eklenmesi için useEffect'te tanımlı olan apiGet'imi çağırdım ve api'de meydana gelecek olan eklemelerde ilgili bölümün otomatik renderlanmasını sağladım
    apiGet();
  };
  // !___________apiDelete____________
  // ? parantez içinde kş değerle tıklanan butonun id'sini çağırdım
  const apiDelete = async (tutoId) => {
    try {
      // ! apide ilgili verimi silmek için linkimin sonuna tutorials'dan çağırdığım id'yi ekledim
      await axios.delete(url + `/${tutoId}`);
      console.log("veri Silindi");
    } catch (err) {
      console.log(err);
    }

    apiGet();
  };

  // console.log(addTutorial);
  return (
    <>
      <AddTutorial apiPost={apiPost} />
      {/* // ! tutorial'da yer alan verileri ekrana yazdırabilmek için props olarak TutorialList comp. una gönderdim */}
      <TutorialList tutorial={tutorial} apiDelete={apiDelete} />
    </>
  );
};

export default Home;

// const addTuto = (newTuto) => {
//   const addNewTuto = { ...newTuto, id: nanoid() };
//   setAddTutorial([...addTutorial, addNewTuto]);
// };

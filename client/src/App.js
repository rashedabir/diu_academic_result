import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Appbar from "./components/Appbar";
import Form from "./components/Form";
import { Container } from "@material-ui/core";
import StudentInfo from "./components/StudentInfo";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {
  const [id, setId] = useState("");
  const [semester, setSemester] = useState("");
  const [semesterList, setSemesterList] = useState([]);
  const [info, setInfo] = useState([]);
  const [result, setResult] = useState([]);

  const getUser = async () => {
    const res = await axios.get(
      `https://diu-result.herokuapp.com/api/info/${id}`
    );
    setInfo(res.data);
  };

  const getResult = async () => {
    const res = await axios.post(
      "https://diu-result.herokuapp.com/api/result",
      {
        semester: semester,
        id: id,
      }
    );
    getUser();
    setResult(res.data);
  };

  useEffect(() => {
    const getSemester = async () => {
      const res = await axios.get(
        "https://diu-result.herokuapp.com/api/semester"
      );
      setSemesterList(res.data);
    };
    getSemester();
  }, [id]);

  return (
    <div>
      <Appbar />
      <Container>
        <Form
          setId={setId}
          setSemester={setSemester}
          semesterList={semesterList}
          getResult={getResult}
        />
        <StudentInfo info={info} />
        <Result result={result} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

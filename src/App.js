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

  const getSemester = async () => {
    const res = await axios.get(
      "http://software.diu.edu.bd:8189/result/semesterList"
    );
    setSemesterList(res.data);
  };

  const getResult = async () => {
    const res = await axios.get(
      `http://software.diu.edu.bd:8189/result?semesterId=${semester}&studentId=${id}`
    );
    setResult(res.data);
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        `http://software.diu.edu.bd:8189/result/studentInfo?studentId=${id}`
      );
      setInfo(res.data);
    };
    getSemester();
    getUser();
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

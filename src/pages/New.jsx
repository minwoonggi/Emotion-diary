import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";
const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  usePageTitle("새 일기 쓰기");
  const onSubmit = (input) => {
    onCreate(input.createDate.getTime(), input.emotionId, input.content);
    navigate("/home", { replace: true });
  };
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button onClick={() => navigate(-1)} text={"< 뒤로가기"}></Button>
        }
      ></Header>
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  );
};

export default New;

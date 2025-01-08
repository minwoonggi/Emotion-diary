import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";
const Edit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제하시겠습니까?")) {
      onDelete(params.id);
      navigate("/home", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createDate.getTime(),
        input.emotionId,
        input.content
      );
      navigate("/home", { replace: true });
    }
  };

  usePageTitle(`${params.id}번 일기 수정`);
  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button text={"뒤로 가기"} onClick={() => navigate(-1)}></Button>
        }
        rightChild={
          <Button
            onClick={onClickDelete}
            text={"삭제하기"}
            type={"NEGATIVE"}
          ></Button>
        }
      ></Header>
      <Editor initData={curDiaryItem} onSubmit={onSubmit}></Editor>
    </div>
  );
};

export default Edit;

import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";
const Diary = () => {
  const params = useParams();
  const navigate = useNavigate();
  const curDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기`);

  if (!curDiaryItem) {
    return <div>로딩중 ...</div>;
  }

  const { createDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createDate));

  return (
    <div>
      <Header
        leftchild
        title={`${title} 기록`}
        leftChild={
          <Button text={"< 뒤로 가기"} onClick={() => navigate(-1)}></Button>
        }
        rightChild={
          <Button
            text={"수정하기"}
            onClick={() => navigate(`/edit/${params.id}`)}
          ></Button>
        }
      ></Header>
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;

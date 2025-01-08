import { getEmotionImage } from "../util/get-emotion-image.js";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./DiaryItem.css";
const DiaryList = ({ id, emotionId, createDate, content }) => {
  const navigate = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        onClick={() => {
          navigate(`/diary/${id}`);
        }}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div
        onClick={() => {
          navigate(`/diary/${id}`);
        }}
        className="info_section"
      >
        <div className="created_date">
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
          text={"수정하기"}
        ></Button>
      </div>
    </div>
  );
};

export default DiaryList;

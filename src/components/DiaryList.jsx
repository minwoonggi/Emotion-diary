import Button from "../components/Button";
import DiaryItem from "../components/DiaryItem";
import "./DiaryList.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const DiaryList = ({ data }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if (sortType == "oldest") {
        return Number(a.createDate) - Number(b.createDate);
      } else {
        return Number(b.createDate) - Number(a.createDate);
      }
    });
  };

  const sortedDate = getSortedDate();
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button
          onClick={() => {
            navigate("/new");
          }}
          text={"새로운 일기 쓰기"}
          type={"POSITIVE"}
        ></Button>
      </div>
      <div className="list_wrapper">
        {sortedDate.map((item) => (
          <DiaryItem key={item.id} {...item}></DiaryItem>
        ))}
      </div>
    </div>
  );
};

export default DiaryList;

import "./ItemList.css";

import {
  MdOutlineList,
  MdOutlineSportsVolleyball,
  MdOutlineHiking,
  MdStars,
} from "react-icons/md";

function ItemList(props) {


  return (
    <>
      <div className="item-list-filters">
        <button>
          <MdOutlineList />
          All
        </button>
        <button>
          <MdStars />
          Essentials
        </button>
        <button>
          <MdOutlineSportsVolleyball />
          Sports
        </button>
        <button>
          <MdOutlineHiking /> Hiking
        </button>
      </div>
      <div className="item-list">
        {props.items.map((item) => {
          return (
            <div className="item" key={item.id}>
              <p>{item.title}</p>
              <button
                onClick={props.onClickAdd}
                value = {item.id}>
                +
              </button>
            </div>
          );
        })}

        {props.items.length === 0 && (
          <div className="empty">
            <p>No items</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ItemList;

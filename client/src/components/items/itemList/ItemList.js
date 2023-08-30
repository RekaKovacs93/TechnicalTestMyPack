import "./ItemList.css";
import {
  MdOutlineList,
  MdOutlineSportsVolleyball,
  MdOutlineHiking,
  MdStars,
} from "react-icons/md";


function ItemList(props) {

  // console.log({items});

  return (
    <>
      <div className="item-list-filters">
        <button
          onClick={props.resetFilter}
          >
          <MdOutlineList />
          All
        </button>
        <button
          onClick={props.filterItems}
          value="essentials" >
          <MdStars />
          Essentials
        </button>
        <button
          onClick={props.filterItems}
          value="sports" >
          <MdOutlineSportsVolleyball />
          Sports
        </button>
        <button
          onClick={props.filterItems}
          value="hiking">
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
              <button
                onClick={props.onClickRemove}
                value = {item.id}>
                -
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

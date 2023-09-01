import  {useState} from "react";
import "./ItemList.css";
import {
  MdOutlineList,
  MdOutlineSportsVolleyball,
  MdOutlineHiking,
  MdStars,
} from "react-icons/md";


function ItemList(props) {

  const [currentFilter, setCurrentfilter] = useState("no-filter")

  // const handleFilter = (event) => {
  //   console.log(event.target.value)
  //   setCurrentfilter(event.target.value)
  // }
  // when switching quickly here, the event.target.value would be 'undefined' why? 
  
  const itemsToDisplay = props.items.filter((item) => {
    return item.tags.includes(currentFilter) || currentFilter == "no-filter" 
  }).map((item) => {
    return (
      <div className="item" key={item.id}>
        <p>{item.title}</p>
        {props.listType === "suggested" ? (
          <button onClick={props.onClickAdd} value={item.id}>
            +
          </button>
        ) : (
          <button onClick={props.onClickRemove} value={item.id}>
            -
          </button>
        )}
      </div>
    );
  })

  return (
    <>
      <div className="item-list-filters">
        <button
          onClick={()=> setCurrentfilter("no-filter")}
          >
          <MdOutlineList />
          All
        </button>
        <button
          onClick={() => setCurrentfilter("essentials")}
          disabled={currentFilter === "essentials"} >
          <MdStars />
          Essentials
        </button>
        <button
          onClick={() => setCurrentfilter("sports")}
          disabled={currentFilter === "sports"}  >
          <MdOutlineSportsVolleyball />
          Sports
        </button>
        <button
          onClick={()=> setCurrentfilter("hiking")}
          disabled={currentFilter === "hiking"}  >
          <MdOutlineHiking /> Hiking
        </button>
      </div>
      <div className="item-list">
        {itemsToDisplay}
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

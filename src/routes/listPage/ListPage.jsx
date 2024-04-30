import "./listPage.scss";
import { listData } from "../../lib/Data";
import Card from "./../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "./../../components/map/Map";

function List() {
  return (
    <div className="list">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {listData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={listData} />
      </div>
    </div>
  );
}

export default List;

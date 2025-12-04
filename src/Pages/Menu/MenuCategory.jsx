
import { Link } from "react-router";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ item, bennerTitle, bennerImg }) => {
  return (
    <div className="mt-16">
      {bennerTitle && (
        <Cover bennerImg={bennerImg} bennerTitle={bennerTitle}></Cover>
      )}
      <div className="grid grid-cols-1 px-2 md:grid-cols-2 gap-12 mt-18">
        {item.map((item) => (
          <MenuItem item={item} key={item._id} />
        ))}
      </div>
      <div className="flex justify-center  items-center mt-4">
        <Link to={`/order/${bennerTitle}`}>
          <button className="btn btn-outline btn-primary border-0 w-fit border-b-4 ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;

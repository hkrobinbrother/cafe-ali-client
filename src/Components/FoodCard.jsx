import Swal from "sweetalert2";
import UserAuth from "../hooks/UserAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
  const { user } = UserAuth();
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()

  const handleCart = (food) => {
    if (user && user.email) {
      //  todo send cart item database
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In?",
        text: "please login first then add the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, go login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="">
          <img src={image} alt="Shoes" className=" w-full h-[300px]" />
        </figure>
        <p className="absolute right-2 top-2 px-4 py-2 rounded-lg  bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-xl">{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleCart(item)}
              className="btn btn-outline border-0 border-b-4  border-b-amber-400"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

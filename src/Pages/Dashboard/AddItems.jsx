import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit ,reset} = useForm();
  const axiosPublic = useAxiosPublic();
  const axioSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image url create
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send the menu in backend server
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axioSecure.post("/menu", menuItem);
      console.log("send server item", menuRes.data);
      if (menuRes.data.insertedId) {
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with img bb url", res.data);
  };
  return (
    <div>
      <SectionTitle
        hading={"add an item"}
        subheading={"whats new"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend">Recipe Name?</legend>
          <input
            type="text"
            className="input w-full"
            {...register("name", { required: true })}
            placeholder="Recipe Name"
            required
          />
        </fieldset>
        <div className="flex">
          {/* category */}
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Category</legend>
            <select
              {...register("category", { required: true })}
              defaultValue="default"
              className="select "
              required
            >
              <option disabled={true} value="default">
                Select a category
              </option>
              <option value="salad">salad</option>
              <option value="pizza">Pizza </option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </fieldset>
          {/* price */}

          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Price?</legend>
            <input
              type="number"
              className="input w-full"
              {...register("price", { required: true })}
              placeholder="price"
              required
            />
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Recipe Details</legend>
          <textarea
            {...register("recipe")}
            className="textarea w-full h-28"
            placeholder="Recipe Details"
          ></textarea>
        </fieldset>

        <div className="">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input"
            required
          />
        </div>

        <button className="btn mt-2 bg-blue-400">
          Add Item <FaUtensils className="ml-2"></FaUtensils>
        </button>
      </form>
    </div>
  );
};

export default AddItems;

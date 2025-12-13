import { FaTrashCan } from "react-icons/fa6";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axioSecure = useAxiosSecure();

  const handleDletedItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axioSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        hading={"Manage All Items"}
        subheading={"Hurry Up"}
      ></SectionTitle>
      {/* table */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Deleted</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1>{item.name}</h1>
                </td>
                <td>${item.price}</td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn bg-orange-400 text-white p-4 btn-xs">
                      <FaEdit className="text-2xl  text-white-600" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDletedItem(item)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashCan className="text-2xl text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;

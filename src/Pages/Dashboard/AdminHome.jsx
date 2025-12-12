import UserAuth from "../../hooks/UserAuth";


const AdminHome = () => {
    const {user} = UserAuth()
    return (
        <div>
            <h2 className="text-3xl"><span>Hi, Welcome</span></h2>
            {
                user?.displayName ? user.displayName : "back"
            }           
        </div>
    );
};

export default AdminHome;
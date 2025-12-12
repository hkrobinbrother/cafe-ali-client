import UserAuth from "../../hooks/UserAuth";


const UserHome = () => {
    const {user} = UserAuth()
    return (
        <div>
            <h1 className="text3xl"><span>Hi, Welcome</span></h1>            
            {
                user?.userName ? user.userName : "Back"
            }
        </div>
    );
};

export default UserHome;
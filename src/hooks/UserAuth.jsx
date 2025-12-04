import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UserAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default UserAuth;
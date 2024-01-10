import React, { useCallback, useEffect } from 'react'; // Thêm useCallback vào đây
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import '../index.css';

const ProfilePage = ({ currentUser, onLogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/login');
        }
    }, [currentUser, navigate]);

    const handleDeleteAccount = useCallback(async () => {
        try {
            const response = await AuthService.deleteUser(currentUser.username);
            if (response.status === 200) {
                onLogout();
                navigate('/login');
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    }, [currentUser, navigate, onLogout]);

    return (
        <div className="mainContainer">
            {currentUser && (
                <div>
                    <h1 className={"titleContainer"}>Profile</h1>
                    <h2>Username: {currentUser.username}</h2>
                    {/* Display other user information here */}
                    <div className={"buttonContainer"}>
                        <input value="Delete My Account" className={"inputButton"} type="button" onClick={handleDeleteAccount}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;

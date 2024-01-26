import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ username, age, email }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {username}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
};

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
};

export default UserProfile;

import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Profile Page</h2>
      {id ? <p>Viewing Profile of User ID: {id}</p> : <p>No specific user selected</p>}
      <ul>
        <li>
          <Link to="/profile/1">User 1</Link>
        </li>
        <li>
          <Link to="/profile/2">User 2</Link>
        </li>
      </ul>

      <Routes>
        <Route path=":id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profile;

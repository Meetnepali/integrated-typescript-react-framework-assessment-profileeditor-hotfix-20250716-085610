import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfileEditor from './ProfileEditor';
import { UserContext, User } from './UserContext';

const user: User = {
  firstName: 'Alice',
  lastName: 'Smith',
  phoneNumbers: ['+1234567', '+9876543']
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <ProfileEditor />
    </UserContext.Provider>
  </React.StrictMode>
);

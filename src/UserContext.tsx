import React from 'react';

// Provide nullable User
export interface User {
  firstName: string;
  lastName: string;
  phoneNumbers?: string[];
}

export const UserContext = React.createContext<User | undefined>(undefined);

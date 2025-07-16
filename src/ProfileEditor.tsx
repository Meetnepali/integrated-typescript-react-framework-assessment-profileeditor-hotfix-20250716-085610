import React, { useReducer, useContext /*, useCallback*/ } from 'react';
import { UserContext } from './UserContext';
// import uuid from 'uuid'; // unused, but left in for original error as per task

interface ProfileState {
  firstName: string;
  lastName: string;
  phoneNumbers?: string[];
}

type ProfileAction =
  | { type: 'setFirstName'; payload: string }
  | { type: 'setPhone'; index: number; value: string }
  | { type: 'addPhone' }
  | { type: 'removePhone'; index: number }
  | { type: 'setLastName'; payload: string };

// <-- intentional bug: reducer isn't typed
function reducer(state /*: ProfileState*/, action /*: ProfileAction*/) {
  switch (action.type) {
    case 'setFirstName':
      return { ...state };
    case 'setLastName':
      return { ...state, lastName: action.payload };
    case 'setPhone':
      if (!state.phoneNumbers) return state;
      const updated = [...state.phoneNumbers];
      updated[action.index] = action.value;
      return { ...state, phoneNumbers: updated };
    case 'addPhone':
      return { ...state, phoneNumbers: [...(state.phoneNumbers || []), ''] };
    case 'removePhone':
      if (!state.phoneNumbers) return state;
      return { ...state, phoneNumbers: state.phoneNumbers.filter((_, i) => i !== action.index) };
    default:
      return state;
  }
}

export default function ProfileEditor() {
  const user = useContext(UserContext);
  // <-- user could be undefined/null
  // <-- phoneNumbers could be missing
  const [state, dispatch] = useReducer(reducer, {
    firstName: user && user.firstName,
    lastName: user && user.lastName,
    phoneNumbers: user && user.phoneNumbers
  });

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          value={state.firstName}
          onChange={e => dispatch({ type: 'setFirstName', payload: e.target.value })}
          // bug: field is frozen (dispatch not updating firstName)
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          value={state.lastName}
          onChange={e => dispatch({ type: 'setLastName', payload: e.target.value })}
        />
      </div>
      <div>
        <label>Phones</label>
        <ul>
        {(state.phoneNumbers).map((phone, idx) => (
          <li key={idx}>
            <input
              value={phone}
              onChange={e => dispatch({ type: 'setPhone', index: idx, value: e.target.value })}
            />
            <button type="button" onClick={() => dispatch({ type: 'removePhone', index: idx })}>Remove</button>
          </li>
        ))}
        </ul>
        <button type="button" onClick={() => dispatch({ type: 'addPhone' })}>Add phone</button>
      </div>
    </form>
  );
}

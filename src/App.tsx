import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUsers } from './types/types';

const App = () => {

  const users: IUsers[] = [
    {
      name: 'Tigran', id: 1, email: 'gvideo2007@gmail.com',
      address: { city: 'Yerevan', street: 'Komitas', zipcode: 'chgitem' }
    },
    {
      name: 'Hasmik', id: 2, email: 'hasmik@gmai.com',
      address: { city: 'Yerevan', street: 'Adonc', zipcode: 'chgitem' }
    }
  ];

  return (
    <div>
      <Card width='200px' height='200px' onClick={(num) => console.log('click', num)} variant={CardVariant.primary}>
        <button>button</button>
        <div>some text</div>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
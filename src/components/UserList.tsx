import React, { FC } from 'react';
import { IUsers } from '../types/types';

interface UserListProps {
    users: IUsers[];
}

const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map(user => <div style={{ padding: 15, border: '1px solid gray' }} key={user.id}>
                {user.id}. {user.name} lives in {user.address.city} in {user.address.street} street.
            </div>)}
        </div>
    )
}

export default UserList
import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';


export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <ListGroup className='mt-3'>
      {users.length > 0 ? (
        <>
        {users.map(user => (
           <ListGroupItem key={user.id}>
           <strong>{user.name}</strong>
           <div  style={{  float: "right"}}>
               <Link className='btn btn-warning mr-1' to={`/edit/${user.id}`}>Edit</Link>
               <Button onClick={() => removeUser(user.id)} color='danger' style={{  marginLeft: "10px"}}>Delete</Button>
           </div>
           </ListGroupItem>
        ))}
        </>

      ) : (
        <h4 className='text-center'>No Users</h4>
      )}
       
    </ListGroup>
  )
}


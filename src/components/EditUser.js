import React, {useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  });
  const { users, editUser } = useContext(GlobalContext);
  const history = useNavigate();
  const { id: currentUserId } = useParams();

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId)
    setSelectedUser(selectedUser)
  }, [currentUserId, users])

  const onSubmit = () => {
    editUser(selectedUser)

    history('/');
  }

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value})
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Nama</Label>
        <Input type='text' name='name' value={selectedUser.name} onChange={onChange} placeholder='Ganti Nama Disini!'></Input>
      </FormGroup>
      <Button type='submit'>Edit Data</Button>
      <Link to="/" className="btn btn-danger ml-2" style={{ marginLeft: "10px"}}>Cancel</Link>
    </Form>
  )
}

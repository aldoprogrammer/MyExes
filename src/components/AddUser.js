import React, {useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const history = useNavigate();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name
    }
    addUser(newUser);
    history('/');
  }

  const onChange = (e) => {
    setName(e.target.value);
  }


  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Nama</Label>
        <Input type='text' value={name} onChange={onChange} placeholder='Masukkan Nama Kamu'></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to="/" className="btn btn-danger"  style={{ marginLeft: "10px"}}>Cancel</Link>
    </Form>
  )
}


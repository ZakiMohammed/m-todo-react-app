import { useEffect, useState } from "react";
import PageTitle from '../components/PageTitle'
import UserView from './UserView';
import { getAll } from "../services/Users";

const UserList = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getAll();
        setUsers(data);
      } catch (error) {
        alert(error.message)
      }
    }

    getUsers();

  }, [])


  return (
    <>
      <PageTitle title={'Users'} />
      
      {users.map(user => <UserView user={user} key={user.id}></UserView>)}
    </>
  )
}

export default UserList
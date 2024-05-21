import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from '../UserCard'
 import s from './index.module.css'

const UsersContainer = () => {

    const usersState = useSelector(store=>store.users)
  return (
    <div className={s.container}>
      {

        usersState.map(el=> <UserCard key={el.id} {...el}/>)
      }
    </div>
  )

}
export default UsersContainer
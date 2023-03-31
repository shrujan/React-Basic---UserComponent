import { useState } from "react"
import { UserCardContainer } from "../UserCardContainer/user-card-coontainer"
import UserForm from "../UserFormComponent/user-form";

interface UserInfo { userName: string, useAge: number }

export const UsersContainer = () => {
  const [ userList, updateUserList ] = useState<UserInfo[]>([]);

  const updateList = (userData: UserInfo) => {
    updateUserList([ ...userList, userData]);
    
  }

  return (
    <main>
      <UserForm updateUser={ updateList }></UserForm>
      {/* <UserForm></UserForm> */}
      <UserCardContainer userList={ userList }></UserCardContainer>
    </main>
  )
}

import { useState } from "react"
import { UserCardContainer } from "../UserCardContainer/user-card-coontainer"
import UserForm from "../UserFormComponent/user-form"

export const UsersContainer = () => {
  const [ userList, updateUserList ] = useState<{ userName: string, useAge: number }[]>([]);

  const updateList = (userData: any) => {
    updateUserList([ ...userList, userData])
  }

  return (
    <main>
      <UserForm updateUser={ updateList }></UserForm>
      {/* <UserForm></UserForm> */}
      <UserCardContainer userList={ userList }></UserCardContainer>
    </main>
  )
}

import { useState } from "react"
import { UserCardContainer } from "../UserCardContainer/user-card-coontainer"
import UserForm from "../UserFormComponent/user-form";

interface UserInfo { userName: string, userAge: number }

export const UsersContainer = (props: any) => {
  const [ userList, updateUserList ] = useState<UserInfo[]>([]);

  const updateList = (userData: UserInfo) => {
    if (!userData.userAge || !userData.userName.trim().length) {
      props.showError({
        showError: true,
        errorMessage: "User name and age are mandatory"
      });
      return;
    }
    if (userData.userAge < 1 || userData.userAge > 120) { 
      props.showError({
        showError: true,
        errorMessage: "Enter valid user age (1 - 120)"
      });
      return;
    }

    props.showError({
      showError: false,
      errorMessage: ""
    });
    updateUserList([ ...userList, userData]);
  }

  return (
    <main>
      <UserForm updateUser={ updateList }></UserForm>
      {
        userList.length ? <UserCardContainer userList={ userList }></UserCardContainer> : null
      }
    </main>
  )
}

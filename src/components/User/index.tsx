import { IUser } from "../../contexts/UserContext";

interface IUserProps {
  user: IUser;
  isAdmin: boolean;
}

export const User = ({ user }: IUserProps) => {
  return (
    <li>
      {user.name} - {user.email}
    </li>
  );
};

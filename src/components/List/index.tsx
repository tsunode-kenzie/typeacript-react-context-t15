import { useUserContext } from "../../hooks/useUserContext";
import { User } from "../User";

export const List = () => {
    const { users } = useUserContext();

    return(
        <ul>
        {users.map((user) => (
          <User key={user.id} user={user} isAdmin={true} />
        ))}
      </ul>
    )
}
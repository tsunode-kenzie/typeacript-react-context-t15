import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUserContext = () => {
    const userContext = useContext(UserContext);

    if(!userContext) {
        throw('Erro contexto não encotrado')
    }

    return userContext;
}
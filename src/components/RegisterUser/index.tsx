import { useForm } from "react-hook-form";
import { IUser } from "../../contexts/UserContext";
import { useUserContext } from "../../hooks/useUserContext";
import { Input } from "../Input";

export type IUserRegister = Omit<IUser, "id">;

export const RegisterUser = () => {
  const { register, handleSubmit } = useForm<IUserRegister>();
  const { registerUser } = useUserContext();

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <Input id="name" label="Nome:" {...register("name")} />
      <Input id="email" label="Email:" {...register("email")} />

      <button type="submit">Cadastrar</button>
    </form>
  );
};

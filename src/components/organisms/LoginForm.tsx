import { Box } from "@mui/material";
import CustomButton from "../atoms/Button";
import CardCustom from "../molecules/Card";
import CustomFormField from "../molecules/FormField";
import { create } from "zustand";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/validations/auth";
import { useLogin } from '@/hooks/use-login';

function LoginForm() {
const { login, data, error, loading, isSuccess } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log(data)
      login(data)
      // const result = useLogin(data)

      // if (result.success) {
      //   // Login bem-sucedido - redirecionar ou salvar token
      //   console.log("Login realizado:", result.user);
      // } else {
      //   console.log(result.message || "Erro ao fazer login");
      // }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <CardCustom title="Login">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 400,
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomFormField
            {...register("email")}
            label={"Acesso"}
            data-testid="acesso"
            testIdLabel="acesso-label"
            type="text"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
          <CustomFormField
            {...register("password")}
            label={"Senha"}
            data-testid="password"
            testIdLabel="password-label"
            type="password"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
          <CustomButton
            label="Entrar"
            type="submit"
            className="mt-2 flex-none rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          />
        </form>
      </Box>
    </CardCustom>
  );
}

export default LoginForm;

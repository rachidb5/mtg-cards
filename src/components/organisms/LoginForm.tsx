import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import CardCustom from "../molecules/Card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/validations/auth";
import { EyeIcon } from "@phosphor-icons/react/dist/ssr/Eye";
import { EyeSlashIcon } from "@phosphor-icons/react/dist/ssr/EyeSlash";
import Typography from "@mui/material/Typography";
import { useLogin } from "@/hooks/use-login";
import { useState } from "react";

function LoginForm() {
  const { login, error, isSuccess } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log(data);
      login(data);
      // const result = useLogin(data)

      if (isSuccess) {
        //   // Login bem-sucedido - redirecionar ou salvar token
        console.log("Login realizado:", error);
      } else {
        console.log(data || "Erro ao fazer login");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <CardCustom width="30vw">
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
          <Stack spacing={4}>
            <Typography variant="h4">Log in</Typography>
            <Stack spacing={2}>
              <Controller
                control={control}
                name="username"
                render={({ field }) => (
                  <FormControl error={Boolean(errors.username)}>
                    <InputLabel>Email</InputLabel>
                    <OutlinedInput {...field} label="Email" type="email" />
                    {errors.username ? (
                      <FormHelperText>{errors.username.message}</FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <FormControl error={Boolean(errors.password)}>
                    <InputLabel>Senha</InputLabel>
                    <OutlinedInput
                      {...field}
                      endAdornment={
                        showPassword ? (
                          <EyeIcon
                            cursor="pointer"
                            fontSize="var(--icon-fontSize-md)"
                            onClick={(): void => {
                              setShowPassword(false);
                            }}
                          />
                        ) : (
                          <EyeSlashIcon
                            cursor="pointer"
                            fontSize="var(--icon-fontSize-md)"
                            onClick={(): void => {
                              setShowPassword(true);
                            }}
                          />
                        )
                      }
                      label="Password"
                      type={showPassword ? "text" : "password"}
                    />
                    {errors.password ? (
                      <FormHelperText>{errors.password.message}</FormHelperText>
                    ) : null}
                  </FormControl>
                )}
              />
              <Button  type="submit" variant="contained">
            Entrar
          </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </CardCustom>
  );
}

export default LoginForm;

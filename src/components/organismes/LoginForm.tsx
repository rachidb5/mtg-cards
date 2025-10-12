import { Box } from "@mui/material";
import CustomButton from "../atoms/Button";
import CustomInput from "../atoms/Input";
import CardCustom from "../molecules/Card";

const LoginForm = () => (
  <CardCustom title="Login">
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: 400,
        margin: "0 auto",
      }}
      noValidate
      autoComplete="off"
    >
      <CustomInput label="Acesso" type="text" />
      <CustomInput label="Senha" type="password" />
      <CustomButton label="Entrar" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" />
    </Box>
  </CardCustom>
);

export default LoginForm;

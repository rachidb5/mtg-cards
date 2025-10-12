import { Box } from "@mui/material";
import CustomButton from "../atoms/Button";
import CardCustom from "../molecules/Card";
import CustomFormField from "../molecules/FormField";

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
      <CustomFormField
        label={"Acesso"}
        type="text"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <CustomFormField
        label={"Senha"}
        type="password"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <CustomButton
        label="Entrar"
        className="flex-none rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
      />
    </Box>
  </CardCustom>
);

export default LoginForm;

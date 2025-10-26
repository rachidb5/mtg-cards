"use client";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import LoginForm from "@/components/organisms/LoginForm";
import useTheme from "@/store/theme-store";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";

export default function loginPage() {
 // eslint-disable-next-line react-hooks/rules-of-hooks
  const { Theme } = useTheme() as { Theme: string; toggleTheme: () => void };
  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <div className="absolute top-2 right-4">
          <ThemeSwitch />
          {Theme}
        </div>
      </Stack>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 0,
          minHeight: "56px",
        }}
      >
        {/* Switch no canto superior esquerdo */}

        {/* Conteúdo central */}
        <LoginForm />
      </Box>
    </Stack>
  );
}

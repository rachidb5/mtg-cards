import '@testing-library/jest-dom';

import {  render, screen } from '@testing-library/react';

import LoginPage from '@/pages/auth';

describe("LoginPage", () => {

  beforeEach(() => {
    render(
      <LoginPage
      />
    );
  });

  describe("Render", () => {
    it('should render E-mail input and label', () => {
      const myEmailLabelElement = screen.getByTestId('acesso-label');
      const emailInput = screen.getByLabelText('Acesso');

      expect(emailInput).toBeVisible();
      expect(myEmailLabelElement).toBeInTheDocument();
      expect(myEmailLabelElement).toHaveTextContent('Acesso');
    });

    it('should render Password input and label', () => {
      const myPasswordLabelElement = screen.getByTestId('password-label');
      const passwordInput = screen.getByLabelText('Senha');

      expect(passwordInput).toBeVisible();
      expect(myPasswordLabelElement).toBeInTheDocument();
      expect(myPasswordLabelElement).toHaveTextContent('Senha');
    });
  });

//   describe("Behaviour", () => {
//     it('should display two alerts error when email and password are invalid', async () => {
//       const loginButton = screen.getByTestId('login-button');

//       fireEvent.submit(loginButton);

//       const spanErrorElements = await screen.findAllByRole('alert');

//       expect(spanErrorElements).toHaveLength(2);
//     });

//     it('should display matching error when email is invalid', async () => {
//       const emailInput = screen.getByLabelText('email');
//       fireEvent.input(emailInput, { target: { value: 'test' } });

//       const passwordInput = screen.getByLabelText('password');
//       fireEvent.input(passwordInput, { target: { value: 'password' } });

//       const loginButton = screen.getByTestId('login-button');
//       fireEvent.submit(loginButton);

//       //! Mensagem de erro
//       const emaiLErrorMessage = 'E-mail em formato inválido!';
//       const spanErrorElements = await screen.findAllByRole('alert');
//       expect(spanErrorElements).toHaveLength(1);
//       expect(spanErrorElements[0]).toHaveTextContent(emaiLErrorMessage);

//       //! Textos inseridos nos elementos de input
//       expect(emailInput).toHaveValue('test');
//       expect(passwordInput).toHaveValue('password');

//       await waitFor(() =>
//         expect(singInWithEmailAndPasswordHandler).not.toHaveBeenCalledTimes(1)
//       );
//     });

//     it('should display matching error when password is invalid', async () => {
//       const emailInput = screen.getByLabelText('email');
//       fireEvent.input(emailInput, { target: { value: 'lucas@gmail.com' } });

//       const passwordInput = screen.getByLabelText('password');
//       fireEvent.input(passwordInput, { target: { value: '123' } });

//       const loginButton = screen.getByTestId('login-button');
//       fireEvent.submit(loginButton);

//       //! Mensagem de erro
//       const passwordErrorMessage =
//         'A senha precisa conter no mínimo 6 caracteres!';
//       const spanErrorElements = await screen.findAllByRole('alert');
//       expect(spanErrorElements).toHaveLength(1);
//       expect(spanErrorElements[0]).toHaveTextContent(passwordErrorMessage);

//       //! Textos inseridos nos elementos de input
//       expect(emailInput).toHaveValue('lucas@gmail.com');
//       expect(passwordInput).toHaveValue('123');

//       await waitFor(() =>
//         expect(singInWithEmailAndPasswordHandler).not.toHaveBeenCalledTimes(1)
//       );
//     });

//     it('should not display error when email and password are valid', async () => {
//       const emailInput = screen.getByLabelText('email'); // ? screen.getByRole('textbox', { name: /email/i });
//       fireEvent.input(emailInput, { target: { value: 'lucas@gmail.com' } });

//       const passwordInput = screen.getByLabelText('password');
//       fireEvent.input(passwordInput, {
//         target: { value: 'minhasenhacorreta' },
//       });

//       const loginButton = screen.getByTestId('login-button');
//       fireEvent.submit(loginButton);

//       await waitFor(() =>
//         expect(screen.queryAllByRole('alert')).toHaveLength(0)
//       );

//       await waitFor(() =>
//         expect(singInWithEmailAndPasswordHandler).toHaveBeenCalledTimes(1)
//       );
//     });
//   });
});
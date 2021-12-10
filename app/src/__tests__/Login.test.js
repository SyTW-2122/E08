import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../_helpers";
import { Login } from '../auth/login';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

test('< Login /> Formulario se muestra', () => {
  
  render(
    <Provider store={store}>
        <Login />
    </Provider>
  );
  
  const inputusername = screen.getByTestId('input-username');
  const inputpassword = screen.getByTestId('input-password');
  const buttonsend = screen.getByTestId('button-send')

  expect( inputusername.tagName).toBe('INPUT');
  expect( inputpassword.tagName).toBe('INPUT');
  expect( buttonsend.tagName).toBe('BUTTON');
 
}); 

test('< Login /> Validacion de formulario', () => {
  
  render(
    <Provider store={store}>
        <Login />
    </Provider>
  );

  userEvent.type(screen.getByTestId('input-username'), '');
  userEvent.type(screen.getByTestId('input-password'), '');
  userEvent.click(screen.getByTestId('button-send'));

  expect(screen.getByTestId('alertuser')).toBeInTheDocument()  
  
  userEvent.type(screen.getByTestId('input-username'), 'test'); 
  userEvent.type(screen.getByTestId('input-password'), '');
  userEvent.click(screen.getByTestId('button-send')); 
  
  expect(screen.getByTestId('alertpassword')).toBeInTheDocument() 
 
}); 

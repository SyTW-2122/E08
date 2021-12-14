import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../_helpers";
import { Register } from '../auth/register';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

test('< Register /> Formulario se muestra', () => {
  
  render(
    <Provider store={store}>
        <Register />
    </Provider>
  );

  const inputusername = screen.getByTestId('input-username');
  const inputpassword = screen.getByTestId('input-password');
  const inputconfirm = screen.getByTestId('input-confirm');

  const buttonsend = screen.getByTestId('button-send')

  expect( inputusername.tagName).toBe('INPUT');
  expect( inputpassword.tagName).toBe('INPUT');
  expect( inputconfirm.tagName).toBe('INPUT');
  expect( buttonsend.tagName).toBe('BUTTON');
 
}); 

test('< Register /> Validacion de formulario', () => {
  
  render(
    <Provider store={store}>
        <Register />
    </Provider>
  );

  userEvent.type(screen.getByTestId('input-username'), '');
  userEvent.type(screen.getByTestId('input-password'), '');
  userEvent.type(screen.getByTestId('input-confirm'), '');
  userEvent.click(screen.getByTestId('button-send'));

  expect(screen.getByTestId('alertuser')).toBeInTheDocument(); 
  
  userEvent.type(screen.getByTestId('input-username'), 'test'); 
  userEvent.type(screen.getByTestId('input-password'), '');
  userEvent.type(screen.getByTestId('input-confirm'), '');
  userEvent.click(screen.getByTestId('button-send')); 
  
  expect(screen.getByTestId('alertpassword')).toBeInTheDocument();

  userEvent.type(screen.getByTestId('input-username'), 'test'); 
  userEvent.type(screen.getByTestId('input-password'), '123');
  userEvent.type(screen.getByTestId('input-confirm'), '');
  userEvent.click(screen.getByTestId('button-send')); 
  
  expect(screen.getByTestId('alertconfirm')).toBeInTheDocument();
 
}); 

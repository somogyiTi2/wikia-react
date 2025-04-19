import { render, screen } from '@testing-library/react';
import App from './App';

// test('az érv leírása',fügvény ami tesztel)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn more/i);
   // const linkElement = screen/*szimulált böngésző*/.getByText/*szöveg vizsgálat*/(/ezt kell kiírnia/nem érzékeny teszt);
  //szimulált böngésző  
  //i -nem szenzitiv teszt
  expect(linkElement).toBeInTheDocument();
});
//npm tesztel indul el /a


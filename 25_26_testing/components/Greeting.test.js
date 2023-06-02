import { render, screen } from '@testing-library/react'
import Greeting from "./Greeting";

describe('Greeting component', () => {//ez egy golbál fügvény//csoportba teszi

    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />)
        // Act
        // ...nothing

        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        // .get .find .query a külömbség a viszonoznak egy promist vagy nem...
        // screen.getByText('Hello Word',{második érték})
        // {exact:false}-kicsi nagybetü nem számít
        expect(helloWorldElement).toBeInTheDocument();
        //.not.tobein-benne van e a dokumentumban
    })

    test('renders "good to see" you if the button was NOT clicked', () => {
        render(<Greeting />);
    
        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
      });
    
      test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
    
        // Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
      });
    
      test('does not render "good to see you" if the button was clicked', () => {
         // Arrange
         render(<Greeting />);
    
         // Act
         const buttonElement = screen.getByRole('button');
         userEvent.click(buttonElement)
     
         // Assert
         const outputElement = screen.queryByText('good to see you', { exact: false });
         expect(outputElement).toBeNull();
      });
});
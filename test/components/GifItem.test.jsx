import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas GifItem', () => {

    const title = 'jhon';
    const url = 'https://jhon.com/';

    test('debe de hacer match con el snapshop', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });


    test('Debe mostrar la imagen con el url y alt indicado', () => {
        
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByRole('img').src).toBe(url);

    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
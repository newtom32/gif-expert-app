import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {
    
    const category = 'One punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        })
        render(<GifGrid category={category}/>);
        
       // expect(screen.getByText('Cargando ...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar item cuando se cargan imagenes.', () => {
        
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https//imagen1'
        },
    {
        id: 'ABCd',
            title: 'Saitama2',
            url: 'https//imagen12'
    }];
        
    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    })
        
        const category = 'One punch';
        render(<GifGrid category={category}/>);

       expect(screen.getAllByRole('img').length).toBe(2);
    });
});
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en hook', () => {
    test('debe regresar el estado inicial', () => {
        
        const { result } = renderHook ( () => useFetchGifs('One punch') )
        
        const {images , isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });


    test('Debe de retornar un arreglo de imagenes y el isloading en false', async () => {
        const { result } = renderHook ( () => useFetchGifs('One Punch') )

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout:1000
            }
        );
        

        const {images, isLoading} = result.current;

        expect(images.length).toBe(20);
        expect(isLoading).not.toBeTruthy();
    });
});
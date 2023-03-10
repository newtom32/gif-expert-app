import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import Proptypes from 'prop-types';




export const GifGrid = ( {category} ) => {


  const {images,isloading} = useFetchGifs(category);
  
  
  return (
    <>
        <h3> { category }</h3>
        {
          isloading && (<h2>Cargando ...</h2>)
        }



        <div className='card-grid'>
          {
            images.map(
              (image) =>(
                <GifItem 
                  key={image.id} 
                  { ...image }/> // Se llama esparcir las props con el operador ... asi recibe todo
              )
            )
          }


        </div>
       
    </>
  )
}

GifGrid.propTypes = {
  category : Proptypes.string.isRequired,
}

import { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {// Es la prop que paso en el propType del compoenente.
  
    const [inputValue, setinputValue] = useState([])

    const onInputChange = (event) => {
        setinputValue(event.target.value);
        
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

       //setCategories((categories) =>[ inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
        
        
    }

    return (

        <form onSubmit={ (event) => onSubmit(event)}>
            <input
                type='text'
                placeholder="Buscar gif"
                value={inputValue}
                onChange={ (event) => onInputChange(event)}
            />
        </form>

  )
}




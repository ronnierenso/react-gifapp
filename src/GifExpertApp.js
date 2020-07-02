import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";
const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(['conejo'])
  // ejemplo de manejo de HOOKs
  // const handleApp = () => {
  //   setCategorias([...categorias, 'Nuevo Registro'])
  // }

  return (
    <>
      <h2>APP</h2>
      <AddCategory setCategories={setCategorias}/>
      <hr/>
      {/*<button onClick={handleApp}>Agregar</button>*/}
      <ol>
        {
          categorias.map(categoria => (
            <GifGrid key={categoria}  category={categoria}/>
          ))
        }
      </ol>
    </>
  );
};

export default GifExpertApp;

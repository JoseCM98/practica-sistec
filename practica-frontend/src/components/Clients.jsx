import React, { useState, useEffect } from 'react';
function Clients(){
 
    const [users, setUsers] = useState([]);

    const [disponible, setDisponible] = useState([]);

    const [ocupado, setOcupado] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5296/GuesRegister')
      .then((response) => response.json())
      .then((data) =>{
        setUsers(data)
        console.log(data,'ytasfdgyhaj');
        const nuevoArray = [ ];
        data.forEach((user) => {
            nuevoArray.push(user.habitacion)
            console.log(user.habitacion,'asdasd');
          })
           

        setOcupado(nuevoArray);
        const listaDisponibles=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        const Lista = listaDisponibles.filter((objeto) => !data.some((item) => item.habitacion === objeto));
          setDisponible(Lista); 
      } )
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []); 

  function salida(id){
    fetch(`http://localhost:5296/GuesRegister/${id}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log('Respuesta del servidor:', responseData);
         setUsers(responseData)
        })
        .catch((error) => {
          console.error('Error al eliminar el elemento:', error);
        });
  }
 

    return(
        <div className="bg-black shadow-md rounded my-6 d-flex">
          <div className='w-50 flex justify-center'>
          <table className=" table-auto">
          <thead>
            <tr className="bg-gray-600 text-gray-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nombre</th>
              <th className="py-3 px-6 text-left">Identificación</th>
              <th className="py-3 px-6 text-left">Habitacion</th>
              <th className="py-3 px-6 text-left">Ingreso</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm font-light bg-gray-500">
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-400">
              <td className="py-3 px-6 text-left whitespace-nowrap">{user.nombre}</td>
              <td className="py-3 px-6 text-left">{user.identificacion}</td>
              <td className="py-3 px-6 text-left">{user.habitacion}</td>
              <td className="py-3 px-6 text-left">{user.ingreso}</td>
            </tr>
          ))}
           
          </tbody>
        </table>
          </div>
          <div style={{display:'flex',justifyContent:'center',marginTop:'25px'}}>
          <div className='mr-7'>
        <table className=" table-auto">
          <thead>
            <tr className="bg-gray-600 text-gray-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Habitaciones Ocupadas</th>
              
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm font-light bg-gray-500">
          {ocupado.map((hab) => (
            <tr key={hab} className="border-b border-gray-200 hover:bg-gray-400">
              <td className="py-3 px-6 text-left whitespace-nowrap">{hab}</td>
              
            </tr>
          ))}
           
           
          </tbody>
        </table>
        </div>
        <div>
        <table className=" table-auto">
          <thead>
            <tr className="bg-gray-600 text-gray-800 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Habitaciones Disponibles</th>
              
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm font-light bg-gray-500">
          {disponible.map((hab) => (
            <tr key={hab} className="border-b border-gray-200 hover:bg-gray-400">
              <td className="py-3 px-6 text-left whitespace-nowrap">{hab}</td>
              
            </tr>
          ))}
           
           
          </tbody>
        </table>
        </div>
          </div>
        
        
      </div>
    )
}
export default Clients
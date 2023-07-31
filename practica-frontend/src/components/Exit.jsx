import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Exit(){
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5296/GuesRegister')
        .then((response) => response.json())
        .then((data) =>{
          setUsers(data)
        } )
        .catch((error) => console.error('Error al obtener los datos:', error));
    }, []); 

    async function salida(id){
        const decision = window.confirm('¿Estás seguro de realizar esta acción?');
    if (decision) {
        await fetch(`http://localhost:5296/GuesRegister/${id}`, {
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
      alert("Se marco la salida")
    } else {
      
    }
       
      }
    return(
        <div className='w-50 flex justify-center mt-5'>
        <table className=" table-auto">
        <thead>
          <tr className="bg-gray-600 text-gray-800 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nombre</th>
            <th className="py-3 px-6 text-left">Identificación</th>
            <th className="py-3 px-6 text-left">Habitacion</th>
            <th className="py-3 px-6 text-left">Ingreso</th>
            <th className="py-3 px-6 text-left"></th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-sm font-light bg-gray-500">
        {users.map((user) => (
          <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-400">
            <td className="py-3 px-6 text-left whitespace-nowrap">{user.nombre}</td>
            <td className="py-3 px-6 text-left">{user.identificacion}</td>
            <td className="py-3 px-6 text-left">{user.habitacion}</td>
            <td className="py-3 px-6 text-left">{user.ingreso}</td>
            <td className="py-3 px-6 text-left">
            <Link to={`/edit/${user.id}`}>
            <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  
                >
                  Editar
                </button>
            </Link>
                
                <button onClick={()=>{
                    salida(user.id)
                }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  
                >
                  Registrar Salida
                </button>
              </td>
          </tr>
        ))}
         
        </tbody>
      </table>
        </div>
    )
}
export default Exit
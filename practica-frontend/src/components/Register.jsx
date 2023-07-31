import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import './Register.css'
function Register(){
    
      const [opciones,setOpciones]= useState([])
      const [users, setUsers] = useState([]);
      const [ocupado, setOcupado] = useState([]);

      useEffect(() => {
        fetch('http://localhost:5296/GuesRegister')
          .then((response) => response.json())
          .then((data) =>{
            setUsers(data)
            
            const listaDisponibles =[{ value: 1, label: 'Habitacion 1' },
            { value: 2, label: 'Habitacion 2' },
            { value: 3, label: 'Habitacion 3' },
            { value: 4, label: 'Habitacion 4' },
            { value: 5, label: 'Habitacion 5' },
            { value: 6, label: 'Habitacion 6' },
            { value: 7, label: 'Habitacion 7' },
            { value: 8, label: 'Habitacion 8' },
            { value: 9, label: 'Habitacion 9' },
            { value: 10, label: 'Habitacion 10' },
            { value: 11, label: 'Habitacion 11' },
            { value: 12, label: 'Habitacion 12' },
            { value: 13, label: 'Habitacion 13' },
            { value: 14, label: 'Habitacion 14' },
            { value: 15, label: 'Habitacion 15' },
           ]
           
            const nuevosObjetos = listaDisponibles.filter((objeto) => !data.some((item) => item.habitacion === objeto.value));
            if(nuevosObjetos.length==0){
                alert("No existen habitaciones disponibles, intente mas tarde")
               }
           setOpciones(nuevosObjetos)
           
          } )
          .catch((error) => console.error('Error al obtener los datos:', error));
       
      }, [setUsers]); 

      function guardar (data){
        const nuevo = opciones.filter((num)=>num.value!=data.habitacion)
        console.log(nuevo)
        if(nuevo.length==0){
            alert("No existen habitaciones disponibles, intente mas tarde")
           }
        setOpciones(nuevo)
        console.log(nuevo,'nuevo')
        fetch('http://localhost:5296/GuesRegister', {
            method: "POST", 
            body: JSON.stringify(data), 
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) =>{
                console.log("Success:", response)
                alert('Se registro correctamente')  
            } );
      }
      const {register,handleSubmit,reset,
        formState: { errors },}=useForm()
    return(
        <div>
 <div className='cont mt-7'>
           <form onSubmit={handleSubmit((data)=>{
            guardar(data)
            reset()
            console.log(data)
           })} >
            <label htmlFor="nombre">Nombre</label>
            <input type="text" {...register("nombre",{required:true})}/>
            {errors.nombre && <p>Nombre es requerido</p>}
            <label htmlFor="nombre">Identificacion</label>
            <input type="text" {...register("identificacion",{required:true})} />
            {errors.identificacion && <p>Identificación es requrida</p>}
            <label htmlFor="nombre">Seleccione la Habitacion</label>
            <select {...register("habitacion",{required:true})} >
            <option >
            </option>
            {opciones.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
            </select>
            {errors.habitacion && <p>Habitación es requrida</p>}
            <div style={{display:'flex',justifyContent:'center'}}>
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
  Registrar
</button>
            </div>
            
           </form>
        </div>
        </div>
       
    )
}
export default Register
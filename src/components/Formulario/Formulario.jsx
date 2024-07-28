import React, { useEffect, useState } from 'react'





const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [email, setEmail] = useState("")


    const handleChangeNombre = (event) => {
        setNombre(event.target.value)
    }

    const handleChangeDireccion = (event) => {
        setDireccion(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()


        const usuario = { nombre, direccion, email }

        setDireccion("")
        setEmail("")
        setNombre("")

    }






    return (
        <form onSubmit={handleSubmitForm}>
            <label >nombre :</label>
            <input type="text" value={nombre} onChange={handleChangeNombre} />

            <label >Direccion :</label>
            <input type="text" value={direccion} onChange={handleChangeDireccion} />


            <label >Email :</label>
            <input type="email" value={email} onChange={handleChangeEmail} />

            <button type='submit'>Enviar Formulario</button>
        </form>

    )
}

export default Formulario
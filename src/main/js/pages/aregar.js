const React = require('react')
const {useState,useEffect} = require('react')
const client = require('../client.js')
const {Link,useParams} = require('react-router-dom')

const Agregar = ()=>{

    const [idProducto, setIdProducto] = useState('')
    const [productos, setProductos] = useState([])
    const [cantidad,setCantidad] = useState('')

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/productos'
        }).done(response=>{
            setProductos(response.entity._embedded.productos)
        })
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/detalleventas',
            entity: {
                producto: 'http://localhost:8080/api/productos/'+idProducto,
                cantidad: cantidad
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    return(
        <>
            <h1>Agregar</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='musico'>Producto </label>
                <select name="producto" id="producto" onChange={(e)=>{setIdProducto(e.target.value)}}>
                    {productos.map(pro => {	
                        const value = pro._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{pro.nombre}]</option>
                        )
                    })}
                </select><br />
                <label>Cantidad </label>
                <input type='number' name="cantidad" id="cantidad" value={ cantidad } onChange={ (e)=>{ setCantidad(e.target.value) } } />

                <input type="submit" value="Nuevo Detalle" />
            </form>
        </>
    )
}

module.exports = Agregar

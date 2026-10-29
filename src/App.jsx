import { useState, useEffect } from 'react'
import FormularioVenta from './FormularioVenta'
import TablaVentas from './TablaVentas'

const API_URL = 'https://api-ventas-smot.onrender.com/api/ventas'

function App() {
  const [ventas, setVentas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [cliente, setCliente] = useState('')
  const [monto, setMonto] = useState('')
  const [editandoId, setEditandoId] = useState(null)

  const cargarVentas = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => { setVentas(data); setCargando(false) })
      .catch(err => console.error(err))
  }

  useEffect(() => { cargarVentas() }, [])

  const guardarVenta = (e) => {
    e.preventDefault()
    const venta = { cliente, monto: parseFloat(monto) }
    if (editandoId) venta.id = editandoId

    const metodo = editandoId ? 'PUT' : 'POST'
    
    fetch(API_URL, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(venta)
    })
    .then(res => res.json())
    .then(ventaGuardada => {
      if (editandoId) {
        setVentas(ventas.map(v => v.id === editandoId ? ventaGuardada : v))
        setEditandoId(null)
      } else {
        setVentas([...ventas, ventaGuardada])
      }
      setCliente(''); setMonto('')
    })
    .catch(err => console.error(err))
  }

  const prepararEdicion = (venta) => {
    setEditandoId(venta.id)
    setCliente(venta.cliente)
    setMonto(venta.monto)
  }

  const eliminarVenta = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    .then(() => {
      setVentas(ventas.filter(v => v.id !== id))
    })
  }

  if (cargando) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-2xl font-bold text-blue-600 animate-pulse">Cargando datos...</div>
    </div>
  )

  return (
    // Fondo con gradiente suave
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-10 tracking-tight">
           Panel de Control de Ventas
        </h1>
        
        <FormularioVenta 
          cliente={cliente} 
          monto={monto} 
          setCliente={setCliente} 
          setMonto={setMonto} 
          onGuardar={guardarVenta} 
          editandoId={editandoId} 
          onCancelar={() => { setEditandoId(null); setCliente(''); setMonto('') }} 
        />

        <TablaVentas 
          ventas={ventas} 
          onEditar={prepararEdicion} 
          onEliminar={eliminarVenta} 
        />
      </div>
    </div>
  )
}

export default App
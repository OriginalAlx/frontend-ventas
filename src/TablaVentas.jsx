function TablaVentas({ ventas, onEditar, onEliminar }) {
  if (ventas.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center text-slate-500">
        No hay ventas registradas aún. ¡Agrega la primera!
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">ID</th>
              <th className="px-6 py-4 font-semibold">Cliente</th>
              <th className="px-6 py-4 font-semibold">Monto</th>
              <th className="px-6 py-4 font-semibold text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {ventas.map(venta => (
              <tr key={venta.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-slate-500 font-mono text-sm">#{venta.id}</td>
                <td className="px-6 py-4 font-medium text-slate-800">{venta.cliente}</td>
                <td className="px-6 py-4 text-green-600 font-bold">${venta.monto.toFixed(2)}</td>
                <td className="px-6 py-4 text-center space-x-2">
                  <button 
                    onClick={() => onEditar(venta)}
                    className="px-4 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => onEliminar(venta.id)}
                    className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md shadow-sm transition-colors"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TablaVentas
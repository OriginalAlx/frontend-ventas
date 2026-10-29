function FormularioVenta({ guardando, cliente, monto, setCliente, setMonto, onGuardar, editandoId, onCancelar }) {
  return (
    // Tarjeta blanca con sombra suave
    <div className="bg-white p-8 rounded-2xl shadow-xl mb-8 border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-700 mb-6 border-b pb-2">
        {editandoId ? ' Editar Venta' : ' Agregar Nueva Venta'}
      </h2>
      <form onSubmit={onGuardar} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Cliente</label>
          <input
            type="text"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
            className="w-full md:w-1/2 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Ej: Juan Pérez"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">Monto ($)</label>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            required
            step="0.01"
            className="w-full md:w-1/3 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="0.00"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <button 
            type="submit" 
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
          >
            {editandoId ? 'Actualizar' : 'Crear Venta'}
          </button>
          
          {editandoId && (
            <button 
              type="button" 
              onClick={onCancelar}
              className="px-6 py-2 bg-slate-400 hover:bg-slate-500 text-white font-semibold rounded-lg shadow-md transition-colors duration-200"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default FormularioVenta
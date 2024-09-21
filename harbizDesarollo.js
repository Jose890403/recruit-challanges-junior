const Entrenador = [
    { nombre: "A", reputacion: 4.5, plazas: 1 },
    { nombre: "B", reputacion: 3.2, plazas: 4 },
    { nombre: "C", reputacion: 1.2, plazas: 3 },
    { nombre: "D", reputacion: 3.4, plazas: 2 }
  ];
  
  // Bucle de ejemplo para buscar un entrenador con reputación 3.4
  for (let i = 0; i < Entrenador.length; i++) {
    if (Entrenador[i].reputacion === 3.4) {
      console.log("Entrenador con reputación 3.4 encontrado:", Entrenador[i]);
      break;
    }
  }
  
  const Clientes = [
    { nombre: 'q', importancia: 2.6 },
    { nombre: 'r', importancia: 3.7 },
    { nombre: 's', importancia: 8.5 },
    { nombre: 't', importancia: 9.7 },
    { nombre: 'u', importancia: 2.6 },
    { nombre: 'v', importancia: 4.7 },
    { nombre: 'w', importancia: 5.6 },
    { nombre: 'x', importancia: 3.7 },
    { nombre: 'y', importancia: 8.1 },
    { nombre: 'z', importancia: 2.5 }
  ];
  
  // Función para calcular la satisfacción de un cliente con un entrenador
  function calcularSatisfaccion(cliente, entrenador) {
    return cliente.importancia * Entrenador.reputacion;
  }
  
  console.log(calcularSatisfaccion(Clientes[0], Entrenador[0]));
  
  // Crear un objeto para almacenar las asignaciones
  const asignaciones = {};
  
  // Reducir la lista de entrenadores para obtener plazas disponibles
  const plazasDisponibles = Entrenador.reduce((plazas, Entrenador) => {
    plazas[Entrenador.nombre] = Entrenador.plazas;
    return plazas;
  }, {});
  
  console.log("Plazas disponibles por entrenador:", plazasDisponibles);
  
  // simulacion de puntuaciones.
  const puntuaciones = Clientes.map(cliente => {
    return {
      Cliente: cliente.nombre,
      Entrenador: Entrenador[Math.floor(Math.random() * Entrenador.length)].nombre
    };
  });
  
//plazas disponibles de un entrenador 
  function tienePlazasDisponibles(entrenador) {
    return plazasDisponibles[entrenador] > 0;
  }
  
  // Función para verificar si un cliente ya tiene una asignación
  function clienteSinAsignacion(cliente) {
    return !asignaciones[cliente];
  }
  
  // Función para asignar un cliente a un entrenador
  function asignarClienteAEntrenador(cliente, entrenador) {
    asignaciones[cliente] = entrenador;
    reducirPlazas(entrenador);
  }
  
  // Función para reducir el número de plazas de un entrenador
  function reducirPlazas(entrenador) {
    plazasDisponibles[entrenador]--;
  }
  
  // Función principal para realizar las asignaciones
  function asignarClientes() {
    for (const puntuacion of puntuaciones) {
      const entrenadorAsignado = puntuacion.Entrenador;
      const clienteAsignado = puntuacion.Cliente;
  
      // Verificar si el entrenador tiene plazas disponibles y el cliente no tiene asignación
      if (tienePlazasDisponibles(entrenadorAsignado) && clienteSinAsignacion(clienteAsignado)) {
        asignarClienteAEntrenador(clienteAsignado, entrenadorAsignado);
      }
    }
  }
  
  // Llamamos a la función principal para realizar las asignaciones
  asignarClientes();
  
  console.log("Asignaciones de clientes a entrenadores:", asignaciones);
  console.log("Plazas restantes por entrenador:", plazasDisponibles);
export const sidebarOptions = [
    {
      id: 1,
      label: 'Dashboard',
      icon: <i className="icon-option__i fa-solid fa-house"></i>,
      path: '/dashboard',
      options: [
      ],
    },
    {
      id: 2,
      label: 'Caja',
      icon: <i className="icon-option__i fa-solid fa-user"></i>,
      path: '',
      options: [
        {
          id: 10,
          label: 'Cajas',
          path: '/cajas',
        },
        {
          id: 20,
          label: 'Operaciones',
          path: '/operaciones',
        },
      ],
    },
    {
      id: 3,
      label: 'Creditos',
      icon: <i className="icon-option__i fa-solid fa-envelope"></i>,
      path: '',
      options: [
        {
          id: 30,
          label: 'Consultas',
          path: '/consultas',
        },
      ],
    },
    {
      id: 4,
      label: 'Schedules',
      icon: <i className="icon-option__i fa-solid fa-calendar-days"></i>,
      path: '/schedules',
      options: [
      ],
    },
    {
      id: 5,
      label: 'Income',
      icon: <i className="icon-option__i fa-solid fa-bookmark"></i>,
      path: '',
      options: [
        {
          id: 40,
          label: 'Cobros',
          path: '/cobros',
        },
        {
          id: 50,
          label: 'Supervisor',
          path: '/supervisor',
        },
        {
          id: 60,
          label: 'Historial',
          path: '/historial',
        },
        {
          id: 70,
          label: 'Pagar Cuotas',
          path: '/pagar-cuotas',
        },
        {
          id: 80,
          label: 'Usuarios',
          path: '/usuarios',
        },
        {
          id: 90,
          label: 'Permisos',
          path: '/permisos',
        },
        {
          id: 100,
          label: 'Reportes',
          path: '/reportes',
        },
        {
          id: 110,
          label: 'Agencias',
          path: '/agencias',
        },
        {
          id: 120,
          label: 'Parametros SIS',
          path: '/parametros-sis',
        },
        {
          id: 130,
          label: 'Cerrar Caja',
          path: '/cerrar-caja',
        },
        {
          id: 140,
          label: 'Transferir',
          path: '/transferir',
        },
        {
          id: 150,
          label: 'Aperturar',
          path: '/aperturar',
        },
      ],
    },
    {
      id: 6,
      label: 'Promote',
      icon: <i className="icon-option__i fa-solid fa-pen-to-square"></i>,
      path: '',
      options: [
        {
          id: 30,
          label: 'Empleados',
          path: '/empleados',
        },
        {
          id: 40,
          label: 'Clientes',
          path: '/clientes',
        },
        {
          id: 50,
          label: 'Declines',
          path: '/declines',
        },
        {
          id: 60,
          label: 'Payouts',
          path: '/payouts',
        },
      ],
    },
  ]
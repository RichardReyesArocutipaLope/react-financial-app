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
    label: 'Catalogo',
    icon: <i class="icon-option__i fa-solid fa-id-card"></i>,
    path: '',
    options: [
      {
        id: 10,
        label: 'Agencias',
        path: '/agencias',
      },
      {
        id: 20,
        label: 'Empleados',
        path: '/empleados',
      },
      {
        id: 30,
        label: 'Clientes',
        path: '/clientes',
      },
      {
        id: 40,
        label: 'Feriados',
        path: '/feriados',
      }
    ],
  },
  {
    id: 3,
    label: 'Créditos',
    icon: <i class="icon-option__i fa-solid fa-landmark"></i>,
    path: '/creditos',
    options: [
    ],
  },
  {
    id: 4,
    label: 'Caja',
    icon: <i class="icon-option__i fa-solid fa-vault"></i>,
    path: '',
    options: [
      {
        id: 50,
        label: 'Cajas',
        path: '/cajas',
      },
      {
        id: 60,
        label: 'Operaciones',
        path: '/operaciones',
      },
    ],
  },
  {
    id: 5,
    label: 'Reportes',
    icon: <i class="icon-option__i fa-solid fa-folder-closed"></i>,
    path: '/reportes',
    options: [
    ],
  },
  {
    id: 6,
    label: 'Seguridad',
    icon: <i class="icon-option__i fa-solid fa-lock"></i>,
    path: '',
    options: [
      {
        id: 70,
        label: 'Usuarios',
        path: '/usuarios',
      },
      {
        id: 80,
        label: 'Permisos',
        path: '/permisos',
      },
      {
        id: 90,
        label: 'Parametros',
        path: '/parametros-sis',
      },
    ],
  },
  {
    id: 7,
    label: 'Cobranzas',
    icon: <i class="icon-option__i fa-solid fa-wallet"></i>,
    path: '',
    options: [
      {
        id: 100,
        label: 'Pagar Cuotas',
        path: '/pagar-cuotas',
      },
      {
        id: 110,
        label: 'Historial',
        path: '/historial',
      },
    ],
  },
]
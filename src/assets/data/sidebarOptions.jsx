export const sidebarOptions = [
	{
		id: 1,
		label: 'Dashboard',
		icon: <i className='icon-option__i fa-solid fa-house'></i>,
		path: '/dashboard',
		options: [],
	},
	{
		id: 2,
		label: 'Catalogo',
		icon: <i className='icon-option__i fa-solid fa-id-card'></i>,
		path: '',
		options: [
			{
				id: 10,
				label: 'Agencias',
				path: 'catalogue/agencias',
			},
			{
				id: 20,
				label: 'Empleados',
				path: 'catalogue/empleados',
			},
			{
				id: 30,
				label: 'Clientes',
				path: 'catalogue/clientes',
			},
			{
				id: 40,
				label: 'Feriados',
				path: 'catalogue/feriados',
			},
		],
	},
	{
		id: 3,
		label: 'Créditos',
		icon: <i className='icon-option__i fa-solid fa-landmark'></i>,
		path: '/credits',
		options: [],
	},
	{
		id: 4,
		label: 'Caja',
		icon: <i className='icon-option__i fa-solid fa-vault'></i>,
		path: '',
		options: [
			{
				id: 50,
				label: 'Cajas',
				path: 'cash-account/cash',
			},
			{
				id: 60,
				label: 'Operaciones',
				path: 'cash-account/operations',
			},
		],
	},
	{
		id: 5,
		label: 'Reportes',
		icon: <i className='icon-option__i fa-solid fa-folder-closed'></i>,
		path: '/reports',
		options: [],
	},
	{
		id: 6,
		label: 'Seguridad',
		icon: <i className='icon-option__i fa-solid fa-lock'></i>,
		path: '',
		options: [
			{
				id: 70,
				label: 'Usuarios',
				path: 'security/users',
			},
			{
				id: 80,
				label: 'Permisos',
				path: 'security/permissions',
			},
			{
				id: 90,
				label: 'Parametros',
				path: 'security/parameters',
			},
		],
	},
	{
		id: 7,
		label: 'Cobranzas',
		icon: <i className='icon-option__i fa-solid fa-wallet'></i>,
		path: '',
		options: [
			{
				id: 100,
				label: 'Pagar Cuotas',
				path: 'receivables/pay-dues',
			},
			{
				id: 110,
				label: 'Historial',
				path: 'receivables/payment-history',
			},
		],
	},
	{
		id: 8,
		label: 'Developers',
		icon: <i className='icon-option__i fa-brands fa-square-js'></i>,
		path: '/dev',
		options: [],
	},
];

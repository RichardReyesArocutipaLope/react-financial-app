import { DocumentExportOptions } from '../../../ui/components';
import {
	ApproveCredit,
	ClientFile,
	CreateCredit,
	CreditSchedule,
	DeleteCredit,
	DisburseCredit,
	EditCredit,
	ExportCreditData,
	OptionsApproveCredit,
	OptionsCreateCredit,
	OptionsDeleteCredit,
	OptionsDisburseCredit,
	OptionsEditCredit,
	OptionsExportCreditData,
	OptionsSimulateCredit,
	SimulateCredit,
} from '../../components';

export const moduleOptions = [
	{
		moduleOptionData: {
			id: 10,
			idIsRequired: false,
			moduleOptionIcon: <i className='fa-solid fa-file-circle-plus'></i>,
			moduleOptionLabel: 'Crear',
			moduleOptionColor: 'celeste',
		},
		moduleOptionModal: {
			modalBodyComponent: <CreateCredit />,
			modalFooterComponent: <OptionsCreateCredit />,
			modalProperties: {
				width: 'modal-l',
				bodyHeight: '55rem',
				bodyHeightClass: 'modal__body--responsive',
				staticBackdrop: false,
				hasScroll: false,
				verticallyCentered: false,
				title: 'CREAR CRÉDITO',
				bodyBackgroundColor: '',
				footerHeightClass: 'modal__footer--responsive',
			},
		},
	},

	{
		moduleOptionData: {
			id: 11,
			idIsRequired: true,
			moduleOptionIcon: <i className='fa-solid fa-file-pen'></i>,
			moduleOptionLabel: 'Editar',
			moduleOptionColor: 'ambar',
		},
		moduleOptionModal: {
			modalBodyComponent: <EditCredit />,
			modalFooterComponent: <OptionsEditCredit />,
			modalProperties: {
				width: 'modal-l',
				bodyHeight: '50rem',
				bodyHeightClass: 'modal__body--responsive',
				staticBackdrop: false,
				hasScroll: false,
				verticallyCentered: false,
				title: 'EDITAR CRÉDITO',
				bodyBackgroundColor: 'var(--bg-two-color-white)',
				footerHeightClass: 'modal__footer--responsive',
			},
		},
	},

	{
		moduleOptionData: {
			id: 12,
			idIsRequired: true,
			moduleOptionIcon: <i className='fa-solid fa-trash'></i>,
			moduleOptionLabel: 'Eliminar',
			moduleOptionColor: 'rojo',
		},
		moduleOptionModal: {
			modalBodyComponent: <DeleteCredit />,
			modalFooterComponent: <OptionsDeleteCredit />,
			modalProperties: {
				width: 'modal-s',
				bodyHeight: 'max-content',
				bodyHeightClass: '',
				staticBackdrop: false,
				hasScroll: false,
				verticallyCentered: true,
				title: 'ELIMINAR CRÉDITO',
				bodyBackgroundColor: 'var(--bg-two-color-white)',
				footerHeightClass: '',
			},
		},
	},

	{
		moduleOptionData: {
			id: 13,
			idIsRequired: true,
			moduleOptionIcon: <i className='fa-solid fa-thumbs-up'></i>,
			moduleOptionLabel: 'Aprobar',
			moduleOptionColor: 'azul',
		},
		moduleOptionModal: {
			modalBodyComponent: <ApproveCredit />,
			modalFooterComponent: <OptionsApproveCredit />,
			modalProperties: {
				width: 'modal-s',
				bodyHeight: 'max-content',
				bodyHeightClass: '',
				staticBackdrop: false,
				hasScroll: false,
				verticallyCentered: true,
				title: 'APROBAR CRÉDITO',
				bodyBackgroundColor: 'var(--bg-two-color-white)',
				footerHeightClass: '',
			},
		},
	},

	{
		moduleOptionData: {
			id: 14,
			idIsRequired: true,
			moduleOptionIcon: <i className='fa-solid fa-sack-dollar'></i>,
			moduleOptionLabel: 'Desembolsar',
			moduleOptionColor: 'verde',
		},
		moduleOptionModal: {
			modalBodyComponent: <DisburseCredit />,
			modalFooterComponent: <OptionsDisburseCredit />,
			modalProperties: {
				width: 'modal-s',
				bodyHeight: 'max-content',
				bodyHeightClass: '',
				staticBackdrop: false,
				hasScroll: false,
				verticallyCentered: true,
				title: 'DESEMBOLSAR CRÉDITO',
				bodyBackgroundColor: 'var(--bg-two-color-white)',
				footerHeightClass: '',
			},
		},
	},

	{
		moduleOptionData: {
			id: 15,
			idIsRequired: true,
			moduleOptionIcon: <i className='fa-solid fa-calendar-days'></i>,
			moduleOptionLabel: 'Cronograma',
			moduleOptionColor: 'turqueza',
		},
		moduleOptionModal: {
			modalBodyComponent: <CreditSchedule />,
			modalFooterComponent: <DocumentExportOptions />,
			modalProperties: {
				width: 'modal-l',
				bodyHeight: '100%',
				bodyHeightClass: 'modal__body--responsive',
				staticBackdrop: false,
				hasScroll: true,
				verticallyCentered: false,
				title: 'CRONOGRAMA',
				bodyBackgroundColor: 'var(--bg-four-color-white)',
				footerHeightClass: 'modal__footer--responsive',
			},
		},
	},

	{
		moduleOptionData: {
			id: 16,
			idIsRequired: true,
			moduleOptionIcon: <i className='fa-solid fa-file-lines'></i>,
			moduleOptionLabel: 'Ficha',
			moduleOptionColor: 'gris',
		},
		moduleOptionModal: {
			modalBodyComponent: <ClientFile />,
			modalFooterComponent: <DocumentExportOptions />,
			modalProperties: {
				width: 'modal-l',
				bodyHeight: '100%',
				bodyHeightClass: 'modal__body--responsive',
				staticBackdrop: false,
				hasScroll: true,
				verticallyCentered: false,
				title: 'FICHA DEL CLIENTE',
				bodyBackgroundColor: 'var(--bg-four-color-white)',
				footerHeightClass: 'modal__footer--responsive',
			},
		},
	},

	{
		moduleOptionData: {
			id: 17,
			idIsRequired: false,
			moduleOptionIcon: <i className='fa-solid fa-bolt'></i>,
			moduleOptionLabel: 'Simular',
			moduleOptionColor: 'turquesa',
		},
		moduleOptionModal: {
			modalBodyComponent: <SimulateCredit />,
			modalFooterComponent: <OptionsSimulateCredit />,
			modalProperties: {
				width: 'modal-l',
				bodyHeight: '100%',
				bodyHeightClass: 'modal__body--responsive',
				staticBackdrop: false,
				hasScroll: true,
				verticallyCentered: false,
				title: 'SIMULAR CRÉDITO',
				bodyBackgroundColor: 'var(--bg-four-color-white)',
				footerHeightClass: 'modal__footer--responsive',
			},
		},
	},

	{
		moduleOptionData: {
			id: 18,
			idIsRequired: true,
			moduleOptionIcon: <i className='fa-solid fa-file-export'></i>,
			moduleOptionLabel: 'Exportar',
			moduleOptionColor: 'morado',
		},
		moduleOptionModal: {
			modalBodyComponent: <ExportCreditData />,
			modalFooterComponent: <OptionsExportCreditData />,
			modalProperties: {
				width: 'modal-m',
				bodyHeight: 'max-content',
				bodyHeightClass: '',
				staticBackdrop: false,
				hasScroll: false,
				verticallyCentered: true,
				title: 'EXPORTAR CRÉDITO',
				bodyBackgroundColor: 'var(--bg-two-color-white)',
				footerHeightClass: '',
			},
		},
	},
];

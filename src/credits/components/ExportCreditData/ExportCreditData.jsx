import './ExportCreditData.css';

export const ExportCreditData = () => {
	return (
		<div className='export-container'>
			<div className='export'>
				<div>
					<i className='fa-solid fa-image-portrait'></i>
				</div>
				<p>Exportar datos del cliente</p>
			</div>

			<div className='export'>
				<div>
					<i className='fa-solid fa-calendar-day'></i>
				</div>
				<p>Exportar Cronograma de pagos</p>
			</div>

			<div className='export'>
				<div>
					<i className='fa-solid fa-file-invoice-dollar'></i>
				</div>
				<p>Exportar historial de pagos</p>
			</div>
		</div>
	);
};

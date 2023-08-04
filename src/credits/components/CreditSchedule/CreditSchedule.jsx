import { useContext, useEffect } from 'react';
import { AlertContext } from '../../../context/alertContext/AlertContext';
import { setActivateAlert } from '../../../store/credits/creditsSlice';
import { startDeleteCredit, startGetCredit } from '../../../store/credits/thunks';
import { setSubmitCreditCreateForm } from '../../../store/credits/creditsOptionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DocumentTemplate } from '../../../ui/components';
import moment from 'moment/moment';
import './CreditSchedule.css';

export const CreditSchedule = ({ onCloseModal }) => {
	const { activateAlert, message, selectedCredit, creditRawSelected } = useSelector(state => state.credits);
	const { setIsActiveAlert, setDataAlert } = useContext(AlertContext);
	const { submitCreditCreateForm } = useSelector(state => state.creditsOptions);
	const dispatch = useDispatch();

	useEffect(() => {
		if (submitCreditCreateForm) {
			dispatch(startDeleteCredit(creditRawSelected?.id));
			dispatch(setSubmitCreditCreateForm(false));
		}
	}, [submitCreditCreateForm]);

	useEffect(() => {
		if (activateAlert.isActive) {
			setIsActiveAlert(true);
			setDataAlert({
				type: activateAlert.type,
				errorCode: message.statusCode,
				message: message.message,
			});
			setTimeout(() => {
				dispatch(setActivateAlert({ isActive: false, type: '' }));
				setIsActiveAlert(false);
			}, 3000);
			if (activateAlert.type === 'success') onCloseModal();
		}
	}, [activateAlert.isActive]);

	useEffect(() => {
		dispatch(startGetCredit(selectedCredit.id));
	}, []);

	return (
		<DocumentTemplate>
			<div className='document__info-container'>
				<div className='document__info'>
					<div>
						<p>INVOICE TO</p>
						<h2>Financial APP</h2>
						<p>Lorem Ipsum</p>
					</div>

					<div>
						<p>
							<span>Contact Person</span>
						</p>
						<p>
							<span>Phone</span>: {creditRawSelected?.fk_customer?.phone}
						</p>
						<p>
							<span>Email</span>: {creditRawSelected?.fk_customer?.email || 'No especificado'}
						</p>
					</div>
				</div>
				<div className='document__info'>
					<div>
						<p>
							<span>Invoice No</span>: 345232
						</p>
						<p>
							<span>Invoice Date</span>: {moment(creditRawSelected?.date_of_issue).format('YYYY-MM-DD')}
						</p>
					</div>
					<div>
						<p>
							<span>Contact Person</span>
						</p>
						<p>
							<span>Account ID</span>: 235432 3452 23452
						</p>
						<p>
							<span>Account Name</span>:{' '}
							{creditRawSelected?.fk_customer.first_name + ' ' + creditRawSelected?.fk_customer.last_name}
						</p>
					</div>
				</div>
			</div>
			<table className='document__table'>
				<thead>
					<tr>
						<th>#</th>
						<th>Description</th>
						<th>PRICE</th>
						<th>QUANTITY</th>
						<th>AMOUNT</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>

					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
					<tr>
						<td>01</td>
						<td>Logo Design</td>
						<td>$ 90</td>
						<td>1</td>
						<td>$ 90</td>
					</tr>
					<tr>
						<td>02</td>
						<td>Business Invoice Design</td>
						<td>$ 30</td>
						<td>2</td>
						<td>$ 60</td>
					</tr>
				</tbody>
				<tfoot></tfoot>
			</table>

			<div className='document-details'>
				<div className='terms-conditions'>
					<p>Terms & Conditions</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, necessitatibus ipsa. Libero
						adipisci nobis, saepe dolores iure sint qui architecto, harum sapiente, iste quo eos sunt amet
						delectus soluta quia?
					</p>
				</div>
				<div className='signature'>
					<h3>RICHARD R.</h3>
					<p>HR Director</p>
				</div>
			</div>
		</DocumentTemplate>
	);
};

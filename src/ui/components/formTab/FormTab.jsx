import { FormTabHeader } from '../formTabHeader';
import './FormTab.css';

export const FormTab = ({ labelTabsHeader, centinela, children }) => {
	return (
		<div className='form-tab'>
			<FormTabHeader labelTabsHeader={labelTabsHeader} centinela={centinela} />
			<form className='form-tab__body'>{children}</form>
		</div>
	);
};

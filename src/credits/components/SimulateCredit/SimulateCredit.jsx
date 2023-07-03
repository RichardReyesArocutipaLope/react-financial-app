import { useResponsiveForm } from "../../../hooks";
import { Button, DocumentTemplate, FragmentContainer, InputDate, InputNumber, InputSelect, InputText, InputsRow } from "../../../ui/components";

export const SimulateCredit = () => {

    const initialResponsive = [
        { name: 'DNI',              xxs: 24, xs: 24, s: 16, m: 7, l: 7, xl: 5, xxl: 5, col: 6 },
        { name: 'buttonSearchDNI',  xxs: 24, xs: 24, s: 8, m: 5, l: 5, xl: 3, xxl: 3, col: 6 },

        { name: 'simulate_data1',   xxs: 24, xs: 24, s: 24, m: 12, l: 12, xl: 8, xxl: 8, col: 6 },
        { name: 'simulate_data2',   xxs: 24, xs: 24, s: 12, m: 6, l: 6, xl: 4, xxl: 4, col: 6 },
    ]
    const { rwd, centinela } = useResponsiveForm(initialResponsive);

    return (
        <>
            <div style={{ padding: '.5rem 2rem' }}>
                <InputsRow margin='1.6'>
                    <InputText col={rwd.DNI} label='DNI' name='dni' />
                    <FragmentContainer col={rwd.buttonSearchDNI}>
                        <Button width='8.7rem' className='primary' content='Buscar' />
                    </FragmentContainer>
                    <InputText col={rwd.simulate_data1} label='Nombres' name='cli_nombre' />
                    <InputText col={rwd.simulate_data1} label='Apellidos' name='cli_apellidos' />
                    <InputNumber col={rwd.simulate_data2} label='Monto solicitado' name='monto-solicitado' money />
                    <InputDate col={rwd.simulate_data2} label='Desembolso' name='pres_fecha-desembolso' />
                    <InputNumber col={rwd.simulate_data2} label='Plazo' name='pres_plazo' />
                    <InputSelect col={rwd.simulate_data2} label='Tipo plazo' name='pres_tipo-plazo' />
                    <InputSelect col={rwd.simulate_data2} label='Tipo interes' name='pres_interes' />
                    <InputNumber col={rwd.simulate_data2} label='Tasa%' name='pres_tasa' />
                </InputsRow>
                <hr />
            </div>
            <DocumentTemplate>

                <div className='document__info-container'>
                    <div className='document__info'>
                        <div>
                            <p>INVOICE TO</p>
                            <h2>Megumin Ryu</h2>
                            <p>Supervisro back company</p>
                        </div>

                        <div>
                            <p><span>Contact Person</span></p>
                            <p><span>Phone</span>: +62 987 3453 3453</p>
                            <p><span>Email</span>: RichardArocutipa@gmail.com</p>
                        </div>
                    </div>
                    <div className='document__info'>
                        <div>
                            <p><span>Invoice No</span>: 345232</p>
                            <p><span>Invoice Date</span>: December 36th, 2023</p>
                        </div>
                        <div>
                            <p><span>Contact Person</span></p>
                            <p><span>Account ID</span>: 235432 3452 23452</p>
                            <p><span>Account Name</span>: Richard Reyes Arocutipa Lope</p>
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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, necessitatibus ipsa. Libero adipisci nobis, saepe dolores iure sint qui architecto, harum sapiente, iste quo eos sunt amet delectus soluta quia?</p>
                    </div>
                    <div className='signature'>
                        <h3>RICHARD R.</h3>
                        <p>HR Director</p>
                    </div>
                </div>


            </DocumentTemplate>
        </>
    )
}

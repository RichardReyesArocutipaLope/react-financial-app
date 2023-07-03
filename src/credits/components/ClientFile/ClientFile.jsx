import { DocumentTemplate, InputForDocument, RowForDocument } from '../../../ui/components'
import './ClientFile.css'

export const ClientFile = () => {
    return (
        <DocumentTemplate>


            <h2 className="client-file__subtitle">Datos del cliente</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={9} label='Nombres' content='Richard Reyes arocutipa Lope' />
                <InputForDocument col={9} label='Direccion' content='ASOC. VIV. LA PERLA MZ. 7 LOTE 21' />
                <InputForDocument col={6} label='DNI' content='71283340' />
            </RowForDocument>
            <RowForDocument margin='1.2'>
                <InputForDocument col={7} label='Celular 1' content='+51 925 072 688' />
                <InputForDocument col={7} label='Celular 2' content='+51 925 072 688' />
                <InputForDocument col={10} label='Correo' content='richardreyesarocutipalope@gmail.com' />
            </RowForDocument>


            <h2 className="client-file__subtitle">Datos del negocio</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={12} label='Direccion de negocio' content='ASOC. VIV. LA PERLA MZ. 7 LOTE 21' />
                <InputForDocument col={12} label='Referencia de negocio' content='Mercadillo bolognesi, mas arriba del banco bcp' />
            </RowForDocument>
            <RowForDocument margin='1.2'>
                <InputForDocument col={24} label='Actividad de negocio' content='Venta de equipos informaticos: laptops, tarjetas graficas, memorias ram' />
            </RowForDocument>


            <h2 className="client-file__subtitle">Referencias personales</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={9} label='Nombres' content='Richard Reyes arocutipa Lope' />
                <InputForDocument col={5} label='DNI' content='71283340' />
                <InputForDocument col={5} label='Celular' content='+51 925 072 688' />
                <InputForDocument col={5} label='parentesco' content='Abuelo' />
            </RowForDocument>
            <RowForDocument margin='1.2'>
                <InputForDocument col={9} label='Nombres' content='Richard Reyes arocutipa Lope' />
                <InputForDocument col={5} label='DNI' content='71283340' />
                <InputForDocument col={5} label='Celular' content='+51 925 072 688' />
                <InputForDocument col={5} label='parentesco' content='Abuelo' />
            </RowForDocument>


            <h2 className="client-file__subtitle">Datos de aval</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={9} label='Nombres' content='Richard Reyes arocutipa Lope' />
                <InputForDocument col={5} label='DNI' content='71283340' />
                <InputForDocument col={5} label='Celular 1' content='+51 925 072 688' />
                <InputForDocument col={5} label='Celular 2' content='+51 925 072 688' />
            </RowForDocument>


            <h2 className="client-file__subtitle">Datos de préstamo</h2>
            <RowForDocument margin='1.2'>
                <InputForDocument col={8} label='Monto aprobado' content='S/. 35,300.00' />
                <InputForDocument col={8} label='Plazo del crédito' content='5 años' />
                <InputForDocument col={8} label='Cuota a pagar' content='S/ 950.00' />
            </RowForDocument>

        
        </DocumentTemplate>
    )
}

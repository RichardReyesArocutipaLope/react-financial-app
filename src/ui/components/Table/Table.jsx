import { useEffect, useState } from 'react'
import './Table.css'
import { useResponsiveTable } from '../../../hooks'
import { useSelector } from 'react-redux'

export const Table = () => {

    const thead = [
        'Nombres',
        'DNI',
        'Préstamo',
        'Estado',
        'Plazo',
        'Tasa Inc',
        'Analista',
        'Cobrador',
    ]

    const { isLoading, credits } = useSelector(state => state.credits);

    const adaptedCredits = []
    credits?.forEach(credit => {
        let newEstado
        switch (credit.estado) {
            case 'NU': newEstado = 'Nuevo'; break;
            case 'RE': newEstado = 'Renovado'; break;
            case 'AP': newEstado = 'Aprobado'; break;
            case 'DE': newEstado = 'Desembolsado'; break;
            case 'RC': newEstado = 'Rechazado'; break;
        }
        adaptedCredits.push({
            id: credit.id_credit,
            credit: [
                credit.cliente,
                credit.dni,
                credit.prestamo,
                newEstado,
                credit.plazo,
                credit.credit_interest_rate,
                credit.analista,
                credit.cobrador,
            ]
        })
    });

    const [tableRwd, setTableRwd] = useState(null)
    const [numRegister, setNumRegister] = useState(10)
    const { maxColumns } = useResponsiveTable();
    console.log('maxColumns', maxColumns);

    useEffect(() => {
        let initialTableRwd = {}
        for (let i = 0; i < numRegister; i++) {
            initialTableRwd[`tr${i}`] = false;
        }
        console.log(initialTableRwd)
        setTableRwd(initialTableRwd)
    }, [numRegister])

    return (
        <div className='table-container'>

            {isLoading
                ? (<h1>CARGANDO LA WEA</h1>)
                : (<table className='table'>
                    <thead className='table__thead'>
                        <tr>
                            <th className='button-rwd'></th>
                            {thead.map((item, index) => {
                                if ((index + 1) > maxColumns) return;
                                return (<th key={item}>{item}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody className='table__tbody'>
                        {
                            adaptedCredits?.map(({ id, credit }, index) => (
                                <>
                                    <tr key={id}>
                                        <td className='button-rwd'>
                                            <i onClick={() => { setTableRwd(tableRwd => ({ ...tableRwd, [`tr${index}`]: !tableRwd[`tr${index}`] })) }} className="fa-solid fa-plus"></i>
                                        </td>

                                        {credit.map((item, index) => {
                                            if ((index + 1) > maxColumns) return
                                            return (
                                                <td key={item}>{item}</td>
                                            )
                                        })}
                                    </tr>
                                    {tableRwd && tableRwd[`tr${index}`] && (credit.length > maxColumns) &&
                                        <tr className='tr-children'>
                                            <div>
                                                {credit.map((item, index) => {
                                                    if ((index + 1) <= maxColumns) return
                                                    return (
                                                        <td key={item}>
                                                            <span className='tr-children__title'>{thead[index]}</span>:
                                                            <span className='tr-children__content'>{item}</span>
                                                        </td>
                                                    )
                                                })}
                                            </div>
                                        </tr>}
                                </>
                            ))
                        }
                    </tbody>
                </table>)
            }

        </div>
    )

}
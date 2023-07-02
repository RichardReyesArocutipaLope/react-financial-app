import { useEffect, useState } from 'react'
import './Table.css'
import { useResponsiveTable } from '../../hooks/useResponsiveTable'

export const Table = () => {

    const thead = [
        'Nombres',
        'DNI',
        'Préstamo',
        'Estado',
        'Plazo',
        'Cuota',
        'Saldo',
        'Tasa Inc',
        'Analista',
        'Cobrador',
    ]

    const tbody = [
        {
            id: 1,
            data: [
                'Richard Reyes Arocutipa Lope lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
        {
            id: 2,
            data: [
                'Richard Reyes Arocutipa Lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
        {
            id: 3,
            data: [
                'Richard Reyes Arocutipa Lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
        {
            id: 4,
            data: [
                'Richard Reyes Arocutipa Lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
        {
            id: 5,
            data: [
                'Richard Reyes Arocutipa Lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
        {
            id: 6,
            data: [
                'Richard Reyes Arocutipa Lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
        {
            id: 7,
            data: [
                'Richard Reyes Arocutipa Lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
        {
            id: 8,
            data: [
                'Richard Reyes Arocutipa Lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
        {
            id: 9,
            data: [
                'Richard Reyes Arocutipa Lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
        {
            id: 10,
            data: [
                'Richard Reyes Arocutipa Lope',
                '71283340',
                'S/. 56,000.00',
                'Aprobado',
                '3 Años',
                'S/. 450.80',
                'S/. 35,340.00',
                '8.3443 %',
                'Victor Mireles Bernabe',
                'Rolando Gutierrez Cutipa',
            ]
        },
    ]


    const [tableRwd, setTableRwd] = useState(null)
    const [numRegister, setNumRegister] = useState(10)

    const { maxColumns } = useResponsiveTable();
    console.log('maxColumns', maxColumns);

    useEffect(() => {
        console.log('saf')
        let initialTableRwd = {}
        for (let i = 0; i < numRegister; i++) {
            initialTableRwd[`tr${i}`] = false;
        }
        console.log(initialTableRwd)

        setTableRwd(initialTableRwd)

    }, [numRegister])



    return (
        <div className='table-container'>
            <table className='table'>
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
                        tbody.map(({ data, id }, index) => (
                            <>
                                <tr key={id}>
                                    <td className='button-rwd'>
                                        <i onClick={() => { setTableRwd(tableRwd => ({ ...tableRwd, [`tr${index}`]: !tableRwd[`tr${index}`] })) }} class="fa-solid fa-plus"></i>
                                    </td>

                                    {data.map((item, index) => {
                                        if ((index + 1) > maxColumns) return
                                        return (
                                            <td key={item}>{item}</td>
                                        )
                                    })}
                                </tr>
                                {tableRwd && tableRwd[`tr${index}`] && (data.length > maxColumns) &&
                                    <tr className='tr-children'>
                                        <div>
                                            {data.map((item, index) => {
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
            </table>
        </div>
    )

}
import React, { useContext, useEffect, useState } from 'react'
import { useResponsiveTable } from '../../../hooks'
import { SimpleLoading } from '../simpleLoading'
import { TableThead } from '../tableThead/TableThead'
import './Table.css'
import { CreditContext } from '../../../credits/context'

export const Table = ({ isLoading, arrayData }) => {
    const { tablethead, setCreditSelected } = useContext(CreditContext);
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

    const onSelectRegister = (data,id) => {
        setCreditSelected({ tablethead, data, id })
    }

    return (
        <div className='table-container'>

            {isLoading
                ? (<SimpleLoading />)
                : (<table className='table'>
                    <TableThead tablethead={tablethead} maxColumns={maxColumns} />
                    <tbody className='table__tbody'>
                        {
                            arrayData?.map(({ id, data }, index) => (
                                <React.Fragment key={id}>
                                    <tr key={id} onClick={()=>{onSelectRegister(data, id)}}>
                                        <td className='button-rwd'>
                                            <i onClick={() => { setTableRwd(tableRwd => ({ ...tableRwd, [`tr${index}`]: !tableRwd[`tr${index}`] })) }} className="fa-solid fa-plus"></i>
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
                                                            <span className='tr-children__title'>{tablethead[index]}</span>:
                                                            <span className='tr-children__content'>{item}</span>
                                                        </td>
                                                    )
                                                })}
                                            </div>
                                        </tr>}
                                </React.Fragment>
                            ))
                        }
                    </tbody>
                </table>)
            }

        </div>
    )

}
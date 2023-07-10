import './ModuleOptionsInfoRight.css'

export const ModuleOptionsInfoRight = ({ dataInfoRight = {}, titleInfoRight = "", moreInfoRight, handleMoreInfoRight }) => {
    const { infoBody, infoHead } = dataInfoRight

    return (
        <div
            className={`module-options__info-wrapper right ${moreInfoRight ? 'extend' : ''}`}
            onDoubleClick={handleMoreInfoRight}>
            <p>{titleInfoRight}</p>
            <div className='module-options__info'>
                <div className='module-options__info-table-title'>
                    <span>TARIFARIO DE PAGOS SEMANALES</span>
                </div>
                <div className='module-options__info-table' >
                    <div className='table-container'>
                        <table className='table'>
                            <thead className='table__thead'>
                                <tr>
                                    {infoHead.map(head => <th key={head}>{head}</th>)}
                                </tr>
                            </thead>
                            <tbody className='table__tbody'>
                                {infoBody.map((row, index) => (
                                    <tr key={index}>
                                        {row.map(item => <td key={item}>{item}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

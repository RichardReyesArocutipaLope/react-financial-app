import './TableThead.css'

export const TableThead = ({ thead, maxColumns }) => {
    return (
        <thead className='table__thead'>
            <tr>
                <th className='button-rwd'></th>
                {thead.map((item, index) => {
                    if ((index + 1) > maxColumns) return;
                    return (<th key={item}>{item}</th>)
                })}
            </tr>
        </thead>
    )
}

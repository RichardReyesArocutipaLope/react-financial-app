import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        size: "A4",
        padding: ".7cm"
    },

    tableStyle: {
        display: "table",
        width: "auto"
    },

    tableRowHeaderStyle: {
        flexDirection: "row",
        backgroundColor: "rgb(235, 235, 235)",
        borderRadius: "8pt",
        marginTop: ".5cm"
    },
    tableCellHeaderStyle: {
        textAlign: "center",
        margin: 6,
        fontSize: 10,
        fontWeight: "600",
    },


    tableRowBodyStyle: {
        flexDirection: "row",
        borderBottom: "1.5px solid rgb(225, 225, 225)"
    },
    tableCellStyle: {
        textAlign: "start",
        margin: 5,
        fontSize: 10
    },

    rowFilter: {
        flexDirection: "row",
        width: '100%'
    },
    rowFilterItem: {
        flexDirection: "row",
        width: '50%'
    },

    rowFilterHead: {
        width: '28%'
    },
    rowFilterInfo: {
        width: '72%'
    },
    rowFilterText: {
        textAlign: "start",
        margin: 5,
        fontSize: 10
    },
    rowFilterTextHead: {
        textAlign: "start",
        margin: 5,
        fontSize: 10,
    }


});

// Create Document Component
export const MyDocument = ({ adaptedCredits, thead, dataFilter }) => {

    console.log({ adaptedCredits, thead, dataFilter })

    const newDataFilter = [
        [
            {
                label: 'FECHA INICIAL',
                value: dataFilter.dateRangeFirst || 'No especificado'
            },
            {
                label: 'FECHA FINAL',
                value: dataFilter.dateRangeLast || 'No especificado'
            },
        ],
        [
            {
                label: 'ANALISTA',
                value: dataFilter.idAnalista || 'No especificado'
            },
            {
                label: 'COBRADOR',
                value: dataFilter.idCobrador || 'No especificado'
            },
        ],
        [
            {
                label: 'PRÉSTAMO FROM',
                value: dataFilter.moneyRangeFirst || 'No especificado'
            },
            {
                label: 'PRÉSTAMO TO',
                value: dataFilter.moneyRangeLast || 'No especificado'
            },
        ],
        [
            {
                label: 'BUSQUEDA',
                value: dataFilter.searchValue || 'No especificado'
            },
            {
                label: 'ESTADO',
                value: dataFilter.state || 'No especificado'
            },
        ]
    ]

    const newThead = [
        {
            width: '20%',
            label: thead[0]
        },
        {
            width: '8%',
            label: thead[1]
        },
        {
            width: '8%',
            label: thead[2]
        },
        {
            width: '8%',
            label: thead[3]
        },
        {
            width: '8%',
            label: thead[4]
        },
        {
            width: '8%',
            label: thead[5]
        },
        {
            width: '20%',
            label: thead[6]
        },
        {
            width: '20%',
            label: thead[7]
        },
    ]

    const newCredits = []

    adaptedCredits.forEach(element => {
        let adaptCredit = {
            id: element.id,
            credit: [
                {
                    width: '20%',
                    label: element.data[0]
                },
                {
                    width: '8%',
                    label: element.data[1]
                },
                {
                    width: '8%',
                    label: element.data[2]
                },
                {
                    width: '8%',
                    label: element.data[3]
                },
                {
                    width: '8%',
                    label: element.data[4]
                },
                {
                    width: '8%',
                    label: element.data[5]
                },
                {
                    width: '20%',
                    label: element.data[6]
                },
                {
                    width: '20%',
                    label: element.data[7]
                },
            ]
        }
        newCredits.push(adaptCredit)
    });
    console.log(newCredits, 'aeaeaeaeae')

    const CreateTableHeader = () => {
        return (
            <View style={styles.tableRowHeaderStyle} fixed>
                {newThead.map(item => (
                    <View style={{ width: item.width }}>
                        <Text style={styles.tableCellHeaderStyle}>{item.label}</Text>
                    </View>
                ))}
            </View>
        );
    };

    const CreateTableRow = () => {
        return newCredits.map(item => (
            <View style={styles.tableRowBodyStyle} key={item.id}>
                {item.credit.map(campo => (
                    <View style={{ width: campo.width }} key={campo.label}>
                        <Text style={styles.tableCellStyle}>{campo.label}</Text>
                    </View>
                ))}
            </View>
        ))

    };

    const Filter = () => {
        return newDataFilter.map(data => (
            <View style={styles.rowFilter} fixed>
                {data.map(item => (
                    <View style={styles.rowFilterItem}>
                        <View style={styles.rowFilterHead}>
                            <Text style={styles.rowFilterTextHead}>{item.label}:</Text>
                        </View>
                        <View style={styles.rowFilterInfo}>
                            <Text style={styles.rowFilterText}>{item.value}</Text>
                        </View>
                    </View>
                ))}
            </View>
        ))
    }

    return (
        <Document>
            <Page size="A4" style={styles.page} orientation='landscape'>
                <View style={styles.tableStyle}>
                    <Filter />
                    <CreateTableHeader />
                    <CreateTableRow />
                </View>
            </Page>
        </Document>
    )
}

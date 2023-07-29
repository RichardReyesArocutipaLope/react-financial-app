import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import robotoBold from "../../../fonts/Roboto-Bold.ttf";

Font.register({
  family: "robotoBold",
  src: robotoBold,
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    size: "A4",
    padding: ".7cm",
  },

  tableStyle: {
    display: "table",
    width: "auto",
  },

  tableRowHeaderStyle: {
    flexDirection: "row",
    backgroundColor: "rgb(235, 235, 235)",
    borderRadius: "8pt",
    marginTop: ".5cm",
  },
  tableCellHeaderStyle: {
    textAlign: "center",
    margin: 6,
    fontSize: 10,
    fontWeight: "600",
  },

  tableRowBodyStyle: {
    flexDirection: "row",
    borderBottom: "1.5px solid rgb(225, 225, 225)",
  },
  tableCellStyle: {
    textAlign: "start",
    margin: 5,
    fontSize: 10,
  },

  rowFilter: {
    flexDirection: "row",
    width: "100%",
  },
  rowFilterItem: {
    flexDirection: "row",
    width: "50%",
  },

  rowFilterHead: {
    width: "28%",
  },
  rowFilterInfo: {
    width: "72%",
  },
  rowFilterText: {
    textAlign: "start",
    margin: 5,
    fontSize: 10,
  },
  rowFilterTextHead: {
    textAlign: "start",
    margin: 5,
    fontSize: 10,
    fontFamily: "robotoBold",
  },

  rowTitle: {
    flexDirection: "row",
    width: "100%",
  },

  rowTitleText: {
    width: "100%",
    textAlign: "center",
    margin: 5,
    marginBottom: 13,
    fontSize: 12,
    fontFamily: "robotoBold",
  },
});

const CreateTableHeader = ({ newThead }) => {
  return (
    <View style={styles.tableRowHeaderStyle} fixed>
      {newThead.map((item) => (
        <View style={{ width: item.width }} key={item.label}>
          <Text style={styles.tableCellHeaderStyle}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

const CreateTableRow = ({ newCredits }) => {
  return newCredits.map((item) => (
    <View style={styles.tableRowBodyStyle} key={item.id}>
      {item.credit.map((campo) => (
        <View style={{ width: campo.width }} key={campo.label}>
          <Text style={styles.tableCellStyle}>{campo.label}</Text>
        </View>
      ))}
    </View>
  ));
};

const Filter = ({ newDataFilter }) => {
  return newDataFilter.map((data) => (
    <View style={styles.rowFilter} fixed key={Math.floor(Math.random() * 100)}>
      {data.map((item) => (
        <View
          style={styles.rowFilterItem}
          key={Math.floor(Math.random() * 100)}
        >
          <View style={styles.rowFilterHead}>
            <Text style={styles.rowFilterTextHead}>{item.label}</Text>
          </View>
          <View style={styles.rowFilterInfo}>
            <Text style={styles.rowFilterText}>{item.value}</Text>
          </View>
        </View>
      ))}
    </View>
  ));
};

const Title = ({ title }) => {
  return (
    <View style={styles.rowTitle}>
      <Text style={styles.rowTitleText}>{title}</Text>
    </View>
  );
};

// Create Document Component
export const MyDocument = ({
  credits,
  thead,
  dataForFilter,
  analistas,
  cobradores,
}) => {
  console.log("MyDocument.jsx");

  const convertState = (estado) => {
    let newEstado;
    switch (estado) {
      case "NU":
        newEstado = "Nuevo";
        break;
      case "RE":
        newEstado = "Renovado";
        break;
      case "AP":
        newEstado = "Aprobado";
        break;
      case "DE":
        newEstado = "Desembolsado";
        break;
      case "RC":
        newEstado = "Rechazado";
        break;
    }

    return newEstado;
  };

  const newDataFilter = [
    [
      {
        label: "FECHA DESDE :",
        value: dataForFilter.dateRangeFirst || "No especificado",
      },
      {
        label: "FECHA HASTA :",
        value: dataForFilter.dateRangeLast || "No especificado",
      },
    ],
    [
      {
        label: "ANALISTA :",
        value:
          analistas?.find((employee) => dataForFilter.idAnalista == employee.id)
            ?.fullname || "No especificado",
      },
      {
        label: "COBRADOR :",
        value:
          cobradores?.find(
            (employee) => dataForFilter.idCobrador == employee.id
          )?.fullname || "No especificado",
      },
    ],
    [
      {
        label: "PRÉSTAMO DESDE :",
        value: dataForFilter.moneyRangeFirst || "No especificado",
      },
      {
        label: "PRÉSTAMO HASTA :",
        value: dataForFilter.moneyRangeLast || "No especificado",
      },
    ],
    [
      {
        label: "BÚSQUEDA :",
        value: dataForFilter.searchValue || "No especificado",
      },
      {
        label: "ESTADO :",
        value: convertState(dataForFilter.state) || "No especificado",
      },
    ],
  ];

  const newThead = [
    {
      width: "20%",
      label: thead[0],
    },
    {
      width: "8%",
      label: thead[1],
    },
    {
      width: "8%",
      label: thead[2],
    },
    {
      width: "8%",
      label: thead[3],
    },
    {
      width: "8%",
      label: thead[4],
    },
    {
      width: "8%",
      label: thead[5],
    },
    {
      width: "20%",
      label: thead[6],
    },
    {
      width: "20%",
      label: thead[7],
    },
  ];

  const newCredits = [];

  credits.forEach((element) => {
    let adaptCredit = {
      id: element.id,
      credit: [
        {
          width: "20%",
          label: element.data[0],
        },
        {
          width: "8%",
          label: element.data[1],
        },
        {
          width: "8%",
          label: element.data[2],
        },
        {
          width: "8%",
          label: element.data[3],
        },
        {
          width: "8%",
          label: element.data[4],
        },
        {
          width: "8%",
          label: element.data[5],
        },
        {
          width: "20%",
          label: element.data[6],
        },
        {
          width: "20%",
          label: element.data[7],
        },
      ],
    };
    newCredits.push(adaptCredit);
  });

  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View style={styles.tableStyle}>
          <Title title="REPORTE" />
          <Filter newDataFilter={newDataFilter} />
          <CreateTableHeader newThead={newThead} />
          <CreateTableRow newCredits={newCredits} />
        </View>
      </Page>
    </Document>
  );
};

import Excel from 'exceljs';
import { saveAs } from 'file-saver';


export const useExcel = (data) => {

    const credits = data;
    const workbook = new Excel.Workbook();

    const columns = [
        { header: 'Nombres', key: 'nombres' },
        { header: 'DNI', key: 'dni' },
        { header: 'Préstamo', key: 'prestamo' },
        { header: 'Estado', key: 'estado' },
        { header: 'Plazo', key: 'plazo' },
        { header: 'TasaInc', key: 'tasainc' },
        { header: 'Analista', key: 'analista' },
        { header: 'Cobrador', key: 'cobrador' },
    ];

    const workSheetName = 'Worksheet-1';

    const saveExcel = async () => {
        const data = [];
        credits.forEach(credit => {
            const item = {};
            credit.data.forEach((element, index) => {
                item[columns[index].key] = element;
            });
            data.push(item);
        });

        try {
            const worksheet = workbook.addWorksheet(workSheetName);
            worksheet.columns = columns;
            worksheet.getRow(1).font = { bold: true };

            worksheet.columns.forEach(column => {
                if (['nombres', 'analista', 'cobrador'].includes(column.key)) {
                    column.width = column.header.length + 25;
                } else {
                    column.width = column.header.length + 10;
                    column.alignment = { horizontal: 'center' };
                }
            });

            data.forEach(singleData => {
                worksheet.addRow(singleData);
            });

            const styleCell = { style: 'thin' };
            worksheet.eachRow({ includeEmpty: false }, row => {
                const currentCell = row._cells;
                currentCell.forEach(singleCell => {
                    const cellAddress = singleCell._address;
                    worksheet.getCell(cellAddress).border = {
                        top: styleCell,
                        left: styleCell,
                        bottom: styleCell,
                        right: styleCell,
                    };
                });
            });

            const buf = await workbook.xlsx.writeBuffer();
            saveAs(new Blob([buf]), `Reporte_creditos.xlsx`);
        } catch (error) {
            console.error(error);
        } finally {
            workbook.removeWorksheet(workSheetName);
        }
    };
    return { saveExcel }
}

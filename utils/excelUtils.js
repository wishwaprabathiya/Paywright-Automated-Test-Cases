const xlsx = require('xlsx');

function getExcelData(filePath, sheetName) {
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(sheet, { header: 1 }).slice(1);
}

module.exports =  getExcelData;

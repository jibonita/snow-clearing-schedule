import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() { }

  generateSchedulePdf(data) {
    console.log(data);
    // const documentDefinition = {
    //    content: 'This is an sample PDF printed with pdfMake'
    // };
    //pdfMake.createPdf(documentDefinition).download();
    // pdfMake.createPdf(documentDefinition).open({}, window);

    const dd = {
      content: [
        { text: 'График за почистване на снега', style: 'header' },
        {
          style: 'tableSchedule',
          table: {
            headerRows: 1,
            // dontBreakRows: true,
            // keepWithHeaderRows: 1,
            widths: [200, 70, '*'],
            body: [
              [{ text: 'Седмица', style: 'tableHeader' },
              { text: 'Двор', style: 'tableHeader' },
              { text: 'Рампа', style: 'tableHeader' }],
              ...data.map(week => {
                return [week.fromTo, week.flatNo.name, week.parkingLot.name + ' (' + week.parkingLot.ownerName + ')']
              }),
            ]
          },

        },
        {
          image: 'data:image/png;base64,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',
          width: 400
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableSchedule: {
          margin: [0, 5, 0, 15],
          fontSize: 16
        },
        tableHeader: {
          bold: true,
          fontSize: 18,
          color: 'black'
        }
      },
    };

    pdfMake.createPdf(dd).download();
  }
}
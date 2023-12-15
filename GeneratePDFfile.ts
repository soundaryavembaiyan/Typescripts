//npm install jspdf html2canvas --save

import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})

@Injectable()
export class DocumentComponent {

  @ViewChild('pdfContent') pdfContent!: ElementRef;

  generatePdf() {
    const content = this.pdfContent.nativeElement;

    html2canvas(content).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      // Get form values and dynamically add them to the PDF
      const formData = this.myForm.value;
      let yPos = pdfHeight + 10;

      Object.keys(formData).forEach(key => {
        const value = formData[key];
        pdf.text(`Field: ${key}, Value: ${value}`, 10, yPos);
        yPos += 10; // Increment the y-position for the next line
      });

      pdf.save('form_data.pdf');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { LagunaserviceService } from '../Services/lagunaservice.service';
import { jsPDF } from "jspdf";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-thankyoupage',
  templateUrl: './thankyoupage.component.html',
  styleUrls: ['./thankyoupage.component.css',
    '../../assets/appcss.css']
})
export class ThankyoupageComponent implements OnInit {
  name:any=localStorage.getItem('Restaurant_name');
  constructor(private admin_data:LagunaserviceService) { }
 gethelpText:any;
 conf_text_readonly:any;
 date_now:any
  ngOnInit(): void {
  }
  get_pdf(){ //for generating the pdf and formatting it
    const doc = new jsPDF('landscape');

    this.admin_data.get_help_text().subscribe(data=>{console.log(data)
      this.gethelpText=data;
      this.gethelpText=this.gethelpText.msg;
    
     this.conf_text_readonly=this.gethelpText[0].order_conf
     console.log(typeof(this.conf_text_readonly))
     doc.setFontSize(30);
     doc.setFont("helvetica");
    //  doc.setFontType("bold");
    doc.setTextColor('#033861');
    doc.setDrawColor(150);
    doc.setLineWidth(0.8);
    // doc.setLineDash([7, 3, 1, 3], 10);
    doc.line(6, 25, 200, 25);
    doc.line(285, 200, 285, 70);
    doc.line(130, 195, 290, 195);
    
     doc.text('Thank You!',120,20);
     doc.setFontSize(8);
     doc.text('Powered by ShopLocalLaguna',120,200);
     var now_date = new Date();
     var datePipe = new DatePipe("en-US");
     this.date_now=datePipe.transform(now_date,"dd/MM/YY hh:mm:ss")
     doc.setFontSize(8);

     doc.text(this.date_now,125,205);

     doc.line(10, 20, 10, 150); // vertical line
     doc.setFontSize(13);
     doc.addImage('/assets/images/sllfade.jpeg', 'JPEG', 68, 70, 150, 76);
     doc.setFont("times");
     doc.setTextColor('#00477e');
     doc.text('Hi '+this.name+',',68,33)
      doc.text(this.conf_text_readonly, 68, 42,{maxWidth: 150, align: "left"});
      // doc.save("justify.pdf");
      
     doc.save("Order Confirmation.pdf");
    //  this.downloadPdf(this.conf_text_readonly,"sample");
      
    })
  }
  downloadPdf(base64String:any, fileName:any) { //for downloading the PDF
    base64String = 'Welcome';
    const byteArray = new Uint8Array(base64String);
    let blob = new Blob([byteArray], {
      type: 'application/pdf' // must match the Accept type
      // type: 'application/octet-stream' // for excel 
    });
    console.log({blob});
    
    var link = document.createElement('a');
    console.log({link});
    
    link.href = window.URL.createObjectURL(blob);
    link.download = `${fileName}.pdf`;
    link.click();
    // window.URL.revokeObjectURL(link.href);
    // const source = `data:application/pdf;base64,${base64String}`;
    // console.log(source);
    
    // const link = document.createElement("a");
    // link.href = source;
    // link.download = `${fileName}.pdf`
    // link.click();
  }
}

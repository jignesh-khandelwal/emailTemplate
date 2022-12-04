import { Injectable } from '@angular/core';
declare function jsPDF(orientation, unit, format, compressPdf): any;
declare function addImage(imageData, format, x, y, w, h, alias, compression, rotation);
declare function addPage(w, h);
declare function save(filename, options);
declare function html2canvas(element, options);

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  // PDF CONVERSION
  page_section
  HTML_Width
  HTML_Height
  top_left_margin = 15;
  PDF_Width
  PDF_Height
  canvas_image_width
  canvas_image_height
  pdf = undefined;

  constructor() { }

  createJSPDFObject(format) {
    let object = jsPDF('p', 'pt', 'a4', true);
    return object
  }

  addImageToObject(object, imageData, format, x, y, w, h, alias, compression, rotation) {
    object.addImage(imageData, format, x, y, w, h, alias, compression, rotation);
    return object;
  }

  savePDFObject(object, filename, options) {
    object.save(filename);
  }

  html2canvasFunction(element, options) {
    return html2canvas(element, options)
  }

  get_pages_number() {
    return document.getElementsByClassName('page').length;
  }

  calculatePDF_height_width(selector, index) {
    this.page_section = document.getElementById(selector)
    this.HTML_Width = 595
    this.HTML_Height = 842
    this.top_left_margin = 0;
    this.PDF_Width = 595
    this.PDF_Height = 842

    this.canvas_image_width = this.HTML_Width;
    this.canvas_image_height = this.HTML_Height;
  }

  addPageToObject(object, w, h) {
    object.addPage(w, h);
    return object;

  }

  generatePdf() {
    return new Promise((resolve, reject) => {
      let page_number = this.get_pages_number();
      let pages = []
      for (let i = 1; i <= page_number; i++) {
        pages.push('page' + i);
      }
      let i = 0;
      let arrayOfPromises = [];
      for (let page of pages) {
        arrayOfPromises.push(this.html2canvasFunction(document.getElementById(page), {
          allowTaint: true,
          scale: 4
        }))
      }

      Promise.all(arrayOfPromises).then(arrayOfcanvas => {

        for (let canvas of arrayOfcanvas) {
          this.calculatePDF_height_width(pages[i], 0);
          var imgData = canvas.toDataURL("image/jpeg", 1.0);
          if (this.pdf == undefined) {
            this.pdf = this.createJSPDFObject([this.PDF_Width, this.PDF_Height]);
          } else {
            this.addPageToObject(this.pdf, this.PDF_Width, this.PDF_Height);
          }
          this.addImageToObject(this.pdf, imgData, 'JPG', this.top_left_margin, this.top_left_margin, this.HTML_Width, this.HTML_Height, null, null, null)
        }
        i++;
        this.savePDFObject(this.pdf, "template.pdf", null);
        resolve(true);
        window.location.reload();
      })
    });

  }
}

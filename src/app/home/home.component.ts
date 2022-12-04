import { Component, OnInit } from '@angular/core';
import { PdfService } from '../service/pdf.service';

interface TemplateInterface {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  templateList: TemplateInterface[] = [
    { value: 'template_a', viewValue: 'Template a' },
    { value: 'template_b', viewValue: 'Template b' },
  ];

  constructor(
    private pdfService: PdfService
  ) { }

  ngOnInit(): void {
    this.loadtemplate(this.templatea());
  }

  generatePdf() {
    this.pdfService.generatePdf();
  }

  loadtemplate(template) {
    const contentDiv = document.getElementById("page1");
    contentDiv.innerHTML = template;
  }

  selectChange(event) {
    if (event.value == 'template_a') {
      this.loadtemplate(this.templatea());
    }
    else {
      this.loadtemplate(this.templateb());
    }
  }

  templateb() {
    return `
    <!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Template b</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body style="
min-width: 100%;
width: 100%;
height: 100%;
background-color: #FFFFFF;
padding: 0; margin: 0;">
    <div style="
    max-width: 700px;
    margin: auto;
    height: 100%;
    background-color: #FFFFFF;">
        <div>
            <div style="
            height: 5px;
            background-color: black;
            background-image: -webkit-linear-gradient(to left, #000000, gray);
            background-image: -moz-linear-gradient(to left, #000000, gray);
            background-image: -o-linear-gradient(to left, #000000, gray);
            background-image: -ms-linear-gradient(to left, #000000, gray);
            background-image: linear-gradient(to left, #000000, gray);">
            </div>
            <div style="
            text-align: center;
            margin-top: 20px;
            font-size: 25px;
            font-weight: 600;">
                Company
            </div>
        </div>
        <div>
            <div style="
                background: #F5F5F5;
                width: 100%;
                margin-top: 20px;
                overflow: hidden;">
                <div style="
                    color: black;
                    font-size: 18px;
                    letter-spacing: -0.36px;
                    /* text-align: center; */
                    font-weight: 700;
                    padding: 40px 30px 0px 30px;">
                    Template B - Fill up the form
                </div>
                <div style="
                background: #F5F5F5;
                overflow: hidden;
                padding: 20px 36px;">
                    <div style="
                    height: fit-content;">
                      Firstname: {{inputField}}
                    </div>
                    <br>
                    <div style="
                    height: fit-content;">
                      Lastname: {{inputField}}
                    </div>
                </div>
                <div style="
                             background: white;
                             padding-bottom: 20px;">
                    <div style="
                                 color: #8E8E93;
                                 font-size: 24px;
                                 font-weight: 600;
                                 line-height: 29px;
                                 text-align: center;
                                 padding-top: 20px;">
                        Company
                    </div>
                    <div style="
                                 color: #8E8E93;
                                 font-size: 18px;
                                 font-weight: 600;
                                 line-height: 22px;
                                 padding-top: 15px;
                                 text-align: center; ">
                        +91 12345 67890 | <a style="color: #000000;" href="mailto:info@company.com"> info@company.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
    `.replace(/{{inputField}}/g, '<input type="text>');
  }

  templatea() {
    return `
    <!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Template b</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body style="
min-width: 100%;
width: 100%;
height: 100%;
background-color: #FFFFFF;
padding: 0; margin: 0;">
    <div style="
    max-width: 700px;
    margin: auto;
    height: 100%;
    background-color: #FFFFFF;">
        <div>
            <div style="
            height: 5px;
            background-color: black;
            background-image: -webkit-linear-gradient(to left, #000000, gray);
            background-image: -moz-linear-gradient(to left, #000000, gray);
            background-image: -o-linear-gradient(to left, #000000, gray);
            background-image: -ms-linear-gradient(to left, #000000, gray);
            background-image: linear-gradient(to left, #000000, gray);">
            </div>
            <div style="
            text-align: center;
            margin-top: 20px;
            font-size: 25px;
            font-weight: 600;">
                Company
            </div>
        </div>
        <div>
            <div style="
                background: #F5F5F5;
                width: 100%;
                margin-top: 20px;
                overflow: hidden;">
                <div style="
                    color: black;
                    font-size: 18px;
                    letter-spacing: -0.36px;
                    /* text-align: center; */
                    font-weight: 700;
                    padding: 40px 30px 0px 30px;">
                    Template A - Fill up the form
                </div>
                <div style="
                background: #F5F5F5;
                overflow: hidden;
                padding: 20px 36px;">
                    <div style="
                    height: fit-content;">
                      Email: {{inputField}}
                    </div>
                    <br>
                    <div style="
                    height: fit-content;">
                      Place: {{inputField}}
                    </div>
                </div>
                <div style="
                             background: white;
                             padding-bottom: 20px;">
                    <div style="
                                 color: #8E8E93;
                                 font-size: 24px;
                                 font-weight: 600;
                                 line-height: 29px;
                                 text-align: center;
                                 padding-top: 20px;">
                        Company
                    </div>
                    <div style="
                                 color: #8E8E93;
                                 font-size: 18px;
                                 font-weight: 600;
                                 line-height: 22px;
                                 padding-top: 15px;
                                 text-align: center; ">
                        +91 12345 67890 | <a style="color: #000000;" href="mailto:info@company.com"> info@company.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
    `.replace(/{{inputField}}/g, '<input type="text>');
  }

}

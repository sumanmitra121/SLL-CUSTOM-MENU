import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-no-link',
  templateUrl: './no-link.component.html',
  styleUrls: ['./no-link.component.css']
})
export class NoLinkComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService) { }
  template_spinner="<img height='268' width='315' style='margin-top: -53%;' src='/assets/images/linkdoesnotexist.gif'>"
  bgspinner='rgba(247,172,66,1)'
  f_col='rgb'
  ngOnInit(): void {
    this.spinner.show()
  }

}

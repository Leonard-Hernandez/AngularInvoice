import { Component, Input } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'company-view',
  standalone: true,
  imports: [],
})
export class CompanyViewComponent {

  @Input() company:Company = {name:'', fiscalNumber:0};

}

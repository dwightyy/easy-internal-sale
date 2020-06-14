import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-campaign-showcase',
  templateUrl: './campaign-showcase.component.html',
  styleUrls: ['./campaign-showcase.component.sass'],
})
export class CampaignShowcaseComponent implements OnInit {
  constructor() {}

  campaigns = [
    new Campaign(
      'Primeira campanha',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa quis eros placerat maximus. Vivamus augue libero, dignissim a molestie non, luctus nec lacus. Suspendisse quis enim turpis. Ut ac luctus sem, ac lacinia justo.',
      moment('10/06/2020', 'DDMMYYYY'),
      ['Primeiro', 'pão']
    ),
    new Campaign(
      'Primeira campanha',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis lorem auctor consectetur semper. Vestibulum rhoncus mauris lorem, id ultricies nunc posuere nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque lacus dui, faucibus eu purus ac, eleifend vulputate elit. Fusce malesuada, elit vel. ',
      moment('10/06/2020', 'DDMMYYYY'),
      ['Primeiro', 'pão']
    ),
    new Campaign(
      'Primeira campanha',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum libero non nibh sodales commodo. In maximus iaculis felis ut luctus. In maximus sodales enim, in suscipit metus ullamcorper vitae. Donec mollis interdum placerat. Etiam. ',
      moment('10/06/2020', 'DDMMYYYY'),
      ['Primeiro', 'pão']
    ),
    new Campaign(
      'Primeira campanha',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac. ',
      moment('10/06/2020', 'DDMMYYYY'),
      ['Primeiro', 'pão']
    ),
  ];

  ngOnInit(): void {
    console.log(this.campaigns);
  }
}

class Campaign {
  constructor(
    public name: string,
    public description: string,
    public duration: moment.Moment,
    public tags: string[]
  ) {}

  resolveDuration() {
    return this.duration.days();
  }
}

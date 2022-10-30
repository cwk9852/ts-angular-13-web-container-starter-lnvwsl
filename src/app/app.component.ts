import { Component, VERSION } from '@angular/core';
import { TourWizardService, TourWizardStep } from 'ngx-tour-wizard';
//
import { KikProductStates } from './models';

export enum KikCsvKeys {
  country = 'country',
  global = 'global',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  kikCsvKeys: typeof KikCsvKeys = KikCsvKeys;
  stateOverrides: Record<KikCsvKeys, KikProductStates> = {
    country: void 0,
    global: void 0,
  };
  states: KikProductStates[] = [
    KikProductStates.unapproved,
    KikProductStates.check,
    KikProductStates.approved,
  ];

  constructor(private _tourWizardService: TourWizardService) {}

  ngOnInit(): void {
    this._tourWizardService.initialize([
      {
        anchorId: 'FOO_1',
        content: 'Some text for FOO 1',
        title: 'First',
      },
      {
        anchorId: 'FOO_2',
        content: 'Some other stuff for FOO 2',
        title: 'Second',
      },
      {
        anchorId: 'FOO_3',
        content: "Let's finish this up!!!",
        title: 'Third',
      },
    ] as TourWizardStep[]);
  }

  onStateOverrideChange($event: KikProductStates, csvKey: KikCsvKeys): void {
    this.stateOverrides[csvKey] = $event;
  }

  startTour(): void {
    this._tourWizardService.start();
  }
}

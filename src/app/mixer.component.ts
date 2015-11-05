import {Component,NgFor} from 'angular2/angular2';
// import {NavBarComponent} from './navbar.component';
import {SliderComponent} from './slider.component';
import {DatenturboComponent} from './datenturbo.component';
import {OptionService} from './option.service';

@Component({
  selector: 'mixer',
  template: `
    <div class="container">
    <div class="col-md-6">
    <div class="panel panel-primary">
      <div class="panel-heading">Mixer</div>
      <div class="panel-body">
        <slider *ng-for="#availableOption of availableOptions" [available-option]="availableOption" [datenturbo]="datenturbo"></slider>
        <datenturbo [enabled]="datenturbo" (toggle)="toggleDatenturbo()"></datenturbo>
      </div>
      </div>
    </div>
    </div>
    `,
  directives: [NgFor, SliderComponent, DatenturboComponent]
})
export class MixerComponent  {
  private availableOptions:Array<IAvailableOption> = [];
  private datenturbo:boolean = false;
  
  constructor(private optionservice:OptionService) {
    this.availableOptions = this.optionservice.getAvailableOptions();
  }
  
  toggleDatenturbo() {
    this.datenturbo = !this.datenturbo;
  }
  
}

import {Component,Input} from 'angular2/angular2';
import {OptionService} from './option.service';

@Component({
	selector: 'slider',
	template: `
	<div class="row" [hidden]="isShowSlider()">
		<div class="col-md-2">
			<label>{{availableOption.name}}</label>
		</div>
		<div class="col-md-8">
			<input type="range" min="0" max="3" step="1" [value]="getIndexForCurrentOption()" (input)="doUpdate($event.target.value)"></input>
		</div>
		<div class="col-md-2">
			<span>{{currentOption.value}}</span>
		</div>
	</div>
	`,
	directives: []
})
export class SliderComponent {
	@Input('available-option') availableOption:IAvailableOption;
	
	@Input('datenturbo') datenturbo:Boolean;
	
	private currentOption:IOption;
	
	constructor(private optionService: OptionService) {}
	
	onInit() {
		this.doUpdate(0);
	}
	
	getIndexForCurrentOption():number {
		let index = 0;
		for(let i=0; i<this.availableOption.values.length; i++) {
			
		}
		return index;
	}
	
	doUpdate(newvalue:number) {
		this.currentOption = this.optionService.getOptionForIndex(this.availableOption, newvalue);
	}
	
	isShowSlider():boolean {
		if(this.availableOption.datenturbo==null) {
			return false;
		} 
		if(this.availableOption.datenturbo == false && this.datenturbo == false ) {
			return false;
		}
		if(this.availableOption.datenturbo == true && this.datenturbo == true) {
			return false;
		}
		return true;
	}
} 

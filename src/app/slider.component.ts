import {Component,Input} from 'angular2/angular2';

@Component({
	selector: 'slider',
	template: `
	<div>
		<label>{{optionGroup.name}}</label>
		<input type="range" [value]="optionGroup.value" max="500" (change)="doUpdate($event.target.value)"></input>
		<span>{{optionGroup.value}}</span>
	</div>
	`,
	directives: []
})
export class SliderComponent {
	@Input()
	public optionGroup:IOptionGroup;
	
	doUpdate(newvalue:Number) {
		this.optionGroup.value = newvalue;
	}
} 
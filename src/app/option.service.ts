
export class OptionService {
	
	getAvailableOptions() : Array<IAvailableOption> {
		return [
				{name: 'Telefonieren', values:[0,100,300,500]},
    			{name: 'SMS', values:[0,100,300,500]},
				{name: 'Surfen', values:[0,100,300,500], datenturbo:false},
				{name: 'Surfen (Turbo)', values:[0,200,600,1000], datenturbo:true}
		];
	}
	
	getOptionForIndex(availableOption: IAvailableOption, index: Number) : IOption {
		return {
			name: availableOption.name,
			value: availableOption.values[index]
		};
	}
	
}

interface IAvailableOption {
	name:String,
	values:Array<Number>,
	datenturbo?:Boolean
}

interface IOption {
	name: String,
	value: Number
}
import {bootstrap} from 'angular2/angular2';
import {MixerComponent} from './mixer.component';
import {OptionService} from './option.service';

bootstrap(MixerComponent, [OptionService]);

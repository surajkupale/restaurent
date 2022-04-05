import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-test1',
    templateUrl: './test1.component.html'
    // styleUrls: ['']
})
export class test1Component{
    @Input() name: String = '';
    @Output() fullName = new EventEmitter();

    onFullName(){
        this.fullName.emit(this.name)
    }
}
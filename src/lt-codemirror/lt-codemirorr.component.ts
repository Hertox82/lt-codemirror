import { Component,
    OnDestroy,
    Input,
    Output,
    ViewChild,
    EventEmitter,
    forwardRef,
    AfterViewInit
  } from '@angular/core';
import {NG_VALUE_ACCESSOR } from '@angular/forms';
import * as CodeMirror from 'codemirror';
/**
 * CodeMirror component
 * Usage :
 * <lt-codemirror [(ngModel)]="data" [config]="{...}"></lt-codemirror>
 */
@Component({
selector: 'lt-codemirror',
providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LtCodemirrorComponent),
    multi: true
    }
],
template: `
    <textarea #host></textarea>
`,
styles: []
})
export class LtCodemirrorComponent implements AfterViewInit, OnDestroy {

@Input() config;
@Input() size: {w: string|number, h: string|number};
@Output() change = new EventEmitter();
@Output() focus = new EventEmitter();
@Output() blur = new EventEmitter();
@Output() cursorActivity = new EventEmitter();

@ViewChild('host') host;

@Output() instance = null;

val = '';

/**
 * Constructor
 */
constructor() { }

get value() {return this.val; }

@Input() set value(v) {
    if (v !== this.val) {
    this.val = v;
    this.onChange(v);
    }
}

/**
 * On component destroy
 */
ngOnDestroy() {

}

/**
 * On component view init
 */
ngAfterViewInit() {
    this.config = this.config || {};
    this.codemirrorInit(this.config,this.size);
}

/**
 * Initialize codemirror
 */
codemirrorInit(config, size) {
    this.instance = CodeMirror.fromTextArea(this.host.nativeElement, config);
    this.instance.setValue(this.val);

    this.instance.on('change', () => {
    this.updateValue(this.instance.getValue());
    });

    this.instance.on('focus', (instance, event) => {
    this.focus.emit({instance, event});
    });

    this.instance.on('cursorActivity', (instance) => {
    this.cursorActivity.emit({instance});
    });

    this.instance.on('blur', (instance, event) => {
    this.blur.emit({instance, event});
    });

    if (this.size != undefined) {
    this.instance.setSize(this.size.w, this.size.h);
    }
}

/**
 * Value update process
 */
updateValue(value) {
    this.value = value;
    this.onTouched();
    this.change.emit(value);
}

/**
 * Implements ControlValueAccessor
 */
writeValue(value) {
    this.val = value || '';
    if (this.instance) {
    this.instance.setValue(this.val);
    }
}
onChange(_) {}
onTouched() {}
registerOnChange(fn) { this.onChange = fn; }
registerOnTouched(fn) { this.onTouched = fn; }
}

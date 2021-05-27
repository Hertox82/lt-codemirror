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

@Input() config: any;
@Input() size: {w: string|number, h: string|number} | undefined;
// tslint:disable-next-line:no-output-native
@Output() change = new EventEmitter();
// tslint:disable-next-line:no-output-native
@Output() focus = new EventEmitter();
// tslint:disable-next-line:no-output-native
@Output() blur = new EventEmitter();
@Output() cursorActivity = new EventEmitter();

@ViewChild('host', {static: false}) host: any;

@Output() instance: any | undefined;

val = '';

/**
 * Constructor
 */
constructor() { }

get value(): any {return this.val; }

@Input() set value(v: any) {
    if (v !== this.val) {
    this.val = v;
    this.onChange(v);
    }
}

/**
 * On component destroy
 */
ngOnDestroy(): void {}

/**
 * On component view init
 */
ngAfterViewInit(): void {
    this.config = this.config || {};
    this.codemirrorInit(this.config,this.size);
}

/**
 * Initialize codemirror
 */
codemirrorInit(config: any, size: any): void {
    this.instance = CodeMirror.fromTextArea(this.host.nativeElement, config);
    this.instance.setValue(this.val);

    this.instance.on('change', () => {
    this.updateValue(this.instance.getValue());
    });

    this.instance.on('focus', (instance: any, event: any) => {
    this.focus.emit({instance, event});
    });

    this.instance.on('cursorActivity', (instance: any) => {
    this.cursorActivity.emit({instance});
    });

    this.instance.on('blur', (instance: any, event: any) => {
    this.blur.emit({instance, event});
    });

    if (this.size != undefined) {
    this.instance.setSize(this.size.w, this.size.h);
    }
}

/**
 * Value update process
 */
updateValue(value: any): void {
    this.value = value;
    this.onTouched();
    this.change.emit(value);
}

/**
 * Implements ControlValueAccessor
 */
writeValue(value: any): void {
    this.val = value || '';
    if (this.instance) {
    this.instance.setValue(this.val);
    }
}
onChange(v: any): void {}
onTouched(): void {}
registerOnChange(fn: any): void { this.onChange = fn; }
registerOnTouched(fn: any): void { this.onTouched = fn; }
}

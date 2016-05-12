import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'myuppercase' })
export class MyUppercasePipe implements PipeTransform {
    transform(value: string) {
        return value.toUpperCase();
    }
}
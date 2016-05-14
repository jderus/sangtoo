import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'sangSearch' })

//export default class?
export class SangSearchPipe implements PipeTransform {
    transform(value: any, args:any[]): any {
        // it isnt clear why args is never coming in as an array. What? 
        // let [filter] = args;

        if (args && Array.isArray(value)) {
            let filterKeys = Object.keys(args);
            return value.filter(item =>
                filterKeys.reduce((memo, keyName) =>
                    !args[keyName] || (memo && String(item[keyName]).indexOf(args[keyName]) != -1), true ));
                    // memo && item[keyName] === args[keyName], true));
        } 
        else { return value; }
    }
}
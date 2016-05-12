import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'sangSearch' })
// export class SangSearchPipe implements PipeTransform {
//     transform(value, [term]) {
//         return value.filter((item)=> item.startsWith(term));
//     }
// }

//export default class?
export class SangSearchPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        let filter = args[0];

        if (filter && Array.isArray(value)) {
            let filterKeys = Object.keys(filter);
            return value.filter(item =>
                filterKeys.reduce((memo, keyName) =>
                    memo && item[keyName] === filter[keyName], true));
        } 
        else { return value; }
    }
}
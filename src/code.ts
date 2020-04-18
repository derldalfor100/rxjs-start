import { from } from "rxjs/Observable/from";
import 'rxjs/add/operator/pluck';

from([
    { first: 'Gary', last: 'Simon', age: '34' },
    { first: 'Jane', last: 'Simon', age: '34' },
    { first: 'John', last: 'Simon', age: '34' }
]).pluck('first')
    .subscribe((x: any) => addItem(x));

function addItem(val: any) {

    const node = document.createElement("li");
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.querySelector('#output').appendChild(node);
}
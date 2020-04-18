import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

Observable.create((observer: any) => {
    observer.next('Hey guys!');
}).map((val: any) => val.toUpperCase())
    .subscribe((x: any) => addItem(x));

function addItem(val: any) {

    const node = document.createElement("li");
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.querySelector('#output').appendChild(node);
}
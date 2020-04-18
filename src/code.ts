import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import 'rxjs/add/operator/skipUntil';

const observable1 = Observable.create((data: any) => {
    let i = 1;
    setInterval(() => {
        data.next(i++);
    }, 1000);
});

const observable2 = new Subject();

setTimeout(() => {
    observable2.next('Hey!');
}, 3000);

const newObs = observable1.skipUntil(observable2);

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {

    const node = document.createElement("li");
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.querySelector('#output').appendChild(node);
}
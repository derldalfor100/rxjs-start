import { ReplaySubject } from "rxjs/ReplaySubject";

var subject = new ReplaySubject(30, 200);

subject.subscribe(
    data => addItem(`Observer 1: ${data}`),
    err => addItem(err),
    () => addItem(`Observer 1 Completed`)
);

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    const observer2 = subject.subscribe(
        data => addItem(`Observer 2: ${data}`)
    );
}, 500);

function addItem(val: any) {

    const node = document.createElement("li");
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.querySelector('#output').appendChild(node);
}
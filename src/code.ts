import { BehaviorSubject } from "rxjs/BehaviorSubject";

var subject = new BehaviorSubject('First');

subject.subscribe(
    data => addItem(`Observer 1: ${data}`),
    err => addItem(err),
    () => addItem(`Observer 1 Completed`)
);

subject.next('The first thing has been sent');
subject.next('...Observer 2 is about to subscribe...');

const observer2 = subject.subscribe(
    data => addItem(`Observer 2: ${data}`)
);

subject.next('The second thing has been sent');

subject.next('A third thing has been sent');

observer2.unsubscribe();

subject.next('The final thing has been sent');

function addItem(val: any) {

    const node = document.createElement("li");
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.querySelector('#output').appendChild(node);
}
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/share';

const observable = Observable.create((observer: any) => {
    try {
        observer.next('Hey guys!');
        observer.next('How are you?');
        setInterval(() => {
            observer.next('I am good');
        }, 2000);
    } catch (err) {
        observer.error(err);
    }
}).share();

const observer = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);

setTimeout(() => {
    const observer2 = observable.subscribe(
        (x: any) => addItem(`Subscriber2: ${x}`)
    );
}, 1000);

function addItem(val: any) {

    const node = document.createElement("li");
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.querySelector('#output').appendChild(node);
}
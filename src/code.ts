import { Observable } from "rxjs/Observable";

const observableLog = Observable.create((observer: any) => {
    try {
        observer.next('Hey guys!');
        observer.next('How are you?');
        observer.complete();
        observer.next('This will not send');
    } catch (err) {
        observer.error(err);
    }
});

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
});

observableLog.subscribe(
    (x: any) => console.warn(x),
    (error: any) => console.error(error),
    () => console.info('Completed')
);

const observer = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);

const observer2 = observable.subscribe(
    (x: any) => addItem(x)
);

observer.add(observer2);

setTimeout(() => {
    observer.unsubscribe();
}, 6001);

function addItem(val: any) {

    const node = document.createElement("li");
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.querySelector('#output').appendChild(node);
}
import {Observable, of} from 'rxjs';

export const name$ = of('md', 'adil', 'alam');

export function storeDataOnServer(data: string): Observable<string> {
    return new Observable(subscriber => {
        setTimeout(() => {
            subscriber.next(`saved successfully : ${data}`);
            subscriber.complete();
        }, 2000);
    })
}

export function storeDataOnServerError(data: string): Observable<string> {
    return new Observable(subscriber => {
        setTimeout(() => {
            subscriber.error(new Error("Failure"));
        }, 2000);
    })
}
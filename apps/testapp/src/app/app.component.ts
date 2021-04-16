import { Component, ComponentFactoryResolver, Type } from '@angular/core';
import { BarComponent, FooComponent } from '@playground/awesome';

@Component({
    selector: 'playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    fooRef?: Promise<Type<FooComponent>>;
    barRef?: Promise<Type<BarComponent>>;

    constructor(private resolver: ComponentFactoryResolver) {}

    createFoo() {
        if (!this.fooRef) {
            this.fooRef = import(
                /* webpackChunkName: 'foo' */
                '@playground/awesome/foo/foo.component'
            ).then(({ FooComponent }) => FooComponent);
        }
    }

    createBar() {
        if (!this.barRef) {
            this.barRef = import(
                /* webpackChunkName: 'bar' */ '@playground/awesome/bar/bar.component'
            ).then(({ BarComponent }) => BarComponent);
        }
    }
}

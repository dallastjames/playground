import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'playground-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent {}

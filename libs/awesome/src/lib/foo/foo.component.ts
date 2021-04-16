import { CommonModule } from '@angular/common';
import {
    Component,
    ChangeDetectionStrategy,
    Input,
    Type,
    NgModule
} from '@angular/core';
import { BarComponent } from '../bar/bar.component';

@Component({
    selector: 'playground-foo',
    templateUrl: './foo.component.html',
    styleUrls: ['./foo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent {
    @Input()
    public label = 'button';

    barRef?: Promise<Type<BarComponent>>;

    createBar() {
        this.barRef = import('../bar/bar.component').then(
            ({ BarComponent }) => {
                return BarComponent;
            }
        );
    }
}

@NgModule({
    declarations: [FooComponent],
    imports: [CommonModule]
})
class FooModule {}

import { NgModule } from '@angular/core';
// https://material.angular.io/guide/mdc-migration
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';//Style changes, API changes
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';//Style changes, changes to change detection behavior
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';//Style changes only
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';//Style changes, API changes
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';//Style changes, API changes
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';//Style changes only
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';//Complete rewrite
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar'; //Style changes, API changes
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs'; //Style changes, API changes
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips'; //Complete rewrite
import { AriaLabelDirective } from './aria-label.directive';

@NgModule({
    declarations: [AriaLabelDirective],
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatInputModule,
        MatSidenavModule,
        MatTabsModule,
        MatListModule,
        MatCardModule,
        MatButtonToggleModule,
        MatChipsModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatInputModule,
        MatSidenavModule,
        MatTabsModule,
        MatListModule,
        MatCardModule,
        MatButtonToggleModule,
        MatChipsModule
    ]
})
export class MaterialModule { }

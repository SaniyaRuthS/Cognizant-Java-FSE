import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface ComponentWithForm {
  isFormDirty(): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<ComponentWithForm> {
  canDeactivate(component: ComponentWithForm): boolean {
    if (component && component.isFormDirty && component.isFormDirty()) {
      return window.confirm('You have unsaved changes. Leave?');
    }
    return true;
  }
}

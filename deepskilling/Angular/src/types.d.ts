declare module '@angular/core' {
  export interface OnInit {
    ngOnInit(): void;
  }
  export interface OnDestroy {
    ngOnDestroy(): void;
  }
  export interface OnChanges {
    ngOnChanges(changes: any): void;
  }
  export interface PipeTransform {
    transform(value: any, ...args: any[]): any;
  }
  export class SimpleChange {
    previousValue: any;
    currentValue: any;
    firstChange: boolean;
    constructor(previousValue: any, currentValue: any, firstChange: boolean);
    isFirstChange(): boolean;
  }
  export type SimpleChanges = { [key: string]: SimpleChange };
  export class ElementRef<T = any> {
    nativeElement: T;
    constructor(nativeElement: T);
  }
  export class EventEmitter<T = any> {
    emit(value?: T): void;
    subscribe(generatorOrNext?: any, error?: any, complete?: any): any;
  }
  export function Component(options: any): any;
  export function Directive(options: any): any;
  export function Pipe(options: any): any;
  export function Injectable(options?: any): any;
  export function Input(bindingPropertyName?: string): any;
  export function Output(bindingPropertyName?: string): any;
  export function HostListener(eventName: string, args?: string[]): any;
}

declare module '@angular/common' {
  export class CommonModule {}
}

declare module '@angular/common/http' {
  export class HttpClient {
    get<T>(url: string, options?: any): any;
    post<T>(url: string, body: any, options?: any): any;
    put<T>(url: string, body: any, options?: any): any;
    delete<T>(url: string, options?: any): any;
  }
  export interface HttpInterceptor {
    intercept(req: any, next: any): any;
  }
  export class HttpRequest<T = any> {
    clone(update?: any): HttpRequest<T>;
  }
  export class HttpHandler {
    handle(req: any): any;
  }
  export class HttpErrorResponse {
    status: number;
    message: string;
    error: any;
  }
  export class HttpClientModule {}
  export const HTTP_INTERCEPTORS: any;
}

declare module '@angular/forms' {
  export class NgForm {
    value: any;
    valid: boolean;
    invalid: boolean;
    resetForm(value?: any): void;
  }
  export class FormGroup {
    value: any;
    valid: boolean;
    invalid: boolean;
    dirty: boolean;
    touched: boolean;
    errors: any;
    get(path: string): any;
    getRawValue(): any;
  }
  export class FormArray {
    controls: any[];
    push(control: any): void;
    removeAt(index: number): void;
  }
  export class FormBuilder {
    group(controlsConfig: any, options?: any): FormGroup;
    array(controlsConfig: any[], options?: any): FormArray;
    control(formState: any, validator?: any, asyncValidator?: any): any;
  }
  export class Validators {
    static required(control: any): any;
    static requiredTrue(control: any): any;
    static minLength(minLength: number): any;
    static email(control: any): any;
  }
  export interface AbstractControl {
    value: any;
    errors: any;
  }
  export type ValidationErrors = { [key: string]: any };
  export class FormsModule {}
  export class ReactiveFormsModule {}
}

declare module '@angular/router' {
  export interface CanActivate {
    canActivate(route?: any, state?: any): any;
  }
  export interface CanDeactivate<T = any> {
    canDeactivate(component: T, currentRoute?: any, currentState?: any, nextState?: any): any;
  }
  export class Router {
    navigate(commands: any[], extras?: any): Promise<boolean>;
  }
  export class ActivatedRoute {
    snapshot: any;
    paramMap: any;
    queryParamMap: any;
  }
  export type UrlTree = any;
  export class RouterModule {
    static forRoot(routes: any[], config?: any): any;
    static forChild(routes: any[]): any;
  }
  export type Routes = any[];
}

declare module '@angular/platform-browser' {
  export class BrowserModule {}
  export class By {
    static css(selector: string): any;
  }
}

declare module '@angular/platform-browser-dynamic' {
  export function platformBrowserDynamic(): any;
}

declare module '@angular/core/testing' {
  export class TestBed {
    static configureTestingModule(moduleDef: any): TestBed;
    static createComponent<T>(component: any): ComponentFixture<T>;
    static inject<T>(token: any): T;
  }
  export interface ComponentFixture<T> {
    componentInstance: T;
    nativeElement: any;
    debugElement: any;
    detectChanges(): void;
  }
}

declare module '@angular/router/testing' {
  export class RouterTestingModule {}
}

declare module '@angular/common/http/testing' {
  export class HttpClientTestingModule {}
  export class HttpTestingController {
    expectOne(url: string): any;
    verify(): void;
  }
}

declare module '@ngrx/store' {
  export class Store<T = any> {
    select(selector: any): any;
    dispatch(action: any): void;
  }
  export function createAction(type: string, config?: any): any;
  export function props<T>(): any;
  export function createReducer(initialState: any, ...ons: any[]): any;
  export function on(action: any, reducer: any): any;
  export function createFeatureSelector<T>(featureName: string): any;
  export function createSelector(...args: any[]): any;
  export class StoreModule {
    static forRoot(reducers: any, config?: any): any;
    static forFeature(featureName: string, reducer: any): any;
  }
}

declare module '@ngrx/effects' {
  export class Actions {
    pipe(...args: any[]): any;
  }
  export function createEffect(effectFn: any): any;
  export function ofType(...allowedTypes: any[]): any;
  export class EffectsModule {
    static forRoot(effects: any[]): any;
  }
}

declare module '@ngrx/entity' {
  export function createEntityAdapter(options?: any): any;
}

declare module '@ngrx/store-devtools' {
  export class StoreDevtoolsModule {
    static instrument(options?: any): any;
  }
}

declare module '@ngrx/store/testing' {
  export function provideMockStore(config?: any): any;
  export class MockStore {
    setState(state: any): void;
  }
}

declare module 'rxjs' {
  export class Observable<T = any> {
    subscribe(observerOrNext?: any, error?: any, complete?: any): any;
    pipe(...operators: any[]): Observable<any>;
  }
  export class BehaviorSubject<T> extends Observable<T> {
    constructor(initialValue: T);
    next(value: T): void;
    asObservable(): Observable<T>;
  }
  export function of<T>(...args: T[]): Observable<T>;
  export function throwError(errorFactory: any): Observable<never>;
}

declare module 'rxjs/operators' {
  export function map(project: any): any;
  export function tap(next: any): any;
  export function catchError(selector: any): any;
  export function retry(count: number): any;
  export function switchMap(project: any): any;
  export function finalize(callback: () => void): any;
}

declare var describe: any;
declare var beforeEach: any;
declare var afterEach: any;
declare var it: any;
declare var expect: any;
declare var spyOn: any;
declare var fail: any;
declare var window: any;

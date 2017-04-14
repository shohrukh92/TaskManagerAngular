import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent (inline template)', () => {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            declarations: [ AppComponent ], // declare the test component
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance; // AppComponent test instance
    });

    it('should display original appTitle (Task Manager)', () => {
        // query for the appTitle by CSS element selector
        let de = fixture.debugElement.query(By.css('a.navbar-brand'));
        let el = de.nativeElement;
        expect(el.textContent).toContain(comp.appTitle);
    });
    
    it('should count number of links in router (3)', () => {
        let linkItems = fixture.debugElement.queryAll(By.css('ul.nav>li'));
        expect(linkItems.length).toEqual(3);
    });
});

import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { VerificarIdadeComponent } from './verificar-idade.component';

describe('VerificarIdadeComponent', () => {
  let component: VerificarIdadeComponent;
  let fixture: ComponentFixture<VerificarIdadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerificarIdadeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('maior de idade', () => {
    const $event = {
      target: {
        value: 18,
      },
    };

    component.valorDigitado($event);

    expect(component.msg).toBe('Maior de Idade');
  });

  it('maior de menor', () => {
    const $event = {
      target: {
        value: 17,
      },
    };

    component.valorDigitado($event);
    expect(component.msg).toBe('Menor de Idade');
  });

  it('apagarMsg', () => {
    component.apagarMsg(0);
    expect(component.msg).toBe('');
  });

  it('chamaLogger false method alert', () => {
    const alertSpy = spyOn(window, 'alert');
    component.chamaLogger(false);
    expect(alertSpy).toHaveBeenCalledTimes(2);
  });

  it('chamaLogger true method Logger', () => {
    const LoggerSpy = spyOn(component, 'logger');
    component.chamaLogger(true);
    expect(LoggerSpy).toHaveBeenCalledTimes(5);
  });

  // resolvendo setTimeout com done e uso do setTimeout
  it('chamaLogger true method msgTime Segundo', (done) => {
    setTimeout(function() {
      component.msgTime(1);
      expect(component.timeMsg).toBe('Segundo');
      done();
    }, 1100);
  });

  // resolvendo setTimeout com fakeAsync e tick
  it('chamaLogger true method msgTime Terceiro', fakeAsync(() => {
      component.msgTime(0);
      tick(1000);
      expect(component.timeMsg).toBe('Terceiro');
  }));

  


});


import {CalculatorService} from './calculator.service';
import {LoggerService} from './logger.service';
import {TestBed} from '@angular/core/testing';


describe('CalculatorService', () => {

  let calculator: CalculatorService,
    loggerSpy: any;

  beforeEach(()=> {

    console.log("Calling beforeEach");

    loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService, // real instance of the service
        {provide: LoggerService, useValue: loggerSpy} // mock instance of the LoggerService
      ]
    });

    calculator = TestBed.inject(CalculatorService); // singleton instance of the CalculatorService

  });

  it('should add two numbers', () => {

    console.log("add test");

    const result = calculator.add(2, 2);

    expect(result).toBe(4);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  });


  it('should subtract two numbers', () => {

    console.log("subtract test");

    const result = calculator.subtract(2, 2);

    expect(result).toBe(0, "unexpected subtraction result");

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  });

});

import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email=control.value;
  //   console.log(email)

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //     )

  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email=control.value;
    const httpCallObservable = new Observable<ValidationErrors|null>((subcriber)=>{
      if(email === 'argueta03@hotmail.com'){
        subcriber.next({emailTaken: true})
        subcriber.complete();
        return;
      }

      subcriber.next(null);
      subcriber.complete();

    }).pipe(
      delay(2000)
    );

    return httpCallObservable;

  }


}

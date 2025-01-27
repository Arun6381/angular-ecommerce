import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  
} from 'rxjs/operators';
import { AdminDashboardService } from '../../services/admin-dashboard.service';
import * as AddToCartActions from './admin-dash.action';

@Injectable()
export class AdminDashEffects{
  constructor(private action$:Actions,private adminDashboardService:AdminDashboardService){}

//   loadAddToCart$=createEffect(()=>
  
//   this.action$.pipe(
//     ofType(AddToCartActions.loadAddToCart),
//     exhaustMap(()=>
//     this.adminDashboardService.getAddToCart().pipe(
//        map((data) => AddToCartActions.loadAddToCartSuccess({ data })),
// ))
//   ))

}




// @Injectable()
// export class AdminDashEffects {
//   constructor(
//   private action$:Actions,
//     private adminDashboardService: AdminDashboardService
//   ) {
   
//   }
//   loadAddToCart$ = createEffect(() => 
//      this.action$.pipe(
//       ofType(AddToCartActions.loadAddToCart),
//       mergeMap(() =>
//         this.adminDashboardService.getAddToCart().pipe(
//           map((data) => AddToCartActions.loadAddToCartSuccess({ data })),
//           catchError((error) =>
//             of(AddToCartActions.loadAddToCartFailure({ error: error.message }))
//           )
//         )
//       )
//     )
//   );

  // loadAddToCart$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(AddToCartActions.loadAddToCart),
  //       mergeMap(() =>
  //         this.adminDashboardService.getAddToCart().pipe(
  //           map((data) => AddToCartActions.loadAddToCartSuccess({ data })),
  //           catchError((error) =>
  //             of(AddToCartActions.loadAddToCartFailure({ error: error.message }))
  //           )
  //         )
  //       )
  //     );
  //   });
  // loadAddToCarts$ = createEffect(() => {
  //   return this.action$.pipe(
  //     ofType(AddToCartActions.loadAddToCart),
  //     tap(() => console.log('Effect Triggered: loadAddToCart')),
  //     mergeMap(() =>
  //       this.adminDashboardService.getAddToCart().pipe(
  //         map((data) => {
  //           console.log('Effect Success Data:', data);
  //           return AddToCartActions.loadAddToCartSuccess({ data });
  //         }),
  //         catchError((error) => {
  //           console.error('Effect Error:', error);
  //           return of(
  //             AddToCartActions.loadAddToCartFailure({ error: error.message })
  //           );
  //         })
  //       )
  //     )
  //   );
  // });
// }

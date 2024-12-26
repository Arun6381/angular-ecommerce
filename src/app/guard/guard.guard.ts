import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 

  const roles = localStorage.getItem('role'); 
  const token = localStorage.getItem('token'); 

  if (token && roles) {
    const userRoles = JSON.parse(roles);
    const requiredRoles = route.data?.['roles'] as string[]; 
    if (requiredRoles?.some(role => userRoles.includes(role))) {
      return true; 
    } else {
      router.navigate(['/login']); 
      return false; 
    }
  } else {
    router.navigate(['/login']); 
    return false;
  }
};

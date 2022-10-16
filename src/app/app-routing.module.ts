import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lazatech-courses',
    loadChildren: () => import('./pages/lazatech-courses/lazatech-courses.module').then( m => m.LazatechCoursesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-token-balance',
    loadChildren: () => import('./pages/my-token-balance/my-token-balance.module').then( m => m.MyTokenBalancePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz/quiz.module').then( m => m.QuizPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'store',
    loadChildren: () => import('./pages/store/store.module').then( m => m.StorePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'course1',
    loadChildren: () => import('./pages/course1/course1.module').then( m => m.Course1PageModule)
  },
  {
    path: 'course2',
    loadChildren: () => import('./pages/course2/course2.module').then( m => m.Course2PageModule)
  },
  {
    path: 'course3',
    loadChildren: () => import('./pages/course3/course3.module').then( m => m.Course3PageModule)
  },
  {
    path: 'course4',
    loadChildren: () => import('./pages/course4/course4.module').then( m => m.Course4PageModule)
  },
  {
    path: 'course5',
    loadChildren: () => import('./pages/course5/course5.module').then( m => m.Course5PageModule)
  },
  {
    path: 'course6',
    loadChildren: () => import('./pages/course6/course6.module').then( m => m.Course6PageModule)
  },
  {
    path: 'course7',
    loadChildren: () => import('./pages/course7/course7.module').then( m => m.Course7PageModule)
  },
  {
    path: 'course8',
    loadChildren: () => import('./pages/course8/course8.module').then( m => m.Course8PageModule)
  },
  {
    path: 'course9',
    loadChildren: () => import('./pages/course9/course9.module').then( m => m.Course9PageModule)
  },
  {
    path: 'course10',
    loadChildren: () => import('./pages/course10/course10.module').then( m => m.Course10PageModule)
  },
  {
    path: 'course11',
    loadChildren: () => import('./pages/course11/course11.module').then( m => m.Course11PageModule)
  },
  {
    path: 'course12',
    loadChildren: () => import('./pages/course12/course12.module').then( m => m.Course12PageModule)
  },
  {
    path: 'course13',
    loadChildren: () => import('./pages/course13/course13.module').then( m => m.Course13PageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

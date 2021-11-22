import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './features/login/pages/login/login.page';
import { PostModule } from './features/posts/posts.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  declarations: [],
  imports:
    [CommonModule,
      PostModule,
      RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

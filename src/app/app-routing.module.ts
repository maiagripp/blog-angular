import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { CreatePostComponent } from './features/posts/pages/create-post/create-post.component';
import { PostDetailsComponent } from './features/posts/pages/post-details/post-details.component';
import { PostPageComponent } from './features/posts/pages/post-page/post-page.component';
import { PostsModule } from './features/posts/posts.module';
import { GuardsGuard } from './shared/guards/guards.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'post-page' },
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'create-post', component: CreatePostComponent, canActivate: [GuardsGuard] },
  { path: 'post-page', component: PostPageComponent}
];

@NgModule({
  imports:
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

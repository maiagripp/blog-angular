import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PostComponent,
    PostsListComponent,
    CreatePostComponent,
    PostDetailsComponent,
    PostPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }

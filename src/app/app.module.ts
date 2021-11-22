import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { PostsModule } from './features/posts/posts.module'
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module'
import { LOCALE_ID } from '@angular/core'
import localePt from '@angular/common/pt'
import { registerLocaleData } from '@angular/common';
import { PostDetailsComponent } from './features/posts/components/post-details/post-details.component';
import { PostListComponent } from './features/posts/components/post-list/post-list.component';
import { PostsPageComponent } from './features/posts/pages/posts/posts.page';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostListComponent,
    PostsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PostsModule,
    LoginModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './public/components/aboutpage/aboutpage.component';
import { ContactpageComponent } from './public/components/contactpage/contactpage.component';
import { HomepageComponent } from './public/components/homepage/homepage.component';
import { LoginpageComponent } from './public/components/loginpage/loginpage.component';
import { ReportissuepageComponent } from './public/components/report-issue-page/reportissuepage.component';
import { SignupComponent } from './public/components/signup/signup.component';

/** Use whatever routing is here in the public-routing module if we end up not use this base level one. */
const routes: Routes = [
  { path: 'home',
    component: HomepageComponent
  },

  {
    path:'contact-us',
    component: ContactpageComponent
  },

  {
    path:'login',
    component: LoginpageComponent
  },

  {
    path:'about',
    component: AboutpageComponent
  },

  {
    path:'report-issue',
    component: ReportissuepageComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

/** Below statement allows us to add a variable to not have to import components into the app.module.ts file - Anthony */
export const routingComponents = [ HomepageComponent, ContactpageComponent, LoginpageComponent, AboutpageComponent, SignupComponent, ReportissuepageComponent ]
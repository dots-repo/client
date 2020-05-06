import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ErrorpageComponent } from "./errorpage/errorpage.component";

import {
  SocialLoginModule,
  AuthServiceConfig,
  LoginOpt,
} from "angularx-social-login";

import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angularx-social-login";

const fbLoginOptions: LoginOpt = {
  scope:
    "pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages",
  return_scopes: true,
  enable_profile_selector: true,
}; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11

const googleLoginOptions: LoginOpt = {
  scope: "profile email",
};

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "1017141930490-47e1u6484cls0o66hinlnn7ievgmhotu.apps.googleusercontent.com",
      googleLoginOptions
    ),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2528811567448589", fbLoginOptions),
  },
]);

export function provideConfig() {
  return config;
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    FontAwesomeModule,
    SocialLoginModule,
  ],
  declarations: [AppComponent, ErrorpageComponent],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

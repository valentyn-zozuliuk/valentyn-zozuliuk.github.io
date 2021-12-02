import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthReverseGuard } from './auth-reverse.guard';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    {
        path: '', component: AuthComponent, canActivate: [AuthReverseGuard],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'privacy-policy', component: PrivacyPolicyComponent }
        ]
    }
];

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        ForgotPasswordComponent,
        AuthComponent,
        PrivacyPolicyComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FontAwesomeModule,
        SharedModule
    ]
})
export class AuthModule { }

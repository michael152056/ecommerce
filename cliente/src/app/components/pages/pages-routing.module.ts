import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TimeGuardGuard } from 'src/app/guards/time-guard.guard';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'about', component: AboutUsComponent,canActivate: [TimeGuardGuard], },
      { path: 'cart', component: CartComponent ,canActivate: [TimeGuardGuard] },
      { path: 'checkout', component: CheckoutComponent,canActivate: [TimeGuardGuard] },
      { path: 'faq', component: FaqComponent,canActivate: [TimeGuardGuard] },
      { path: 'contact', component: ContactComponent,canActivate: [TimeGuardGuard] },
      { path: 'wishlist', component: WishlistComponent,canActivate: [TimeGuardGuard] },
      { path: 'compare', component: CompareComponent ,canActivate: [TimeGuardGuard]},
      { path: 'my-account', component: MyAccountComponent ,canActivate: [TimeGuardGuard]},
      { path: 'error', component: ErrorPageComponent ,canActivate: [TimeGuardGuard]},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

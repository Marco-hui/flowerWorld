import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule,enableProdMode } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { ElModule } from 'element-angular'
enableProdMode();
// router
import {RootRouter} from './router/router'

// services
import {HttpclientService} from './services/httpclient.service'
import {CommonService} from './services/common.service'

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CarComponent } from './components/car/car.component';
import { MineComponent } from './components/mine/mine.component';
import { LoginComponent } from './components/login/login.component';
import { MheadComponent } from './components/mine/mhead/mhead.component';
import { MmainComponent } from './components/mine/mmain/mmain.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailComponent } from './components/detail/detail.component';
import { ItemsComponent } from './components/items/items/items.component';
import { LccategoriesComponent } from './components/items/lccategories/lccategories.component';
import { ListComponent } from './components/items/list/list.component';
import { SearchComponent } from './components/items/search/search.component';
import { SendinfoComponent } from './components/car/sendinfo/sendinfo.component';
import { OrdermanComponent } from './components/car/sendinfo/orderman/orderman.component';
import { SelectAddressComponent } from './components/car/sendinfo/select-address/select-address.component';
import { EditConsigneeComponent } from './components/car/sendinfo/select-address/edit-consignee/edit-consignee.component';
import { PaymentComponent } from './components/car/payment/payment.component';
import { CustomerComponent } from './components/detail/customer/customer.component';
import { MuserComponent } from './components/mine/muser/muser.component';
import { MmoneyComponent } from './components/mine/muser/mmoney/mmoney.component';
import { MpswComponent } from './components/mine/muser/mpsw/mpsw.component';
import { MaddressComponent } from './components/mine/muser/maddress/maddress.component';
import { MmsgComponent } from './components/mine/muser/mmsg/mmsg.component';
import { MnewaddressComponent } from './components/mine/muser/mnewaddress/mnewaddress.component';
import { McollectComponent } from './components/mine/mcollect/mcollect.component';
import { MallorderComponent } from './components/mine/mallorder/mallorder.component';
import { MpayorderComponent } from './components/mine/mpayorder/mpayorder.component';

import { XiaokeDirective } from './directives/xiaoke/xiaoke.directive';
import { ImgloadDirective } from './directives/xiaoke/imgload.directive';
import { ScrollDirective } from './directives/xiaoke/scroll.directive';
import { LazyDirective } from './components/detail/directve/lazy.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SpinnerComponent,
    CarComponent,
    MineComponent,
    LoginComponent,
    MheadComponent,
    MmainComponent,
    RegisterComponent,
    DetailComponent,
    SendinfoComponent,
    OrdermanComponent,
    SelectAddressComponent,
    EditConsigneeComponent,
    PaymentComponent,
    CustomerComponent,
    ItemsComponent,
    LccategoriesComponent,
    ListComponent,
    SearchComponent,
    MuserComponent,
    MmoneyComponent,
    MpswComponent,
    MaddressComponent,
    MmsgComponent,
    MnewaddressComponent,
    McollectComponent,
    MallorderComponent,
    MpayorderComponent,

    XiaokeDirective,
    ImgloadDirective,
    ScrollDirective,
    LazyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ElModule.forRoot(),
    RootRouter
  ],
  providers: [
    HttpclientService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

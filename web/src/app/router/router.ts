import {RouterModule,Routes} from '@angular/router'


import {HomeComponent} from '../components/home/home.component'
// Marco添加
import {CarComponent} from '../components/car/car.component'
import {SendinfoComponent} from '../components/car/sendinfo/sendinfo.component'
import {SelectAddressComponent} from '../components/car/sendinfo/select-address/select-address.component'
import {PaymentComponent} from '../components/car/payment/payment.component'

// xiaoke添加
import { ItemsComponent } from '../components/items/items/items.component'
import { ListComponent } from '../components/items/list/list.component'
import {SearchComponent} from '../components/items/search/search.component'
// ct添加
import {DetailComponent} from '../components/detail/detail.component'
import { CustomerComponent } from "../components/detail/customer/customer.component"
// qjy添加
import {MineComponent} from '../components/mine/mine.component'
import {LoginComponent} from '../components/login/login.component'
import {RegisterComponent} from '../components/register/register.component'
import {MuserComponent} from '../components/mine/muser/muser.component'
import {MmoneyComponent} from '../components/mine/muser/mmoney/mmoney.component'
import {MpswComponent} from '../components/mine/muser/mpsw/mpsw.component'
import {MmsgComponent} from '../components/mine/muser/mmsg/mmsg.component'
import {MaddressComponent} from '../components/mine/muser/maddress/maddress.component'
import {McollectComponent} from '../components/mine/mcollect/mcollect.component'
import {MnewaddressComponent} from '../components/mine/muser/mnewaddress/mnewaddress.component'
import {MallorderComponent} from '../components/mine/mallorder/mallorder.component'
import {MpayorderComponent} from '../components/mine/mpayorder/mpayorder.component'


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
	{ path: 'items', component: ItemsComponent },
	{path: 'list/:kind', component: ListComponent},
	{path: 'search/:keyword', component: SearchComponent},
    {path: 'car',component: CarComponent,children:[
        {path:'sendinfo',component:SendinfoComponent},
        {path:'selAddress',component:SelectAddressComponent},
        {path:'Mpayment/:total',component:PaymentComponent}
    ]},
    {path:'customer/:id',component:CustomerComponent},
	{path: 'detail/:id', component: DetailComponent},

    {path:'login',component: LoginComponent},
    {path:'register',component: RegisterComponent},

    {path:'mine',component: MineComponent,},
    {path:'mine/muser',component: MuserComponent},
    {path:'mine/muser/mmoney',component: MmoneyComponent},
    {path:'mine/muser/mpsw',component: MpswComponent},
    {path:'mine/muser/maddress',component: MaddressComponent},
    {path:'mine/muser/mmsg',component: MmsgComponent},
    {path:'mine/muser/maddress/mnewaddress',component: MnewaddressComponent},
    {path:'mine/mcollect',component: McollectComponent},
    {path:'mine/mallorder',component: MallorderComponent},
    {path:'mine/mpayorder',component: MpayorderComponent}
] 

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    {enableTracing:false}
)
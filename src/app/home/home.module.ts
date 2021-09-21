import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HomePageRoutingModule } from './home-routing.module';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WishListModule } from '../wish-list/wish-list.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, WishListModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}

import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { SizeModule } from './size/size.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { AtGuard } from './common/guards';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ProductModule,
    CartModule,
    SizeModule,
    TypeOrmModule.forRoot(config),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    AppService,
  ],
})
export class AppModule {}

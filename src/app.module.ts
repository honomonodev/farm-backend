import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AuthModule } from './modules/auth/auth.module';
import { FarmModule } from './modules/farm/farm.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [
    AuthModule,
    FarmModule,
    UserModule
  ],
  
})
export class AppModule {}

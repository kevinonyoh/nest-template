import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { appProvider } from './common/app.provider';
import { ConfigsModule } from './common/configs/configs.module';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [ConfigsModule, DatabaseModule, JwtModule, UserModule ],
  controllers: [AppController],
  providers: [AppService, ...appProvider],
})
export class AppModule {}

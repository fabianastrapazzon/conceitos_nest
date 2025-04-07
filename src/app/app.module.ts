import { Module } from '@nestjs/common';
import { ConceitosAutomaticoModule } from 'src/conceitos-automatico/conceitos-automatico.module';
import { ConceitosManual } from 'src/conceitos-manual/conceitos-manual.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConceitosAutomaticoModule, ConceitosManual],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CatastroModule } from './catastro/catastro.module';

@Module({
  imports: [CatastroModule],
})
export class AppModule {}
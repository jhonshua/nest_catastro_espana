import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CatastroService } from './catastro.service';
import { CatastroController } from './catastro.controller';

@Module({
  imports: [HttpModule],
  controllers: [CatastroController],
  providers: [CatastroService],
})
export class CatastroModule {}
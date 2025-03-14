// src/catastro/catastro.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CatastroService } from './catastro.service';
import { PropertyInfoDto } from './dto/property-info.dto';

@Controller('catastro')
export class CatastroController {
  constructor(private readonly catastroService: CatastroService) {}

  @Post('property')
  async getPropertyInfo(@Body() propertyInfoDto: PropertyInfoDto) {
    return this.catastroService.getPropertyInfo(propertyInfoDto);
  }
}
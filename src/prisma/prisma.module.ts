import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // globally used in every module without imports
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // components can be used by other modules if they import this module
})
export class PrismaModule {}

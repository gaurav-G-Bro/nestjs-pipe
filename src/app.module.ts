import { Module } from '@nestjs/common';
import {UsersModule} from "./users/users.module";
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [UsersModule, DepartmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

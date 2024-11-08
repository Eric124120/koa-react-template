/*
 * @Author: 黄承文 chengwen@ssc-hn.com
 * @Date: 2024-11-08 16:18:52
 * @LastEditors: 黄承文 chengwen@ssc-hn.com
 * @LastEditTime: 2024-11-08 17:51:26
 * @FilePath: /koa-react-template/server/src/app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import moduleList from './interfaces';

@Module({
  imports: [...moduleList],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

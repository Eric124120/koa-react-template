/*
 * @Author: 黄承文 chengwen@ssc-hn.com
 * @Date: 2024-11-06 18:01:33
 * @LastEditors: 黄承文 chengwen@ssc-hn.com
 * @LastEditTime: 2024-11-06 18:06:41
 * @FilePath: /koa-react-template/server/src/hello/hello.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get('test')
  getGreeting() {
    return { message: this.helloService.getGreeting() };
  }
}

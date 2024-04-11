import createError from 'http-errors';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// 读取环境变量
import 'dotenv/config';

import indexRouter from './router/index.js';

import corsMiddleware from './utils/corsMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();
// 设置视图文件夹
app.set('views', path.join(__dirname, 'views'));
// 使用ejs语法
app.set('view engine', 'ejs');

app.use(logger('dev'));
// 内置中间件，解析请求体中的 JSON 数据
app.use(express.json());
//  URL 编码解析中间件
app.use(express.urlencoded({ extended: false }));
// 第三方中间件，解析请求中的 Cookie 头,并将解析后的 Cookie 键值对加到 req.cookies 对象上。
app.use(cookieParser());
// 设置静态目录
app.use(express.static(path.join(__dirname, 'public')));

// 配置 CORS 中间件,解决跨域问题
app.use(corsMiddleware);

app.use('/', indexRouter);

// 捕获404并转发给错误处理程序
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // 设置局部变量，只在开发过程中提供错误
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 呈现错误页面
  res.status(err.status || 500);
  res.render('error');
});

export default app;

import app from '../app.js';
import https from 'https';
import http from 'http';
import gradientString from 'gradient-string';
import boxen from 'boxen';

const isProduction = process.env.NODE_ENV === 'production';

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

let server;
if (isProduction) {
  server = https.createServer(app);
} else {
  server = http.createServer(app);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' 端口被占用');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'Port  ' + addr.port;

  let protocol = isProduction ? 'https' : 'http'; // 根据环境选择协议

  const welcomeMessage = gradientString('#B3FFAB', '#12FFF7').multiline(
    `${bind} 🚀\n哦吼，启动成功了哦！🚀\n启动成功，点击访问 ${protocol}://localhost:${port} 🚀`,
  );

  console.log(
    boxen(welcomeMessage, {
      padding: 1,
      borderStyle: 'round',
      title: 'ExpressORM',
      borderColor: '#FFAFBD',
    }),
  );
}

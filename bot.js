const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'bikaw.aternos.me',
  port: 51825,
  username: 'AFK_Bot_123',
  version: false,
});

bot.on('spawn', () => {
  console.log('✅ البوت دخل السيرفر!');
  setInterval(() => {
    bot.setControlState('forward', true);
    setTimeout(() => bot.setControlState('forward', false), 1000);
  }, 60000);
});

bot.on('error', err => console.log('❌ خطأ:', err));
bot.on('end', () => console.log('❌ البوت خرج من السيرفر!'));

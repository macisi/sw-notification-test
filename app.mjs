import Koa from 'koa';
import serve from 'koa-better-serve';
import nunjucks from 'koa-nunjucks-async';
import Router from 'koa-better-router';

const router = Router();

router.addRoute('GET /', async ctx => {
  await ctx.render('template', {
    title: 'ServiceWorker Demo',
  });
});

const app = new Koa();

app.use(nunjucks('./public/views', {
  noCache: true,
}));
app.use(router.middleware());
app.use(serve('./public/assets', '/assets'));
app.listen(3000, () => {
  console.log('server start at 3000');
});
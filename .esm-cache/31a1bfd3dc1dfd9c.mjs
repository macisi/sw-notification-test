let Koa;_dc1‍.w('koa',[["default",function(v){Koa=v}]]);let serve;_dc1‍.w('koa-better-serve',[["default",function(v){serve=v}]]);let nunjucks;_dc1‍.w('koa-nunjucks-async',[["default",function(v){nunjucks=v}]]);let Router;_dc1‍.w('koa-better-router',[["default",function(v){Router=v}]]);




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
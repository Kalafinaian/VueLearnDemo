var path=require('path')

module.exports = 
{ 

  devtool: 'eval-source-map',

  watch: true,
  // 入口文件
  entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件  
  
  // 编译输出的文件路径
  output: 
  {   
    // path: __dirname + "/build",//打包后的文件存放的地方  
    path: path.resolve(__dirname,"./build"),//打包后的文件存放的地方  
    publicPath:'/build',
    filename: "build.js"//打包后输出文件的文件名  
  } ,

  //加载器  
  module: {  
    loaders: 
    [{  
      test: /\.vue$/,   
      loader: 'vue-loader'   //如果写成'vue'可能会报TypeError:this._init is not a function的异常
    }

    // {
    //   test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
    //   loader: "babel",
    //   query: {presets: ['es2015']}
    // }
  ]  
  },

  // 处理
  // You are using the runtime-only build of Vue where the template compiler is not available. 
  // Either pre-compile the templates into render functions, or use the compiler-included build.
  // 这个异常，必须添加这些代码
  resolve: {
      alias: {
        'vue': 'vue/dist/vue.js'
      }
  } 

  
}  


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
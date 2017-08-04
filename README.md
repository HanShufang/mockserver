# tp2

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## framework & util
|Name|Version|Description|
|:--:|:----:|:----------|
|<a href="https://github.com/vuejs/vue-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/vue-9.svg"></a>|![vue-npm]|Loads and compiles Vue Components|  
|<a href="https://github.com/babel/babel-loader"><img width="48" height="48" title="babel-loader" src="https://worldvectorlogo.com/logos/babel-10.svg"></a>|![babel-npm]|Loads ES2015+ code and transpiles to ES5 using <a href="https://github.com/babel/babel">Babel</a>|
|<a href="https://github.com/jtangelder/sass-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>|![sass-npm]|Loads and compiles a SASS/SCSS file|
|<a href="https://github.com/webpack/webpack"><img width="48" height="48" title="webpack" src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg"></a>| ![webpack-npm]|  a bundler for modules.  bundle JavaScript files for usage in a browser|
|  <a href="https://myjsapi.alipay.com/alipayjsapi/index.html"><img width="40" height="40" title="AlipayJSAPi" src="https://zos.alipayobjects.com/rmsportal/JJKYcdVuOZraBiLyjmIZ.png"></a> | 3.0.3 |AlipayJSAPI 提供丰富的支付宝原生 API，可以方便调用支付宝提供的能力，达到媲美原生应用的体验。   |
| <a href="https://www.aliyun.com/"><img width="64" height="48" title="aliyun" src="http://imgs.ebrun.com/resources/2017_01/2017_01_25/201701255111485334758036.jpg"></a>  |   |   aliyun    |

[vue-npm]:https://img.shields.io/npm/v/vue.svg   
[babel-npm]: https://img.shields.io/npm/v/babel-loader.svg  
[sass-npm]: https://img.shields.io/npm/v/sass-loader.svg
[webpack-npm]:https://img.shields.io/npm/v/webpack.svg


### 注意事项
* js、css、html 文件名全部小写，单词用下划线 “_” 连接   

> hello_world.js 

* vue组件的name属性首字母大写

```javascript
    export default {
        name:"HelloWorld"
    }
```  
* scss文件中使用@import时 需要把后缀名写全，并带上注释

```scss
    @import "hello_world.scss";//hello_world组件用的样式
```

* 所有的接口地址写在apis_map.js文件中，带参数的地址可以用花括号表示

```javascript
    let map={
        "api":"/hello/world",
        "test":"/api/helloworld/{name}"
    }
```
> apis_map.js中存放所有的接口地址，在组件中使用this.$api访问，访问带未解析参数的地址会报错  

```javascript
  // in apis_map.js
  let map={
      "test":"/api/helloworld/{name}"//这个地址有未解析的参数
  }
  //...
  //in vue component
  this.$api.test //会输出异常 不能直接使用带未解析参数的地址
```

> Api对象提供一个resolve方法用来解析带参数的地址

```javascript
  // in apis_map.js
  let map={
      "test":"/api/helloworld/{name}"
  }
  //...
  //in vue component
  this.$api.resolve("test","peter") //return "/api/helloworld/peter"
  
  /*
  * @param {String} key api地址的名字
  * @param {String} * 可以传入任意数量的参数 需要和api地址中未解析的参数个数保持一致
  */
  this.$apis.resolve(key,param1,param2,...n)
```





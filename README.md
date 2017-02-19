# tabs
tabs ui component,
[demo](https://guocover.github.io/tabs/demo.html)



## How to use?

- Include tabs.js
```html
<script src="./js/tabs.js"></script>
```
- Include tabs basic css and your custom style	
```html
<link rel="stylesheet" href="./css/tabs.css">
<link rel="stylesheet" href="./css/demo.css">
```
- Use this HTML
```HTML
 <div id="tabs-1">
  <ul>
      <li><a href="#tabs-panel-1">first</a></li>
      <li><a href="#tabs-panel-2">second</a></li>
      <li><a href="#tabs-panel-3">third</a></li>
  </ul>
  <div id="tabs-panel-1">
      first panel
  </div>
  <div id="tabs-panel-2">
      second panel
  </div>
  <div id="tabs-panel-3">
      third panel
  </div>
</div>
```

## options
```javascript
// 默认设置参数
const defaults = {
    active: 0,  // 默认第一个为active
    disabled: [], // 禁止的列表
    event: "click",  // 指定tab切换的事件类型, 默认为click
    beforeActivate: noop, // tab选中前响应事件
    afterActivate: noop, // tab选中后响应事件
    animation: 'default', // 动画类型
    // 默认tabs结构的class名称
    classes: {
        stateActive: 'tabs-state-active',
        stateDisabled: 'tabs-state-disabled',
        container: 'tabs',
        tabNav: 'tabs-nav',
        anchor: 'tabs-nav-anchor',
        tab: 'tabs-nav-item',
        panel: 'tabs-panel',
    }
};
```

## apis

```javascript
  /**
   * 设置当前tab的item为active
   * @param index active对象的坐标
   */
  active(index) {
  }
  /**
   * 失效指定index的
   * @param [index]
   */
  disable(index) {
  }
  /**
   * enable 生效指定index的tab
   */
  enable(index) {
  }
  /**
   * option 跟option相关的操作，根据参数区分读或者写
   * @param [string] optionName 为字符串
   * @param value 配合字符串optionName使用
   */
  option(optionName, value) {
  }
```



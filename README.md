# tabs
tabs ui component



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




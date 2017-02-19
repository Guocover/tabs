/**
 * Tabs 组件
 * # usages
 * var tab = new Tabs('#newTabs');
 */

// 辅助变量
const noop = () => {};

// 工具函数，判断元素是否在对下中
function inArray(search, array){
    for(let i in array){
        if (array[i] == search) {
            return true;
        }
    }
    return false;
}

// 工具函数-事件绑定
function addEvent(element, eType, handle, bol) {
     //如果支持addEventListener
    if (element.addEventListener) {          
        element.addEventListener(eType, handle, bol);
    } else if(element.attachEvent) { //如果支持attachEvent
        element.attachEvent("on" + eType, handle);
    } else {  //否则使用兼容的onclick绑定
        element["on" + eType] = handle;
    }
}

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
        ul: 'tabs-nav',
        anchor: 'tab-nav-anchor',
        tab: 'tabs-nav-item',
        panel: 'tabs-panel',
    }
};

class Tabs{
    /**
     * Tabs 组件
     * @constructor
     * @param {string} element - 使用tabs的元素
     * @param {object} options - 配置参数
     */
    constructor(element, options){
        // 第一个参数需要为selector且
        if (!element) {
            console.error('must need param elment');
            return null;
        }

        // 获取element
        this.element = element;
        this.tabs = [];
        // 合并options
        this.options = Object.assign({}, defaults, options);
        // 初始化
        this._init();
    }
    /**
     * 初始化操作
     */
    _init() {
        const {
            active,
            event,
        } = this.options;
        // 获取元素内容
        this._setElementTabs();
        this._setClasses();
        // 设置事件监听
        this._setEvent(event);
        // 选中设置的active tab
        this.current = this._activate(active);
        this.isInit = true;
    }
    /**
     * 根据容器element分析结构，划分tabs组
     */
    _setElementTabs() {
        // 获取nav
        let element = this.element;
        let optionsDisabled = this.options.disabled;
        let tabNavDom = element.querySelectorAll('ul')[0];
        let tabList = tabNav.querySelectorAll('li');
        let tabs = [];

        for (let i = 0, length = tabList.length; i < length; i++) {
            let tab = tabList[i];
            let anchor = tab.querySelector('a'); // navItem的链接节点
            let panelSelector = anchor.getAttribute('href'); // 获取href属性值，该值表示panel的选择器
            let panel = element.querySelector(panelSelector);  // navItem对应的panel元素
            let disabled = false;
            // 分类好的，加入到tabs组   
            tabs.push({
                id: i,
                disabled: inArray(id, optionsDisabled),
                tab,
                anchor,
                panel,
                panelSelector,
                active: false
            });
        } 
        // 设置tabs
        this.tabs = tabs;
    }
    // 初始化设置tab结构的元素的classes
    _setClasses() {
        const tabs = this.tabs;
        const {
            stateDisabled,
            stateActive,
            tab,
            panel,
            container,
        } = this.options.classes;
        // 设置容器的样式
        this.element.classList.add(.container); 
        this.element.addClass(_this.options.classes.ul);
        // 循环设置tabItem样式
        for (let i = 0, length = tabs.length; i < length; i++) {
            // 当前item
            let tabItem = tabs[i];
            tabItem.tab.classList.add(tab);
            tabItem.panel.classList.add(panel);
            tabItem.anchor.classList.add(anchor);
            // anchor比较特殊需要设定index的属性
            tabItem.anchor.setAttribute('data-index', i);
            if(tabItem.disabled) {
                tabItme.tab.classList.add(stateDisabled);
            }
        }
    }
    // 设置事件
    _setEvent() {
        const anchorClass = this.optiosn.classes.anchor; // 需要绑定的触发切换的事件名称；
        const tabEvent = this.options.event;
        let current = this.current;
        let tabs = this.tabs;
        let self = this;
        // 绑定事件名称
        addEvent(this.element, tabEvent, function(e) {
            let e = e || window.event;
            // IE没有e.target，有e.srcElement
            let target = e.target || e.srcElement;
            let targetClass = target.getAttribute('class');
            // 判断事件对象
            if (targetClass.indexOf(anchorClass) > -1){
                let activeIndex = tabItem.anchor.getAttribute('data-index');
                let tabData = tabs[activeIndex];
                // 如果没有被禁用且不是当前的tab
                if (!tabData.disabled && current !== activeIndex) {
                        self._activate(activeIndex);
                    }
                }
            }
        }, false);

        // 循环绑定事件，比较方便
        for (var i=0; i<this.tabs.length; i++) {
            // Add activate function to the tab and accordion selection element
            this.tabs[i].anchor.on(_this.options.event, {tab: _this.tabs[i]}, fActivate);
            this.tabs[i].accordionAnchor.on(_this.options.event, {tab: _this.tabs[i]}, fActivate);
        }
    }
    /**
     * 选中指定index的tab的实现方法
     */
    _activate(activeIndex) {
        const classes = this.options.classes;
        const prevTab = this.tabs[this.current];
        const targetTab = this.tabs[activeIndex];
        // 设置tab的active样式, 去除之前的tab的active样式
        prevTab.tab.classList.remove(classesclasses.stateActive);
        targetTab.tab.classList.add(classesclasses.stateActive);
        // 设置目标tab的active为true
        targetTab.active = true;
        // 设置tab选中后回调
        this.options.afterActivate(targetTab);
        return index;
    }
    /**
     * 设置当前tab的item为active
     * @param index active对象的坐标
     */
    active(index) {
        let targetTab = this.tabs[index];
        // 如果没有targetTab则直接返回
        if (!targetTab || targetTab.disabled) {
            return;
        }
        // 设置选中tab前回调
        this.options.beforeActivate(targetTab);
        return this._activate(index);
    }
    /**
     * 失效指定index的
     * @param [index]
     */
    disable(index) {
        // 获取目标tab
        let targetTabItem = this.tabs[index];
        let classes = this.options.classes;
        // 如果tab存在的话
        if (targetTab) {
            // 设置该tab的disabled
            targetTab.disabled = true;
            // 设置样式,去除禁止的样式
            targetTab.tab.classList.add(classes.stateDisabled);
        }
    }
    /**
     * enable 生效指定index的tab
     */
    enable(index) {
        // 获取目标tab
        let targetTabItem = this.tabs[index];
        let classes = this.options.classes;
        // 如果tab存在的话
        if (targetTab) {
            // 设置该tab的disabled
            targetTab.disabled = false;
            // 设置样式,去除禁止的样式
            targetTab.tab.classList.remove(classes.stateDisabled);
        }
    }
    /**
     * option 跟option相关的操作，根据参数区分读或者写
     * @param [string] optionName 为字符串
     * @param value 配合字符串optionName使用
     */
    option(optionName, value) {
        // 如果传了第二个参数value，则设置option
        if (value) {
            this.options[optionName] = value;
        }
        // 最终返回option的值
        return this.options[optionName];
    }
    /**
     * destory 销毁
     * 之后完善吧。。
     */
    destroy() {
        this.element = null;
    }

}

export default Tabs;
/**
 * Tabs 组件
 *
 * var tab = new Tabs('#newTabs');
 */

// 辅助变量
const noop = () => {};

// 默认参数
const defaultOptions = {
    active: 0,  // 默认第一个为active
    disabled: [], // 禁止的列表
    event: "click",  // 指定tab切换的事件类型
    beforeActivate: noop, // 准备展示前
    activate: noop, // 展示后
};

// class Tabs
class Tabs{
    constructor(selector, options){
        // 合并options
        this.options = Object.assign({}, defaultOptions, options);

        if (!selector) {
            console.error('must need param selector');
            return null;
        }

        // 获取element
        this.element = document.querySelector(selector);
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
        // 设定激活的tab
        this.active = this._activate(active);
        // 设置事件监听
        this._setEnvent(event);
        this.isInit = true;
    }


    /**
     * 选中指定index的tab的实现方法
     */
    _activate(index) {

        return index;
    }

    /**
     * 设置事件
     * @private
     */
    _setOptionDisabled() {

    }

    /**
     * 绑定指定事件
     */
    _setEnvent(eventName) {

    }

    /**
     * 设置当前tab的item为active
     * @param index active对象的坐标
     */
    active(index) {
        this._activate(index);
        // 如果没有index则直接返回
        if (!index) {
            return;
        }
    }


    /**
     * 失效指定index的或者全部tab
     * @param [index]
     */
    disable(index) {
        let target;
        const disabled = this.disabled; // 获取当前的tabs的disabled

        // 如果已经为disbaled状态则直接返回
        if ( disabled === true ) {
            return;
        }
        // 如果没有index参数，则设置target为true
        if ( index === undefined ) {
            target = true;
        } else {
            index = this._getIndex( index );
            if ( $.inArray( index, disabled ) !== -1 ) {
                return;
            }
            if ( $.isArray( disabled ) ) {
                disabled = $.merge( [ index ], disabled ).sort();
            } else {
                disabled = [ index ];
            }
        }
        this._setOptionDisabled();
    }


    /**
     * enable 生效指定index的tab
     */
    enable(index) {

    }


    /**
     * option 跟option相关的操作
     * @param optionName 可为字符串或者对象
     * @param value 配合字符串optionName使用
     */
    option(optionName, value) {

    }



    /**
     * destory 销毁
     */
    destroy() {
        this.element = null;
    }



}

export default Tabs;
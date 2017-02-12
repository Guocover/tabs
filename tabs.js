/**
 * Tabs 组件
 */

/**
 * 默认参数
 * @type {{}}
 */
const defaultOptions = {
    active: 0,  // 默认第一个为active
}

class Tabs{
    constructor(options){
        // 合并options
        this.options = Object.assign({}, defaultOptions, options);
        this.selector = options.selector;


        // 初始化
        this.init();
    }

    init() {

    }





    // 获取当前active的坐标
    get active() {
        // 当前active
        return this.active;
    }

    /**
     * 设置当前tab的item为active
     * @param index active对象的坐标
     */
    set active(index) {
        this._active(index);
    }

    _active(index) {
        let element = this.element;

    }

    // 获取当前
    get disable() {

    }
    set disable(index) {

    }




}

export default Tabs;
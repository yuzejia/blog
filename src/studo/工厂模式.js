// 工厂模式

var PopFactory = function (name) {
    switch (name) {
        case 'checkTip': return new loginTips();
        default:
            break;
    }
    
}
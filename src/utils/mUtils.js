(function() { //根据页面可见性处理一些事情，比如动态修改title
    var OriginTitile = document.title,
        titleTime;

    function getHiddenProp() { //兼容性前缀处理
        var prefixes = ['webkit', 'moz', 'ms', 'o'];
        if ('hidden' in document) return 'hidden';
        for (var i = 0; i < prefixes.length; i++) {
            if ((prefixes[i] + 'Hidden') in document) {
                return prefixes[i] + 'Hidden';
            };
        }
        return null;
    }

    function isHidden() {
        var prop = getHiddenProp();
        if (!prop) return false;
        return document[prop];
    }
    document.addEventListener('visibilitychange', function() {
        if (isHidden()) {
            document.title = 'don`t leave！';
            clearTimeout(titleTime);
        } else {
            document.title = 'welcome back！';
            titleTime = setTimeout(function() {
                document.title = OriginTitile;
            }, 2000);
        }
    });
})();
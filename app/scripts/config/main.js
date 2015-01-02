define(['app'], function ( AppManager) {
    var setUIBehavior = function () {        
        // hardcoded 150px for top menu and conversations in footer
        var targetHeight = $(window).height() - 150;
        var mainRegion = $('#main-region');
        var sidebarRegion = $('#sidebar');

        mainRegion.height(targetHeight);
        sidebarRegion.height(targetHeight);

        $(window).resize(function(){
            var targetHeight = $(window).height() - 150;
            mainRegion.height(targetHeight);
            sidebarRegion.height(targetHeight);
        });
    }

    AppManager.addInitializer(setUIBehavior);

    return ;
});
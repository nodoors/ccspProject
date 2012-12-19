$(".fancybox").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
        
        autoSize : false,
        beforeLoad : function() {                    
                this.width  = 1200;
                this.height = 700;
        }
});
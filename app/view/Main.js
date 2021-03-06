Ext.define('Dallas.view.Main', {
    extend: 'Ext.tab.Panel',
    
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        
    ],
    config: {
        tabBarPosition: 'bottom',
         tabBar: {
                scrollable: {
                    direction: 'horizontal'
                    }
                },

        items: [
            {
            	xtype:'home'
            },
            {
            	xtype:'choosesize'
            },
            {
            	xtype:'customize'
            },
            {
            	xtype:'option1'
            },
            {
            	xtype:'option2'
            },
            {
            	xtype:'checkout1'
            },
            {
            	xtype:'checkout2'
            }
        ]
    }
});

Ext.define('Dallas.store.Rosters',{
    extend:'Ext.data.Store',
    
        config:{

        
        model:'Dallas.model.Roster',
        autoLoad:true,
        data:[
            {
                name:'Erik Cole',
                number:'72'
            },
            {
                name:'Cody Eakin',
               number:'20'
            },
            {
                name:'Vernon Fiddler',
                number:'38'
            },
            {
                name:'Ryan Garbutt',
                number:'40'
            },
            {
                name:'Shawn Horcoff',
               number:'10'
            },
            {
                name:'Lane MacDermid',
                number:'28'
            },
            {
                name:'Antoine Roussel',
                number:'60'
            },
            {
                name:'Tyler Seguin',
               number:'91'
            },
            {
                name:'Tom Wandell ',
                number:'23'
            },
            {
                name:'Shawn Horcoff',
               number:'10'
            },
            {
                name:'Lane MacDermid',
                number:'28'
            },
            {
                name:'Ray Whitney "A" ',
                number:'13'
            },
            {
                name:'Trevor Daley',
               number:'6'
            },
            {
                name:'Brenden Dillon ',
                number:'4'
            }

     ],
     
     // proxy:{
            // type:'ajax',
            // url:'https://maps.googleapis.com/maps/api/place/search/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&sensor=false&key=AIzaSyCFWZSKDslql5GZR0OJlVcgoQJP1UKgZ5U',
            // reader:{
                // type:'json',
                // rootProperty:'results'
            // }
        // }
    }
});
[
  '{{repeat(5, 7)}}',
  {   
    id: '{{index()}}',
    isActive: '{{bool()}}',  
    img: 'http://placehold.it/150?text={{random("blue", "brown", "green")}}',
    age: '{{integer(20, 40)}}',
    name: {
      first:'{{firstName()}}',
      last:'{{surname()}}'
    },
    
    username:function(){return 'user'+this.id;},
    passowd:'pass',
    email: function(){return this.username+'@gmail.com';},
    gender: '{{gender()}}',    
    
    phone: '+1 {{phone()}}',
    
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    
    
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    
    animal:[
      '{{repeat(1, 9)}}',
    {
          id: '{{index()}}',
          name:'{{company().toUpperCase()}}',
          type:'{{random("Sky", "Sea", "Land")}}',
          breed: function (tags) {
            var breeds = {
              Sky:['Sky', 'Sea', 'Land'],
      Sea:['pug', 'mutt', 'german '],
              Land:['faclon', 'eagle', 'flamingo']
      };
            return breeds[this.type][tags.integer(0, breeds[this.type].length - 1)];},
              
               registered: ['{{date(new Date(2014, 0, 1), new Date(),                 "YYYY-MM-ddThh:mm:ss Z")}}'],
                 
                 locations:[                  
                   '{{repeat(1, 9)}}',
                   {
                     id:'{{index()}}',
                      latitude: '{{floating(37.780031, 37.784101)}}',
            longitude: '{{floating(-122.434127, 122.411875              )}}'
                   }                     
             ]
                           
                     
    }       
      ]

  }

]
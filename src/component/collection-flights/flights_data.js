const FLIGHTS_DATA = [ 
    {
        country: 'Canada',
        id: 1,
        routes:[
            {
                price: '590€',
                departure: '20/01/2020',
                timed: '17:11',
                arrival: '20/01/2020',   
                timea: '21:23',     
                id: 1,
                from: 'Canada',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '500€',
                departure: '27/01/2020',
                timed:'18:11',
                arrival: '27/01/2020',
                timea:'21:23',        
                id: 2,
                from: 'Canada',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],   
            },
            {
                price: '480€',
                departure: '20/01/2020',
                timed:'18:11',
                arrival: '20/01/2020',
                timea:'21:23',         
                id: 3,
                from: 'Canada',
                to: 'Germany',  
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '380€',
                departure: '27/01/2020',
                timed:'18:11',
                arrival: '27/01/2020', 
                timea:'21:23',        
                id: 4,
                from: 'Canada',
                to:'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],     
            },
            {
                price: '380€',
                departure: '20/01/2020',
                timed:' 18:11',
                arrival: '20/01/2020',  
                timea:'21:23:12',       
                id: 5,
                from: 'Canada',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],    
            }
        ]
    },


    {  
        country: 'China',
        id: 2,
        routes:[
            {
                price: '590€',
                departure: '21/01/2020',
                timed:'18:11',
                arrival: '21/01/2020',
                timea:'21:23',         
                id: 6,
                from: 'China',
                to:'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '390€',
                departure: '28/01/2020',
                timed:' 18:11',
                arrival: '28/01/2020',
                timea:'21:23',       
                id: 7,
                from: 'China',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],     
            },
            {
                price: '290€',
                departure: '21/01/2020',
                timed:'18:11',
                arrival: '21/01/2020',  
                timea:'21:23',      
                id: 8,
                from: 'China',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],  
            },
            {
                price: '290€',
                departure: '28/01/2020',
                timed:'18:11',
                arrival: '28/01/2020',
                timea:'21:23:12',        
                id: 9,
                from: 'China',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '490€',
                departure: '21/01/2020',
                timed:'18:11',
                arrival: '21/01/2020',
                timea:'21:23',        
                id: 10,
                from: 'China',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],      
            }
        ]
    },


    {
        country: 'England',
        id: 3,
        routes:[
            {
                price: '500€',
                departure: '22/01/2020',
                timed:'18:11',
                arrival: '22/01/2020',
                timea:'21:23',        
                id: 11,
                from: 'England',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '390€',
                departure: '29/01/2020',
                timed:'18:11',
                arrival: '29/01/2020',
                timea:'21:23',        
                id: 12,
                from: 'England',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '290€',
                departure: '22/01/2020',
                timed:'18:11',
                arrival: '22/01/2020',
                timea:'21:23',        
                id: 13,
                from: 'England',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'], 
            },
            {
                price: '250€',
                departure: '29/01/2020',
                timed:'18:11',
                arrival: '29/01/2020',
                timea:'21:23',        
                id: 14,
                from: 'England',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '290€',
                departure: '22/01/2020',
                timed:'18:11',
                arrival: '22/01/2020',
                timea:'21:23',        
                id: 15,
                from: 'England',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            }
        ]
    },


    {
        country: 'Germany',
        id: 4,
        routes:[
            {
                price: '480€',
                departure: '23/01/2020',
                timed:'18:11',
                arrival: '23/01/2020',
                timea:'21:23',        
                id: 16,
                from: 'Germany',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '290€',
                departure: '30/01/2020',
                timed:'18:11',
                arrival: '30/10/2020',
                timea:'21:23',        
                id: 17,
                from: 'Germany',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '290€',
                departure: '23/01/2020',
                timed:'18:11',
                arrival: '23/01/20203', 
                timea:'21:20',       
                id: 18,
                from: 'Germany',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '250€',
                departure: '30/01/2020',
                timed:'18:11',
                arrival: '30/01/2020',
                timea:'21:23',        
                id: 19,
                from: 'Germany',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '290€',
                departure: '23/01/2020',
                timed:'18:11',
                arrival: '23/01/2020',
                timea:'21:23',        
                id: 20,
                from: 'Germany',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            }
        ]
    },


    {
        country: 'Italy',
        id: 5,
        routes:[
            {
                price: '380€',
                departure: '24/01/2020',
                timed:'18:11',
                arrival: '24/01/2020',
                timea:'21:23',        
                id: 21,
                from: 'Italy',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],                  
            },
            {
                price: '290€',
                departure: '31/01/2020',
                timed:'18:11',
                arrival: '31/01/2020',
                timea:'21:23',        
                id: 22,
                from: 'Italy',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],  
            },
            {
                price: '250€',
                departure: '24/01/2020',
                timed:'18:11',
                arrival: '24/01/2020',
                timea:'21:23',        
                id: 23,
                from: 'Italy',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],   
            },
            {
                price: '250€',
                departure: '31/01/2020',
                timed:'18:11',
                arrival: '31/01/2020',
                timea:'21:23',        
                id: 24,
                from: 'Italy',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],  
            },
            {
                price: '290€',
                departure: '24/01/2020',
                timed:'18:11',
                arrival: '24/01/2020',
                timea:'21:23',        
                id: 25,
                from: 'Italy',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            }
        ]
    },


    {      
        country: 'Portugal',
        id: 6,
        routes:[
            {
                price: '380€',
                departure: '14/01/2020',
                timed:' 18:11',
                arrival: '14/01/2020',
                timea:'21:23',        
                id: 26,
                from: 'Portugal',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'], 
            },
            {
                price: '490€',
                departure: '21/01/2020',
                timed:' 18:11',
                arrival: '21/01/2020',
                timea:'21:23',        
                id: 27,
                from: 'Portugal',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],   
            },
            {
                price: '290€',
                departure: '14/01/2020',
                timed:' 18:11',
                arrival: '14/01/2020',
                timea:'21:23',       
                id: 28,
                from: 'Portugal',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],    
            },
            {
                price: '290€',
                departure: '21/01/2020',
                timed:'18:11',
                arrival: '21/01/2020',
                timea:'21:23',        
                id: 29,
                from: 'Portugal',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            },
            {
                price: '290€',
                departure: '14/01/2020',
                timed:'18:11',
                arrival: '14/01/2020',
                timea:'21:23',        
                id: 30,
                from: 'Portugal',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
            }
        ]
    }
 ]
export default FLIGHTS_DATA;
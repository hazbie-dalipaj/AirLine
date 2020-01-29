const FLIGHTS_DATA = [ 
    {
        country: 'Canada',
        id: 1,
        routes:[
            {
                price: '590€',
                departure: '2020-01-20',
                timed: '17:11',
                arrival: '2020-01-20',   
                timea: '21:23',
                retur:'2020-01-30',     
                id: 1,
                from: 'Canada',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Adria'
            },
            {
                price: '500€',
                departure: '2020-01-27',
                timed:'18:11',
                arrival: '2020-01-27',
                timea:'21:23',
                retur:'2020-02-07',        
                id: 2,
                from: 'Canada',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Advanced Air'   
            },
            {
                price: '480€',
                departure: '2020-01-20',
                timed:'18:11',
                arrival: '2020-01-20',
                timea:'21:23',
                retur:'2020-01-30',         
                id: 3,
                from: 'Canada',
                to: 'Germany',  
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Aegean'
            },
            {
                price: '380€',
                departure: '2020-01-27',
                timed:'18:11',
                arrival: '2020-01-27', 
                timea:'21:23',
                retur:'2020-02-07',        
                id: 4,
                from: 'Canada',
                to:'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Canada'     
            },
            {
                price: '380€',
                departure: '2020-01-20',
                timed:' 18:11',
                arrival: '2020-01-20',  
                timea:'21:23:12',
                retur:'2020-01-30',       
                id: 5,
                from: 'Canada',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air China'    
            }
        ]
    },


    {  
        country: 'China',
        id: 2,
        routes:[
            {
                price: '590€',
                departure: '2020-01-21',
                timed:'18:11',
                arrival: '2020-01-21',
                timea:'21:23',
                retur:'2020-02-01',         
                id: 6,
                from: 'China',
                to:'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Europa'
            },
            {
                price: '390€',
                departure: '2020-01-28',
                timed:' 18:11',
                arrival: '2020-21-28',
                timea:'21:23',
                retur:'2020-02-08',       
                id: 7,
                from: 'China',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Olympic'     
            },
            {
                price: '290€',
                departure: '2020-01-21',
                timed:'18:11',
                arrival: '2020-01-21',  
                timea:'21:23',
                retur:'2020-02-09',      
                id: 8,
                from: 'China',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Skyjet Airlines'  
            },
            {
                price: '290€',
                departure: '2020-01-28',
                timed:'18:11',
                arrival: '2020-01-28',
                timea:'21:23:12',
                retur:'2020-02-08',        
                id: 9,
                from: 'China',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Adria'
            },
            {
                price: '490€',
                departure: '2020-01-21',
                timed:'18:11',
                arrival: '2020-01-21',
                timea:'21:23',
                retur:'2020-02-09',        
                id: 10,
                from: 'China',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Advanced Air'      
            }
        ]
    },


    {
        country: 'England',
        id: 3,
        routes:[
            {
                price: '500€',
                departure: '2020-01-22',
                timed:'18:11',
                arrival: '2020-01-22',
                timea:'21:23',
                retur:'2020-02-08',        
                id: 11,
                from: 'England',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Aegean'
            },
            {
                price: '390€',
                departure: '2020-01-29',
                timed:'18:11',
                arrival: '2020-01-29',
                timea:'21:23',
                retur:'2020-02-09',        
                id: 12,
                from: 'England',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Canada'
            },
            {
                price: '290€',
                departure: '2020-01-22',
                timed:'18:11',
                arrival: '2020-01-22',
                timea:'21:23',
                retur:'2020-02-08',        
                id: 13,
                from: 'England',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air China' 
            },
            {
                price: '250€',
                departure: '2020-01-29',
                timed:'18:11',
                arrival: '2020-01-29',
                timea:'21:23',
                retur:'2020-02-09',        
                id: 14,
                from: 'England',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Europa'
            },
            {
                price: '290€',
                departure: '2020-01-22',
                timed:'18:11',
                arrival: '2020-01-22',
                timea:'21:23',
                retur:'2020-02-08',        
                id: 15,
                from: 'England',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Olympic'
            }
        ]
    },


    {
        country: 'Germany',
        id: 4,
        routes:[
            {
                price: '480€',
                departure: '2020-01-23',
                timed:'18:11',
                arrival: '2020-01-23',
                timea:'21:23',
                retur:'2020-02-07',        
                id: 16,
                from: 'Germany',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Skyjet Airlines'
            },
            {
                price: '290€',
                departure: '2020-01-30',
                timed:'18:11',
                arrival: '2020-01-30',
                timea:'21:23',
                retur:'2020-02-10',        
                id: 17,
                from: 'Germany',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Adria'
            },
            {
                price: '290€',
                departure: '2020-01-23',
                timed:'18:11',
                arrival: '2020-01-23', 
                timea:'21:20',
                retur:'2020-02-07',       
                id: 18,
                from: 'Germany',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Advanced Air'
            },
            {
                price: '250€',
                departure: '2020-01-30',
                timed:'18:11',
                arrival: '2020-01-30',
                timea:'21:23',
                retur:'2020-02-10',        
                id: 19,
                from: 'Germany',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Aegean'
            },
            {
                price: '290€',
                departure: '2020-01-23',
                timed:'18:11',
                arrival: '2020-01-23',
                timea:'21:23',
                retur:'2020-02-03',        
                id: 20,
                from: 'Germany',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Canada'
            }
        ]
    },


    {
        country: 'Italy',
        id: 5,
        routes:[
            {
                price: '380€',
                departure: '2020-01-24',
                timed:'18:11',
                arrival: '2020-01-24',
                timea:'21:23',
                retur:'2020-02-14',        
                id: 21,
                from: 'Italy',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air China'                  
            },
            {
                price: '290€',
                departure: '2020-01-31',
                timed:'18:11',
                arrival: '2020-01-31',
                timea:'21:23',
                retur:'2020-02-10',        
                id: 22,
                from: 'Italy',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Europa'  
            },
            {
                price: '250€',
                departure: '2020-01-24',
                timed:'18:11',
                arrival: '2020-01-24',
                timea:'21:23',
                retur:'2020-02-04',        
                id: 23,
                from: 'Italy',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Olympic'   
            },
            {
                price: '250€',
                departure: '2020-01-31',
                timed:'18:11',
                arrival: '2020-01-31',
                timea:'21:23',
                retur:'2020-02-10',        
                id: 24,
                from: 'Italy',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Skyjet Airlines'  
            },
            {
                price: '290€',
                departure: '2020-01-24',
                timed:'18:11',
                arrival: '2020-01-24',
                timea:'21:23',
                retur:'2020-02-04',        
                id: 25,
                from: 'Italy',
                to: 'Portugal',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Adria'
            }
        ]
    },


    {      
        country: 'Portugal',
        id: 6,
        routes:[
            {
                price: '380€',
                departure: '2020-01-14',
                timed:' 18:11',
                arrival: '2020-01-14',
                timea:'21:23',
                retur:'2020-01-24',        
                id: 26,
                from: 'Portugal',
                to: 'Canada',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Advanced Air' 
            },
            {
                price: '490€',
                departure: '2020-01-24',
                timed:' 18:11',
                arrival: '2020-01-24',
                timea:'21:23',
                retur:'2020-02-04',        
                id: 27,
                from: 'Portugal',
                to: 'China',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Aegean'   
            },
            {
                price: '290€',
                departure: '2020-01-14',
                timed:' 18:11',
                arrival: '2020-01-14',
                timea:'21:23',
                retur:'2020-01-24',       
                id: 28,
                from: 'Portugal',
                to: 'England',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Canada'    
            },
            {
                price: '290€',
                departure: '2020-01-21',
                timed:'18:11',
                arrival: '2020-01-21',
                timea:'21:23',
                retur:'2020-02-01',        
                id: 29,
                from: 'Portugal',
                to: 'Germany',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air China'
            },
            {
                price: '290€',
                departure: '2020-01-14',
                timed:'18:11',
                arrival: '2020-01-14',
                timea:'21:23',
                retur:'2020-01-24',        
                id: 30,
                from: 'Portugal',
                to: 'Italy',
                cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'],
                company:'Air Europa'
            }
        ]
    }
 ]
export default FLIGHTS_DATA;
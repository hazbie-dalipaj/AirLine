const FLIGHTS_DATA_RETURN = [ 
    {
        country: 'Canada',
        id: 1,
        routes:[
            {
                price: '590€',
                id: 1,
                departure: {
                   from: 'Canada',
                    to:'China',
                    departure: '2020-01-20',
                    timed: '17:11',
                    arrival: '2020-01-20',   
                    timea: '21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }, 
                retur:{
                    from: 'China',
                    to:'Canada',
                    departure: '2020-01-30',
                    timed: '17:11',
                    arrival: '2020-01-30',   
                    timea: '21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                }
            },
            {
                price: '500€',
                id: 2,
                departure:{
                    from: 'Canada',
                     to:'England',
                     departure: '2020-01-27',
                     timed: '18:11',
                     arrival: '2020-01-27',   
                     timea: '21:23',
                     cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                 }, 
                 retur:{
                    from: 'England',
                    to:'Canada',
                    departure: '2020-02-10',
                    timed: '17:11',
                    arrival: '2020-02-10',   
                    timea: '21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                } 
            },
            {
                price: '480€',
                id: 3,
                departure:{
                    from: 'Canada',
                    to: 'Germany',
                    departure: '2020-01-20',
                    timed:'18:11',
                    arrival: '2020-01-20',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Germany',
                    to: 'Canada',
                    departure: '2020-01-30',
                    timed:'18:11',
                    arrival: '2020-01-30',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '380€',
                id: 4,
                departure:{
                    from:'Canada',
                    to:'Italy',
                    departure: '2020-01-27',
                    timed:'18:11',
                    arrival: '2020-01-27', 
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from:'Itayl',
                    to:'Canada',
                    departure: '2020-02-07',
                    timed:'18:11',
                    arrival: '2020-02-07', 
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }    
            },
            {
                price: '380€',
                id: 5,
                departure:{
                    from:'Canada',
                    to:'Portugal',
                    departure: '2020-01-20',
                    timed:' 18:11',
                    arrival: '2020-01-20',  
                    timea:'21:23:12',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from:'Portugal',
                    to:'Canada',
                    departure: '2020-01-30',
                    timed:' 18:11',
                    arrival: '2020-01-30',  
                    timea:'21:23:12',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }  
            }
        ]
    },


    {  
        country: 'China',
        id: 2,
        routes:[
            {
                price: '590€',
                id: 6,
                departure:{
                    from: 'China',
                    to:'Canada',
                    departure: '2020-01-21',
                    timed:'18:11',
                    arrival: '2020-01-21',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'China',
                    to:'Canada',
                    departure: '2020-02-01',
                    timed:'18:11',
                    arrival: '2020-02-01',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                } 
            },
            {
                price: '390€',
                id: 7,
                departure:{
                    from: 'China',
                    to: 'England',
                    departure: '2020-01-28',
                    timed:' 18:11',
                    arrival: '2020-21-28',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'England',
                    to: 'China',
                    departure: '2020-02-08',
                    timed:' 18:11',
                    arrival: '2020-02-08',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                }    
            },
            {
                price: '290€',
                id: 8,
                departure:{
                    from: 'China',
                    to: 'Germany',
                    departure: '2020-01-21',
                    timed:'18:11',
                    arrival: '2020-01-21',  
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']  
                },
                retur:{
                    from: 'Germany',
                    to: 'China',
                    departure: '2020-02-09',
                    timed:'18:11',
                    arrival: '2020-02-09',  
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']  
                }
            },
            {
                price: '290€',
                id: 9,
                departure:{
                   from: 'China',
                    to: 'Italy',
                    departure: '2020-01-28',
                    timed:'18:11',
                    arrival: '2020-01-28',
                    timea:'21:23:12',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Italy',
                    to: 'China',
                    departure: '2020-02-08',
                    timed:'18:11',
                    arrival: '2020-02-08',
                    timea:'21:23:12',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                }
            },
            {
                price: '490€',
                id: 10,
                departure:{
                    from: 'China',
                    to: 'Portugal',
                    departure: '2020-01-21',
                    timed:'18:11',
                    arrival: '2020-01-21',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']  
                },
                retur:{
                    from: 'Portugal',
                    to: 'China',
                    departure: '2020-02-09',
                    timed:'18:11',
                    arrival: '2020-02-09',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']  
                }      
            }
        ]
    },


    {
        country: 'England',
        id: 3,
        routes:[
            {
                price: '500€',
                id: 11,
                departure:{
                    from: 'England',
                    to: 'Canada',
                    departure: '2020-01-22',
                    timed:'18:11',
                    arrival: '2020-01-22',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']  
                },
                retur:{
                    from: 'Canada',
                    to: 'England',
                    departure: '2020-02-08',
                    timed:'18:11',
                    arrival: '2020-02-08',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '390€',
                id: 12,
                departure:{
                    from: 'England',
                    to: 'China',
                    departure: '2020-01-29',
                    timed:'18:11',
                    arrival: '2020-01-29',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']  
                },
                retur:{
                    from: 'China',
                    to: 'England',
                    departure: '2020-02-09',
                    timed:'18:11',
                    arrival: '2020-02-09',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '290€',
                id: 13,
                departure:{
                    from: 'England',
                    to: 'Germany',
                    departure: '2020-01-22',
                    timed:'18:11',
                    arrival: '2020-01-22',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Germany',
                    to: 'England',
                    departure: '2020-02-08',
                    timed:'18:11',
                    arrival: '2020-02-08',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                } 
            },
            {
                price: '250€',
                id: 14,
                departure:{
                    from: 'England',
                    to: 'Italy',
                    departure: '2020-01-29',
                    timed:'18:11',
                    arrival: '2020-01-29',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Italy',
                    to: 'England',
                    departure: '2020-02-09',
                    timed:'18:11',
                    arrival: '2020-02-09',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '290€',
                id: 15,
                departure:{
                    from: 'England',
                    to: 'Portugal',
                    departure: '2020-01-22',
                    timed:'18:11',
                    arrival: '2020-01-22',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Portugal',
                    to: 'England',
                    departure: '2020-02-08',
                    timed:'18:11',
                    arrival: '2020-02-08',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            }
        ]
    },


    {
        country: 'Germany',
        id: 4,
        routes:[
            {
                price: '480€',
                id: 16,
                departure:{
                    from: 'Germany',
                    to: 'Canada',
                    departure: '2020-01-23',
                    timed:'18:11',
                    arrival: '2020-01-23',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Canada',
                    to: 'Germany',
                    departure: '2020-02-07',
                    timed:'18:11',
                    arrival: '2020-02-07',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '290€',
                id: 17,
                departure:{
                    from: 'Germany',
                    to: 'China',
                    departure: '2020-01-30',
                    timed:'18:11',
                    rrival: '2020-01-30',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                },
                retur:{
                    from: 'China',
                    to: 'Germany',
                    departure: '2020-02-10',
                    timed:'18:11',
                    rrival: '2020-02-10',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '290€',
                id: 18,
                departure:{
                    from: 'Germany',
                    to: 'England',
                    departure: '2020-01-23',
                    timed:'18:11',
                    arrival: '2020-01-23', 
                    timea:'21:20',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'England',
                    to: 'Germany',
                    departure: '2020-02-07',
                    timed:'18:11',
                    arrival: '2020-02-07', 
                    timea:'21:20',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '250€',
                id: 19,
                departure:{
                    from: 'Germany',
                    to: 'Italy',
                    departure: '2020-01-30',
                    timed:'18:11',
                    arrival: '2020-01-30',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                },
                retur:{
                    from: 'Italy',
                    to: 'Germany',
                    departure: '2020-02-10',
                    timed:'18:11',
                    arrival: '2020-02-10',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '290€',
                id: 20,
                departure:{
                    from: 'Germany',
                    to: 'Portugal',
                    departure: '2020-01-23',
                    timed:'18:11',
                    arrival: '2020-01-23',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Portugal',
                    to: 'Germany',
                    departure: '2020-02-03',
                    timed:'18:11',
                    arrival: '2020-02-03',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            }
        ]
    },


    {
        country: 'Italy',
        id: 5,
        routes:[
            {
                price: '380€',
                id: 21,
                departure:{
                    from: 'Italy',
                    to: 'Canada',
                    departure: '2020-01-24',
                    timed:'18:11',
                    arrival: '2020-01-24',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Canada',
                    to: 'Italy',
                    departure: '2020-02-14',
                    timed:'18:11',
                    arrival: '2020-02-14',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }                  
            },
            {
                price: '290€',
                id: 22,
                departure:{
                   from: 'Italy',
                    to: 'China',
                    departure: '2020-01-31',
                    timed:'18:11',
                    arrival: '2020-01-31',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'China',
                    to: 'Italy',
                    departure: '2020-02-10',
                    timed:'18:11',
                    arrival: '2020-02-10',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '250€',
                id: 23,
                departure:{
                    from: 'Italy',
                    to: 'England',
                    departure: '2020-01-24',
                    timed:'18:11',
                    arrival: '2020-01-24',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'England',
                    to: 'Italy',
                    departure: '2020-02-04',
                    timed:'18:11',
                    arrival: '2020-02-04',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                } 
            },
            {
                price: '250€',
                id: 24,
                departure:{
                   from: 'Italy',
                    to: 'Germany',
                    departure: '2020-01-31',
                    timed:'18:11',
                    arrival: '2020-01-31',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Germany',
                    to: 'Italy',
                    departure: '2020-02-10',
                    timed:'18:11',
                    arrival: '2020-02-10',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                } 
            },
            {
                price: '290€',
                id: 25,
                departure:{
                    from: 'Italy',
                    to: 'Portugal',
                    departure: '2020-01-24',
                    timed:'18:11',
                    arrival: '2020-01-24',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Portugal',
                    to: 'Italy',
                    departure: '2020-02-04',
                    timed:'18:11',
                    arrival: '2020-02-04',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                }
            }
        ]
    },


    {      
        country: 'Portugal',
        id: 6,
        routes:[
            {
                price: '380€',
                id: 26,
                departure:{
                    from: 'Portugal',
                    to: 'Canada',
                    departure: '2020-01-14',
                    timed:' 18:11',
                    arrival: '2020-01-14',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Canada',
                    to: 'Portugal',
                    departure: '2020-01-24',
                    timed:' 18:11',
                    arrival: '2020-01-24',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            },
            {
                price: '490€',
                id: 27,
                departure:{
                    from: 'Portugal',
                    to: 'China',
                    departure: '2020-01-24',
                    timed:' 18:11',
                    arrival: '2020-01-24',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'China',
                    to: 'Portugal',
                    departure: '2020-02-04',
                    timed:' 18:11',
                    arrival: '2020-02-04',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }  
            },
            {
                price: '290€',
                id: 28,
                departure:{
                   from: 'Portugal',
                    to: 'England',
                    departure: '2020-01-14',
                    timed:' 18:11',
                    arrival: '2020-01-14',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                },
                retur:{
                    from: 'England',
                    to: 'Portugal',
                    departure: '2020-01-24',
                    timed:' 18:11',
                    arrival: '2020-01-24',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }    
            },
            {
                price: '290€',
                id: 29,
                departure:{
                    from: 'Portugal',
                    to: 'Germany',
                    departure: '2020-01-21',
                    timed:'18:11',
                    arrival: '2020-01-21',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Germany',
                    to: 'Portugal',
                    departure: '2020-02-01',
                    timed:'18:11',
                    arrival: '2020-02-01',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class'] 
                }
            },
            {
                price: '290€',
                id: 30,
                departure:{
                   from: 'Portugal',
                    to: 'Italy',
                    departure: '2020-01-14',
                    timed:'18:11',
                    arrival: '2020-01-14',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                },
                retur:{
                    from: 'Italy',
                    to: 'Portugal',
                    departure: '2020-01-24',
                    timed:'18:11',
                    arrival: '2020-01-24',
                    timea:'21:23',
                    cabine: ['Economy', 'Premium Economy', 'Business Class', 'First Class']
                }
            }
        ]
    }
 ]
export default FLIGHTS_DATA_RETURN;
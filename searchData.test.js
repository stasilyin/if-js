const data = [
    {
      country: 'Russia',
      city: 'Saint Petersburg',
      hotel: 'Hotel Leopold',
    },
    {
      country: 'Spain',
      city: 'Santa Cruz de Tenerife',
      hotel: 'Apartment Sunshine',
    },
    {
      country: 'Slowakia',
      city: 'Vysokie Tatry',
      hotel: 'Villa Kunerad',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hostel Friendship',
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      hotel: 'Ubud Bali Resort&SPA',
    },
    {
      country: 'Netherlands',
      city: 'Rotterdam',
      hotel: 'King Kong Hostel',
    },
    {
      country: 'Marocco',
      city: 'Ourika',
      hotel: 'Rokoko Hotel',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
  ];
  
  function searchData(searchText) {
    try {
      let searchResult = '';
      let count = 0;
      if (typeof(searchText) !== 'string') throw new Error('Enter line');
      const text = new RegExp(`.*${searchText}+.*`, 'gim');
      for (let i = 0; i < data.length; i++) {
        const currentValue = data[i].country + data[i].city + data[i].hotel;
        if (!(currentValue.search(text))) {
          searchResult += `Country: ${data[i].country}
          City: ${data[i].city}
          Hotel: ${data[i].hotel}\n------------\n`;
          count++;
        }
      }
      searchResult += `Found ${count} values on request '${searchText}'`;
      return searchResult;
    } catch (e) {
    
    }
  }

test('The function should return a string', () => {
    expect(searchData('asd')).toString();
    expect(searchData(undefined)).toString();
    expect(searchData(null)).toString();
    expect(searchData(NaN)).toString();
    expect(searchData('')).toString();
    expect(searchData({name: 'Stas'})).toString();
})

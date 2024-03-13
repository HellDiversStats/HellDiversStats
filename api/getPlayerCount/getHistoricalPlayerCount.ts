export default defineEventHandler(async (event) => {
    try {
      const response = await fetch('https://api.helldiversstats.com/1.0/getHistoricalPlayerCount');
      /*
      still needs to be done; 
      const response = await fetch(`https://api.helldiversstats.com//1.0/getHistoricalPlayerCount?startDate=${startDateStr} 00:00:00&endDate=${endDateStr} 23:59:59&page=${currentPage}`)
      */
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching player data:', error);
      event.res.statusCode = 500;
      return { message: 'Failed to fetch player data' };
    }
  });
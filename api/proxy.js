// api/proxy.js - Serverless function for proxying requests to Swiggy API

export default async function handler(req, res) {
    // Set CORS headers to allow requests from your frontend
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight requests (OPTIONS method)
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    
    // Get the target URL from query parameters
    const targetUrl = req.query.url;
    
    if (!targetUrl) {
      return res.status(400).json({ error: 'Missing URL parameter' });
    }
    
    console.log('Proxying request to:', targetUrl);
    
    try {
      // Swiggy API might need specific headers to work properly
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.swiggy.com/',
        'Origin': 'https://www.swiggy.com',
        'sec-ch-ua': '"Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
      };
      
      // Forward the request to Swiggy API
      const response = await fetch(targetUrl, {
        method: 'GET',
        headers: headers,
      });
      
      // Get the response data
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }
      
      // Forward status code
      res.status(response.status);
      
      // Set content type header
      if (contentType) {
        res.setHeader('Content-Type', contentType);
      }
      
      // Log response status for debugging
      console.log('Response status:', response.status);
      
      // Send the response back to the client
      if (typeof data === 'object') {
        res.json(data);
      } else {
        res.send(data);
      }
    } catch (error) {
      console.error('Proxy error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch from Swiggy API', 
        message: error.message 
      });
    }
  }
// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ 
    target: 'https://api.notion.com', 
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // rewrite path
    },
    onProxyReq: (proxyReq, req, res) => {
        // Add headers or other logic here before the request is sent.
    }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

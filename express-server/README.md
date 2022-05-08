

Apache bench marking

ab -c 50 -n 500 localhost:3000/fast

start clusters using pm2

pm2 start pm-index.js -i 0 // based on logical cores available in your cpu
pm2 list //to see health
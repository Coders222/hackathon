var express = require('express');
const multer = require('multer');
const file_upload = require('./file_upload.js');
const cors = require('cors');
const axios = require('axios').default;
const app = express();
app.use(cors());
app.use(express.static('public'));



// const options = {
//   method: 'POST',
//   url: 'https://api.symbl.ai/v1/process/video/url',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJuaWNrbmFtZSI6ImFuZHlsaWFuZzA1IiwibmFtZSI6IkFuZHkgU2h1YWkgTGlhbmciLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvM2M2ODEzNmQ1MmUzYmMzMTM0ZTI3NGZjM2NkNDlhNzI_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZhcy5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMi0wOC0yN1QxOTo0Mzo1NS4zMjhaIiwiZW1haWwiOiJhbmR5bGlhbmcwNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9kaXJlY3QtcGxhdGZvcm0uYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYzMDk5ZGNhNGQyZWRhNzFiNmNjN2ZiOSIsImF1ZCI6InlZOGw3cTMxeXg4aHA1UHIxYW9RakRlOWo2cWhPeFJoIiwiaWF0IjoxNjYxNjI5NDM1LCJleHAiOjE2NjE2NjU0MzV9.PMP-b3AVPuhN-gSyfY4lcEjRvhiQNHpkX9uUPJjRZYZLlyUgU2twmx8GWyKRvfwHCofX_vXbSylqZB1Kr73G9gyFuvVhg3ruq4tpyui1HJYuvl1tvZbCHPTMEcMVgnmHx6kxpAgkkIk42lPCU6QP1SJRLF8_ATaoirXLTvGZq5uEZJN_pyppPq4UdhRmiDT29djYImCRJ_v72w39Nwv1Rfk4_U4oBjAyQEHGYmvxXbdqlpINCWIEjsv3qiaN0lP8imyWTQgio5mrneDIZMtMbgMtQ6jCKnLg39TCcWuD2NFRVNcFn6y-mmxJ6O3oAgi8whXSdtR1D8zu8i9e3MkW1A'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
// });
const port = 8888;
app.get('/', (req, res) => {
    res.send('hello people');
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage}).array('file');

app.post('/upload', (req, res) => {
    console.log(req.files);
    console.log(upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        
        return res.send(req.files)
    }));
});
var authToken = null;
app.listen(port, () => {
    console.log('listening to the port: ' + port);
    
    const options = {
        method: 'POST',
        url: 'https://api.symbl.ai/oauth2/token:generate',
        headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
        data: {type: 'application',appId: '6856564b39714c4e4e7755774f79306f38694245583267326f69666450535565',
        appSecret: '31614534637363354f364567392d7a4455687331464341575f35634377727a696b476f634331755634784e4547306f3675336378624c6a53695267526d39506e',
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
      });
});
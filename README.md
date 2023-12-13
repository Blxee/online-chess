# OnlineChess:  
OnlineChess is a full-stack application for quick, enjoyable and asthetically pleasing Chess matches.  
Play [**OnlineChess**](https://online-chess.com) now!

## Installation:  

#### Pre-requisites:  
* [**Python3**](https://www.python.org/)
* [**Nodejs**](https://nodejs.org/en)

#### Install:
First run the following command to intall the dependencies:  
```bash
python3 -m venv env && source env/bin/activate && pip install -r requirements.txt && deactivate
(cd frontend && npm install)
```

## Usage:

#### Start the dev servers:
To start the web app locally, use the following commands:  
```bash
(cd backend && nohup ./manage.py runserver 8000 2>&1 > /dev/null &)
(cd frontend && nohup npm run dev -- -p 5173 2>&1 > /dev/null &)
```

#### Stop the dev servers:
And to stop, use this command:  
```bash
pkill -f 'manage.py'
pkill -f 'nmp run dev'
```

After you have installed the dependencies and started the dev servers, you can go to **http://localhost:5173**.

## Contributing:

In order to contribute to [OnlineChess](https://github.com/Blxee/online-chess):  
1. first fork the repository.
2. clone to your machine using `git clone https://github.com/<your-username>/online-chess.git`.
3. make the changes you want to make.
4. then commit the changes.
5. lastly make a pull request on [Github](https://github.com)

## Inspiration:

I made the chess web app because I really love chess and building things online. The hard part was making the game work smoothly while making it look nice. I faced challenges with the technical stuff, especially making sure it works well on different devices.

It was a learning journey, and I had to figure things out along the way to meet deadlines. I'm just a person behind the computer, passionate about creating something fun for users.

For the next version, I want to add computer opponents, improve how it looks based on user feedback, and create a community vibe with player profiles and leaderboards. I'm excited about where this project can go and open to working with others who love chess and tech.

## Copyright:

Copyright 2023 **Blxee**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

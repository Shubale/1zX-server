import express from 'express';
import { createServer } from 'node:http'
import { Server } from 'socket.io';
import Contestant from './Contestant.model';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const contestantList: Contestant[] = [
	new Contestant('Adam', 'Barnes', 'IT'),
	new Contestant('Carla', 'Davis', 'Sales'),
	new Contestant('Evan', 'Fisher', 'Fisherman'),
	new Contestant('Grace', 'Harris', 'Carpenter'),
	new Contestant('Iris', 'Jackson', 'Gardening'),
	new Contestant('Kelly', 'Lee', 'Musican'),
	new Contestant('Martin', 'Newman', 'Politican'),
	new Contestant('Olaf', 'Portman', 'Mailman'),
]

io.on('connection', (socket) => {
	io.emit('contestants', contestantList);

	socket.on('setPoints', (data) => {
		contestantList[data.id].score += data.score;
		io.emit('contestants', contestantList);
	})

	socket.on('setLife', (data) => {
		contestantList[data.id].lives += data.lives;
		if (contestantList[data.id].lives > 3) {
			contestantList[data.id].lives = 3;
		}
		if (contestantList[data.id].lives < 0) {
			contestantList[data.id].lives = 0;
		}
		io.emit('contestants', contestantList);
	})

})

io.listen(3000);
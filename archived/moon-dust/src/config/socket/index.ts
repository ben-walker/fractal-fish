import io from 'socket.io-client';

const uri = process.env.REACT_APP_ENDPOINT || '';

const socket = io(uri);

export default socket;

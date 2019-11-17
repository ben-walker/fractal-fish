import * as mongoose from 'mongoose';

const uri = process.env.DB_CONNECT_STRING || '';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

export default mongoose.connection;

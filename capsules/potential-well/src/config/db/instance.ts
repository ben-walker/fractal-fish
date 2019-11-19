import mongoose from 'mongoose';

const options: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

class DBInstance {
  private uri: string;
  private connection: mongoose.Connection;

  constructor(uri: string) {
    this.uri = uri;
    this.connection = mongoose.connection;
  }

  public connect(): void {
    mongoose.connect(this.uri, options).catch(err => {
      console.error(err.stack);
      process.exit(1);
    });
  }

  public disconnect(): void {
    this.connection.close().catch(err => {
      console.error(err.stack);
      process.exit(1);
    });
  }

  public getConnection(): mongoose.Connection {
    return this.connection;
  }
}

export default DBInstance;

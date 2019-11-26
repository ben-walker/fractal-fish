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

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(this.uri, options);
    } catch (e) {
      throw new Error(e);
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await this.connection.close();
    } catch (e) {
      throw new Error(e);
    }
  }

  public getConnection(): mongoose.Connection {
    return this.connection;
  }
}

export default DBInstance;

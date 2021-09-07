import io from "socket.io-client";
import feathers from "@feathersjs/feathers";
import socketIO from "@feathersjs/socketio-client";
import authentication from "@feathersjs/authentication-client";

const socket = io("http://localhost:3030", { transports: ["websocket"] });
const client = feathers();

client.configure(socketIO(socket));

if (typeof window != "undefined") {
  client.configure(authentication({ storage: window.localStorage }));
}

type Credentials = {
  username: string;
  password: string;
};

export const login = async (credentials?: Credentials) => {
  console.log("login");
  try {
    return await client.reAuthenticate();
  } catch (error) {
    return await client.authenticate({
      strategy: "local",
      ...credentials,
    });
  }
};

export const register = async (credentials: Credentials) => {
  try {
    await client.service("users").create(credentials);
    await login(credentials);
  } catch (error) {
    throw new Error(error);
  }
};

export default client;

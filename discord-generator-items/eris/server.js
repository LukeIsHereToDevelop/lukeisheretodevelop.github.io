const Eris = require("eris"); // Importing eris library to our code

const bot = new Eris.CommandClient(token.TOKEN, {}, { // Don't forget to put you token instead of token.TOKEN
   description: "Discord bot using Eris", // Put your bot description here
   owner: "You", // Put your owner name etc
   prefix: "+" // Put your prefix here
});

bot.on("ready", () => { 
   console.log("Ready!"); // On connected to websocket it'll notify that bot is ready
});

bot.registerCommandAlias("halp", "help"); // Making aliases for your help command

/*
 * Your help command is set by Eris by default,
 * You just need to put description for your command
 * In the thing, where you register you command
 * An example of it will be below
*/

bot.registerCommand("ping", "Pong!", {
   description: "Pong!", // Your short description of a command should go here
   fullDescription: "This command could be used to check if the bot is working.", // Long description of a command, which would be shown in help <command>
   usage: "ping", // put here a usage example of command
});

bot.registerCommand("pong", ["Pang!", "Peng!", "Ping!", "Pung!"], { // This array will be mixed, and the response will be one of the objects in it.
   description: "Ping!",
   fullDescription: "This command could also be used to check if the bot is up. Or entertainment when you're bored."
});

bot.registerCommand("say", (msg, args) => { // A simple say command, which will make bot say something, that you provide to say
   if (args.length === 0) { 
      return "Invalid input"; // If no text was provided to say - return it.
   }
   const text = args.join(" ");
   return text; // Returning message.
}, {
   description: "Make the bot say something",
   fullDescription: "The bot will echo whatever is after the command label.",
   usage: "<text>"
});

bot.connect(); // Connecting bot to the websocket

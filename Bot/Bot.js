const { Telegraf } = require('telegraf');

const TOKEN = '6636838090:AAFhYpm3ECMcClDw6yrnE_NAXcgFYSFx7ZQ';
const bot = new Telegraf(TOKEN);

const web_link = "https://tiny-custard-dc1289.netlify.app/";
const pay_link = "https://metamask.io/";

// Define the menu items keyboard
bot.start((ctx) => {
  const menuItems = [
    [{ text: "Order" }, { text: "Menu" }]
  ];

  ctx.reply("Hi Admin \nWelcome to the Bhoomi shop", {
    reply_markup: {
      keyboard: menuItems,
      resize_keyboard: true
    }
  });
  ctx.reply("Choose from the below");
});

// Handle user input for ordering
bot.hears("Order", (ctx) => {
  ctx.reply("What do you want to order?", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Order Item 1", callback_data: "order_item_1" }],
        [{ text: "Order Item 2", callback_data: "order_item_2" }],
        [{ text: "Order Item 3", callback_data: "order_item_3" }],
        [{ text: "Order Item 4", callback_data: "order_item_4" }],
        [{ text: "Order Item 5", callback_data: "order_item_5" }],
        [{ text: "Order Item 6", callback_data: "order_item_6" }]
      ]
    }
  });
});

// Handle user input for viewing the menu
bot.hears("Menu", (ctx) => {
  ctx.reply("Click the button below to view the menu", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link }}]]
    }
  });
});

// Handle callback queries for ordering items
bot.on("callback_query", (ctx) => {
  const data = ctx.update.callback_query.data;

  // Handle callback data for ordering items
  if (data.startsWith("order_item")) {
    // Extract the item number from the callback data
    const itemNumber = data.split("_")[2];
    
    // Define the item and its price based on the item number
    let itemName, itemPrice;
    switch (itemNumber) {
      case "1":
        itemName = "Pizza";
        itemPrice = "0.0061 ETH";
        break;
      case "2":
        itemName = "Burger";
        itemPrice = "0.0051 ETH";
        break;
      case "3":
        itemName = "Coca";
        itemPrice = "0.0012 ETH";
        break;
      case "4":
        itemName = "Kebab";
        itemPrice = "0.0047 ETH";
        break;
      case "5":
        itemName = "Salad";
        itemPrice = "0.00084 ETH";
        break;
      case "6":
        itemName = "Bottle of water";
        itemPrice = "0.99";
        break;
      case "7":
        itemName = "Icecream";
        itemPrice = "001";
        break;
      default:
        itemName = "Unknown Item";
        itemPrice = "Unknown Price";
    }

    // Send a message with the item and its price
    ctx.reply(`${itemName} - ${itemPrice}`,{
      reply_markup: {
        inline_keyboard: [[{ text: "Payment", web_app: { url: pay_link }}]]
      }
    });
  }
});

// Start the bot
bot.launch();

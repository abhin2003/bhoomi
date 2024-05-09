const { Telegraf } = require('telegraf');

const TOKEN = '6636838090:AAFhYpm3ECMcClDw6yrnE_NAXcgFYSFx7ZQ'
const bot = new Telegraf(TOKEN)

const web_link = "https://tiny-custard-dc1289.netlify.app/";

bot.start((ctx) => {
  const menuItems = [
    [{ text: "Order" }, { text: "Menu" }]
  ];

  ctx.reply("Hi Admin \nWelcome to the Bhoomi shop", {
    reply_markup: {
      keyboard: menuItems,
      resize_keyboard: true // Ensures the keyboard size adjusts based on the number of items
    }
  });
  ctx.reply("Choose from the below");
  

  // Listen for user input after selecting "Order"
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
          // Add more items as needed
        ]
      }
    });
  });

  // Listen for user input after selecting "Menu"
  bot.hears("Menu", (ctx) => {
    ctx.reply("Click the button below to view the menu", {
        reply_markup: {
            keyboard: [[{ text: "web app", web_app: { url: web_link }}]
        ]
      }
    });
  });
});

bot.on("callback_query", (ctx) => {
  const data = ctx.update.callback_query.data;

  // Handle callback data for ordering items
  if (data.startsWith("order_item")) {
    // Extract the item number from the callback data
    const itemNumber = data.split("_")[2];
    ctx.reply(`You selected Order Item ${itemNumber}`);
  }
});

bot.launch();

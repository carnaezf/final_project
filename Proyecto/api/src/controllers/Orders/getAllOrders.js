const { Order, User } = require("../../db");
// const { } = require("../../db");

const getAllOrders = async () => {
  try {
    const getOrders = await Order.findAll();

    for (const order of getOrders) {
      const userOrder = await User.findOne({
        where: {
          userId: order.UserUserId,
        },
      });
      order.dataValues.user = `${userOrder.name} ${userOrder.lastName}`;
    }

    return getOrders;
  } catch (error) {
    return { error: error.message };
  }
};

// const getAllOrders = async () => {
//   try {
//     const getOrders = await Order.findAll();

//     Console.log(getOrders);

//     return getOrders;
//   } catch (error) {
//     return { error: error.message };
//   }
// };

module.exports = {
  getAllOrders,
};

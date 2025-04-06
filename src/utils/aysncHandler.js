const asyncHandler = (requesHandler) => {
  (req, res, next) => {
    Promise.resolve(requesHandler(req, res, next)).catch((error) => next(err));
  };
};

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export { asyncHandler };

// const asyncHandler = () => {};
// const asyncHandler = (func) => {
//   //(func)=>()=>{}
//   () => {};
// };
// const asyncHandler = (func) => {
//   //(func)=>async()=>{}
//   async () => {};
// };

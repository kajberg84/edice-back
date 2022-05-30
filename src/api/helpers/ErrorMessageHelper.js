// helper function for rendering the error messages
export const ErrorMessageHelper = (error, message) => {
  const errorMessage = {
    message: message || 'An error ocurred',
    error: error.message,
  };

  // add stacktrace to errorMessage if in development environment
  if (process.env.ENVIRONMENT === 'DEVELOPMENT') {
    errorMessage.stackTrace = error.stack;
  }
  return errorMessage;
};

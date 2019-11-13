export const updateTimeline = (response, error) => ({
  type: 'UPDATE',
  payload: {
    response,
    error,
  },
});

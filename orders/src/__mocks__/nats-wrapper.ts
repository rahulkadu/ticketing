export const natsWrapper = {
  client: {
    publish: jest.fn().mockImplementation(
      (Subject: string, data: string, callback: () => void) => {
        callback();
    })
  },
};

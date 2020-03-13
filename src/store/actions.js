import Api from "@/api";

export const getSummary = () => {
  return new Promise((resolve, reject) => {
    Api.summary()
      .then(
        ({ data }) => resolve(data),
        ({ response }) => reject(response)
      );
  });
};

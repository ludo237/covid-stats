import Api from "@/api";

export const getSummary = () => {
  return new Promise((resolve, reject) => {
    Api
      .summary()
      .then(
        ({ data }) => resolve(data),
        ({ response }) => reject(response)
      );
  });
};

export const getDailySummary = () => {
  return new Promise((resolve, reject) => {
    Api
      .dailySummary()
      .then(
        ({ data }) => resolve(data),
        ({ response }) => reject(response),
      )
  })
}

export const getDailyReport = (date) => {
  return new Promise((resolve, reject) => {
    Api
      .dailyReport(date)
      .then(
        ({ data }) => resolve(data),
        ({ response }) => reject(response)
      )
  });
} 

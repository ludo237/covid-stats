import Api from "@/api";
import * as mutations from "./mutation-types";

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

export const getDailySummary = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Api
      .dailySummary()
      .then(
        ({ data }) => {
          commit(mutations.UPDATE_SUMMARIES, data);
          resolve(data);
        },
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

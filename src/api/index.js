"use strict";
import HttpClient from "@/services/http";

// TODO Move to env file maybe?
const URL = "https://covid19.mathdro.id/api";

const summary = async () => await HttpClient.get(URL);

const dailySummary = async () => await HttpClient.get(`${URL}/daily`);

// Date variable is expected to be m-d-yyyy
const dailyReport = async (date) => await HttpClient.get(`${URL}/daily/${date}`);

export default { summary, dailySummary, dailyReport };

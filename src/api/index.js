"use strict";
import HttpClient from "@/services/http";

// TODO Move to env file maybe?
const URL = "https://covid19.mathdro.id/api";

const summary = async () => await HttpClient.get(URL);

export default { summary };

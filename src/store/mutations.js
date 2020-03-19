import * as mutations from "./mutation-types";

export default {
  [mutations.UPDATE_SUMMARIES]: (state, dailySummaries) => state.summaries = dailySummaries,
}

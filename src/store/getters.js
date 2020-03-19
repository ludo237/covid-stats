export const todaySummary = ({ summaries }) => summaries[summaries.length - 1];

export const dailySummary = ({ summaries }) => (date) => summaries.filter(day => day.reportDateString === date)[0];

interface GhResponse {
  total: {
    [key: string]: number;
  };
  contributions: {
    date: string;
    count: number;
    level: number;
  }[];
}

export const gitHubContributions = async (): Promise<any> => {
  const data = await fetch(
    'https://github-contributions-api.jogruber.de/v4/lillianlayne?y=2024&y=2025',
  ).then(async (response): Promise<GhResponse> => {
    return await response.json();
  });

  const today = new Date();
  const todayLastYear = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate(),
  );

  const contribs: {
    date: string;
    total: number;
    weekNumber: number;
    weekDay: string;
  }[] = Object.values(data.contributions)
    .filter((value) => {
      const valueDate = new Date(value.date);
      return valueDate <= today && valueDate >= todayLastYear;
    })
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      return aDate.getTime() - bDate.getTime();
    })
    .map((value) => {
      const easternDate = new Date(value.date);
      const startOfYear = new Date(easternDate.getFullYear(), 0, 1);
      const dayOfYear = Math.floor(
        (easternDate.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000),
      );
      const dayOfWeek = startOfYear.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const ogWeekNumber = Math.ceil((dayOfYear + dayOfWeek + 2) / 7);

      const adjustedWeekNumber =
        easternDate.getFullYear() === today.getFullYear()
          ? ogWeekNumber + 54
          : ogWeekNumber;

      return {
        date: value.date,
        total: value.count,
        weekNumber: adjustedWeekNumber,
        weekDay: new Date(value.date).toLocaleDateString('en-US', {
          weekday: 'short',
        }),
      };
    });

  let weeks: {
    [key: number]: { date: string; total: number; weekNumber: number }[];
  } = {};

  for (let day of contribs) {
    if (!weeks[day.weekNumber]) {
      weeks[day.weekNumber] = [];
    }

    weeks[day.weekNumber].push(day);
  }

  const sorted = contribs.map((value) => value.total).sort((a, b) => a - b);

  const max = sorted.pop() as number;
  const min = sorted.filter((value) => value > 1).shift() as number;

  const scale = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  const scaleChunks = [];
  let chunkSize = Math.ceil(scale.length / 11);
  for (let i = 0; i < scale.length; i += chunkSize) {
    scaleChunks.push(scale.slice(i, i + chunkSize));
  }

  return { weeks, max, min, scaleChunks };
};

import { useLoaderData } from '@remix-run/react';
import { GitHubItem } from './GitHubItem';

interface DayData {
  date: string;
  total: number;
  weekNumber: number;
  weekDay: string;
}

interface WeeklyData {
  [weekNumber: string]: DayData[];
}

interface Data {
  weeks: WeeklyData;
  max: number;
  min: number;
  scaleChunks: number[][];
}

export const GitHubContribs = () => {
  const { ghContributions } = useLoaderData<{ ghContributions: Data }>();
  const { weeks, max, min, scaleChunks } = ghContributions;
  const scale = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div className='flex w-full gap-[2px]'>
      {Object.entries(weeks).map(
        ([key, value]) =>
          value.length === 7 && (
            <div key={`week-${key}`} className='flex w-full flex-col gap-[2px]'>
              {value.map((data, idx) => (
                <GitHubItem
                  key={data.date}
                  min={min}
                  max={max}
                  total={data.total}
                  chunks={scaleChunks}
                  date={data.weekDay}
                />
              ))}
            </div>
          ),
      )}
    </div>
  );
};

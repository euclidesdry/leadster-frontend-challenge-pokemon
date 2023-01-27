import * as React from 'react';
import { StatProps } from '../../types/services/pokemon';
import { Name, PercentBar, Percentage, TopInfo } from './styles';

type AbilityListProps = {
  data: StatProps[];
};

export default function AbilityList({ data }: AbilityListProps) {
  const colorByLevel = function (percentage: number) {
    if (percentage > 60) return '#08cd52';
    if (percentage > 80) return '#00c3ff';
    if (percentage > 40) return '#efe054';
    if (percentage > 20) return '#f4730a';
    return 'red';
  };

  return (
    <div>
      {data.map((stat) => (
        <div key={stat.stat.name}>
          <TopInfo>
            <Name>{stat.stat.name.replace(/-/g, ' ')}</Name>
            <span>{stat.base_stat}</span>
          </TopInfo>
          <PercentBar>
            <Percentage
              style={{
                backgroundColor: colorByLevel(stat.base_stat),
                width: `${stat.base_stat}%`,
              }}
            ></Percentage>
          </PercentBar>
        </div>
      ))}
    </div>
  );
}

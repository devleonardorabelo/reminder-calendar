function getDayWeekName(dayWeek: number): string {
  const dayWeekName = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ];
  return dayWeekName[dayWeek];
}

export default getDayWeekName;

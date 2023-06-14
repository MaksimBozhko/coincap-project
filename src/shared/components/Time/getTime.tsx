import React from 'react';

interface OptionsType {
  day: string
  month: string
  year: string

}

export function getTime() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return <span>{formattedDate}</span>;
}
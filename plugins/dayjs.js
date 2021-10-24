export default function ({ $dayjs }) {
  $dayjs.updateLocale('ko', {
    relativeTime: {
      future: 'in %s',
      past: '%s 전',
      s: '방금',
      m: '1 분',
      mm: '%d 분',
      h: '1 시간',
      hh: '%d 시간',
      d: '1 일',
      dd: '%d 일',
      M: '1 달',
      MM: '%d 달',
      y: '1 년',
      yy: '%d 년',
    },
  })
}

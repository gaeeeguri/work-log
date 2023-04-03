# 근무일지 생성기
일하는 요일과 시간, 월을 입력하면 해당 월의 근무일지를 생성합니다.

## 근무시간 설정
근무시간의 양식은 다음과 같습니다.
```javascript
{
 day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
 start: number // 오후 4시 30분 = 16.5
 end: number // start와 같음
}
```

- 예시
```javascript
[
  { date: 'mon', start: 16.5, end: 19.5 },
  { date: 'wed', start: 16.5, end: 19.5 },
  { date: 'thu', start: 16.5, end: 19.5 },
  { date: 'fri', start: 16, end: 19 },
]
```

import queryString from 'query-string'

export default function About(props) {
  const searchParams = props.location.search;
  // const obj = new URLSearchParams(searchParams); // 이것보다 queryString 패키지의 parse가 효율적 (IE 지원 등)
  // console.log(obj.get("name"));
  const query = queryString.parse(searchParams);
  // console.log(query.name)
  return (
    <div>
      about 페이지 입니다.
      {query.name && <p>name 은 {query.name} 입니다.</p>}
    </div>

  ) 
}
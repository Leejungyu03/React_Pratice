import { useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  console.log(params)
  const id = params.id
  console.log(id, typeof id)
  return (
    <div>
      profile 페이지 입니다.
      <p>{id}</p>
    </div>
  )
}
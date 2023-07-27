export default function Page({ params }: { params: { userid: string } }) {
  console.log(params)
  return <div> USER PAGE: {params.userid} </div>;
}

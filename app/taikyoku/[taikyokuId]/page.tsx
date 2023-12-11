const TaikyokuRoomPage = ({ params }: { params: { taikyokuId: string } }) => {
  console.log({ params })
  return (
    <div>
      <h1>記事の詳細</h1>
      <p>記事のスラッグ: {params.taikyokuId}</p>
    </div>
  );
}

export default TaikyokuRoomPage;

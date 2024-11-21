import CountCard from "../../components/dashboard/CountCard";

export default function Index() {
  const data = [
    {
      title: "Total Users",
      count: 20,
    },
    {
      title: "Total Songs",
      count: 20,
    },
    {
      title: "Total Artists",
      count: 20,
    },
  ];
  return (
    <>
      <div className="information row">
        {data.map((item, index) => (
          <CountCard key={index} title={item.title} count={item.count} />
        ))}
      </div>
    </>
  );
}

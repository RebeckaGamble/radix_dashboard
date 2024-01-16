import { Card, Text } from "@radix-ui/themes";

export default function Cards({ title, result, difference, icon, alt }) {
  return (
    <Card
      className=" h-[124px] rounded-xl p-3 shadow-sm relative"
      style={{
        border: "1px solid lightGray",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {icon && (
        <img
          src={icon}
          alt={alt}
          className="w-4 h-4 absolute right-1"
        />
      )}
      <Text as="h2" className="font-semibold leading-5 pb-2" style={{fontSize: "14px"}}>
        {title}
      </Text>
      <Text as="div" className="font-bold " style={{fontSize: "22px", color: "black"}} >
        {result}
      </Text>
      <Text as="div" className="font-semibold text-sm md:text-base " style={{fontSize: "12px", color: "gray" }}>
        {difference}
      </Text>
    </Card>
  );
}

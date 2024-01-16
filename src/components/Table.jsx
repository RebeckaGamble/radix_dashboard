import { Table, Text } from "@radix-ui/themes";

import firstAv from "../assets/01.png";
import secondAv from "../assets/02.png";
import thirdAv from "../assets/03.png";
import fourthAv from "../assets/04.png";
import fifthAv from "../assets/05.png";

const data = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    sales: "+$1,999.00",
    icon: firstAv,
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    sales: "+$39.00",
    icon: secondAv,
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    sales: "+$299.00",
    icon: thirdAv,
  },
  {
    name: "William Kim",
    email: "will@email.com",
    sales: "+$99.00",
    icon: fourthAv,
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    sales: "+$39.00",
    icon: fifthAv,
  },
];

export default function TableComp({ title, text }) {
  return (
    <div className="h-[438px] border border-slate-200 rounded-xl shadow-md p-6">
      <div className="w-full pb-2 pl-2">
        <h3 className="font-semibold ">{title}</h3>
        <p className="text-slate-400">{text}</p>
      </div>
      <Table.Root>
        {data.map((person, index) => (
          <Table.Body key={index} className="p-0" >
            <Table.Row >
              <Table.Cell className="w-16">
                <img
                  src={person.icon}
                  alt={person.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
              </Table.Cell>
              <Table.Cell className=" text-black ">
                {person.name}
                <br />
               <Text className="text-slate-400"> {person.email}</Text>
              </Table.Cell>
              <Table.Cell className="text-end font-bold text-[16px]">{person.sales}</Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table.Root>
    </div>
  );
}

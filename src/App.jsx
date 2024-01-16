import Cards from "./components/Card";
import { Overview } from "./components/Overview";
import Pop from "./components/Pop";
import TableComp from "./components/Table";
import TabsCont from "./components/Tabs";
//styles
import "./index.css";
//icons
import subIcon from "./assets/subIcon.svg";
import total_revenue from "./assets/total_revenue_icon.svg";
import salesIcon from "./assets/salesIcon.svg";
import activeIcon from "./assets/activeIcon.svg";
import calendar from "./assets/calendar.svg";

function App() {
  return (
    <>
      <div className="mx-auto p-4">
        <div className=" flex flex-col border-2 border-slate-200 py-6 px-8 rounded-xl shadow-xl">
          <div className="flex justify-between mb-4">
            <h2 className="text-[1.875rem] text-3xl leading-9 font-bold tracking-tight text-black">
              Dashboard
            </h2>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 pl-4 sm:pl-0 justify-end">
              <button
                type=""
                className="flex flex-row border border-slate-300 rounded-md items-center pr-6 pl-4 mr-2 w-full"
              >
                <img src={calendar} alt="calendar icon" className="pr-4" />
                Jan 20, 2024 - Feb 09, 2024
              </button>
              <button
                type="button"
                className="bg-black text-white rounded-lg px-4 py-1.5"
              >
                Download
              </button>
            </div>
          </div>
          <TabsCont />
          <div className="gap-4 justify-between grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 mb-4">
            <Cards
              title={"Total Revenue"}
              result={"$45,231.89"}
              difference={"+20.1% from last month"}
              icon={total_revenue}
              alt={"Revenue icon"}
            />
            <Cards
              title={"Subscriptions"}
              result={"+2350"}
              difference={"+180.1% from last month"}
              icon={subIcon}
              alt={"Subscription icon"}
            />
            <Cards
              title={"Sales"}
              result={"+2350"}
              difference={"+180.1% from last month"}
              icon={salesIcon}
              alt={"Sales icon"}
            />
            <Cards
              title={"Active Now"}
              result={"+573"}
              difference={"+201 since last hour"}
              icon={activeIcon}
              alt={"Active icon"}
            />
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-4 mb-4">
            <div className="w-full lg:w-[54%]">
              <Overview />
            </div>
            <div className="w-full lg:w-[46%]">
              <TableComp
                title="Recent Sales"
                text="You made 256 sales this month."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import CardBox from "@/components/inkia/card/CardBox";
import Cardia from "@/components/inkia/card/Cardia";
import CardIcon from "@/components/inkia/card/CardIcon";
import CardSide from "@/components/inkia/card/CardSide";
import { Cloud, Users, Settings, FileText, Gamepad2 } from "lucide-react";
import React from "react";
import {
  objectDataline,
  objectDataArea,
  objectDataRadian,
  objectDataDonut,
} from "@/lib/data/dashboard";

const BarChart = React.lazy(() => import("@/components/dashboard/BarChart"));
const LineChart = React.lazy(() => import("@/components/dashboard/LineChart"));
const AreaChart = React.lazy(() => import("@/components/dashboard/AreaChart"));

function Dashboard() {
  return (
    <div>
      <div className="text-center text-xl font-semibold">Dasboard</div>
      <div className="grid lg:grid-cols-7 gap-4">
        <div className="lg:col-span-5">
          <div className="grid lg:grid-cols-4 gap-4 my-4">
            <Cardia>
              <div slot="header">
                <CardIcon className="text-blue-400 bg-blue-400/20 rounded-xl">
                  <FileText />
                </CardIcon>
              </div>
              <div slot="title">Total Document</div>
              <div slot="value">2.490</div>
            </Cardia>

            <Cardia>
              <div slot="header">
                <CardIcon className=" rounded-xl">
                  <Users />
                </CardIcon>
              </div>
              <div slot="title">Total Document</div>
              <div slot="value">2.490</div>
            </Cardia>

            <Cardia>
              <div slot="header">
                <CardIcon className="text-rose-400 bg-rose-400/20 rounded-xl">
                  <Settings />
                </CardIcon>
              </div>
              <div slot="title">Total Document</div>
              <div slot="value">2.490</div>
            </Cardia>

            <Cardia>
              <div slot="header">
                <CardIcon className="text-lime-500 bg-lime-500/20 rounded-xl">
                  <Gamepad2 />
                </CardIcon>
              </div>
              <div slot="title">Total Document</div>
              <div slot="value">2.490</div>
            </Cardia>
          </div>
          <div className="grid lg:grid-cols-4 gap-4">
            <LineChart data={objectDataline} className="lg:col-span-2" />
            <BarChart className="lg:col-span-2" />
            <AreaChart data={objectDataArea} className="lg:col-span-4" />
          </div>
        </div>

        <div className="pt-4 lg:col-span-2 space-y-3">
          {[...Array(2)].map((_, index) => (
            <CardSide
              key={index}
              headerSlot={
                <CardIcon>
                  <Users />
                </CardIcon>
              }
              titleSlot={<>User Group</>}
              valueSlot={
                <>
                  <CardBox className="bg-blue-400/40" title="User" value={10} />
                  <CardBox title="Pro" value={48} />
                </>
              }
            />
          ))}

          {[...Array(2)].map((_, index) => (
            <CardSide
              key={index}
              headerSlot={
                <CardIcon className="bg-rose-500/30 text-rose-400">
                  <Settings />
                </CardIcon>
              }
              titleSlot={<>User Group</>}
              valueSlot={
                <>
                  <CardBox title="User" value={10} />
                  <CardBox className="bg-rose-500/30" title="Pro" value={48} />
                </>
              }
            />
          ))}

          {[...Array(2)].map((_, index) => (
            <CardSide
              key={index}
              headerSlot={
                <CardIcon className={`bg-lime-500/30 text-lime-500`}>
                  <Cloud />
                </CardIcon>
              }
              titleSlot={<>User Group</>}
              valueSlot={
                <>
                  <CardBox className="bg-lime-400/40" title="User" value={10} />
                  <CardBox title="Pro" value={48} />
                </>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import { Separator } from "@/components/ui/separator";
import { RentalInfo } from "@/domains/types";

interface RentalItemProps {
  rental: RentalInfo
}

export const RentalItem = ({ rental }: RentalItemProps) => {
  return (
    <button className="flex flex-col items-center justify-evenly w-full h-24 rounded-md shadow-lg bg-cyan-200 hover:bg-cyan-100 cursor-pointer transition-colors ease duration-[0.2s]">
      <div className="flex justify-evenly w-full">
        <div className="max-w-1/2">
          <p className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            Cliente: {rental.customerName}
          </p>
        </div>

        <Separator className="bg-cyan-700" orientation="vertical" />

        <div className="max-w-1/4">
          <p className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            Data: {rental.date}
          </p>
        </div>

        <Separator className="bg-cyan-700" orientation="vertical" />

        <div className="max-w-1/4">
          <p className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            Situação: {rental.status}
          </p>
        </div>
      </div>
    </button>
  );
};
